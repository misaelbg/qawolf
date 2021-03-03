import { isVisible } from "./element";
import { Target } from "./types";

type OnElementAddedToGroupFn = (element: HTMLElement, depth: number) => void;

type TraverseClickableElementsInput = {
  ancestorChain?: string[];
  depth?: number;
  direction?: "up" | "down";
  element: HTMLElement;
  maxDepth?: number;
  onElementAddedToGroup: OnElementAddedToGroupFn;
};

const BUTTON_INPUT_TYPES = ["button", "image", "reset", "submit"];
const CLICK_GROUP_ELEMENTS = ["a", "button", "label"];
const MAX_CLICKABLE_ELEMENT_TRAVERSE_DEPTH = 5;

export const isLikelyTopOfClickGroup = (element: HTMLElement): boolean => {
  const tagName = element.tagName.toLowerCase();
  return (
    CLICK_GROUP_ELEMENTS.includes(tagName) ||
    element.getAttribute("role") === "button" ||
    (tagName === "input" &&
      BUTTON_INPUT_TYPES.includes(element.getAttribute("type")))
  );
};

/**
 * @summary Traverse the DOM in both directions, adding clickable elements to the array
 *   until we've determined the full set of elements that are in the clickable area.
 *   This is not foolproof because we can't know where exactly click handlers might
 *   be attached, but we can do a pretty good job of guessing.
 */
const traverseClickableElements = (
  input: TraverseClickableElementsInput
): void => {
  const {
    ancestorChain = [],
    depth = 0,
    direction = "up",
    element,
    maxDepth = MAX_CLICKABLE_ELEMENT_TRAVERSE_DEPTH,
    onElementAddedToGroup,
  } = input;

  // Regardless of which direction we're moving, stop if we hit an invisible element
  if (!isVisible(element, window.getComputedStyle(element))) return;

  // When moving up, when we reach the topmost clickable element, we
  // stop traversing up and begin traversing down from there.
  if (direction === "up" && isLikelyTopOfClickGroup(element)) {
    traverseClickableElements({
      direction: "down",
      element,
      maxDepth,
      onElementAddedToGroup,
    });
    return;
  }

  // When moving down, stop if we hit the top of another click group (nested buttons)
  if (direction === "down" && depth > 0 && isLikelyTopOfClickGroup(element))
    return;

  const newDepth = depth + 1;

  // Respect max depth
  if (newDepth > maxDepth) return;

  const lowerTagName = element.tagName.toLowerCase();

  if (direction === "up") {
    // Call self for the parent element, incrementing depth
    if (element.parentElement) {
      traverseClickableElements({
        ancestorChain: [lowerTagName, ...ancestorChain],
        depth: newDepth,
        direction,
        element: element.parentElement,
        maxDepth,
        onElementAddedToGroup,
      });
    }
  } else {
    // If we make it this far, this element should be part of the current group.
    // We add elements to the group only on the way down to avoid adding any twice.
    // Let caller do additional things with each element as we add it
    onElementAddedToGroup(element, Math.abs(depth));

    const newAncestorChain = [...ancestorChain, lowerTagName];
    console.debug(
      "qawolf: added %s to click group",
      newAncestorChain.join(" > ")
    );

    // For now, let's skip going down into SVG descendants to keep this fast. If anyone
    // finds a situation in which this causes problems, we can remove this.
    if (lowerTagName !== "svg") {
      for (const child of element.children) {
        // Call self for each child element, incrementing depth
        traverseClickableElements({
          ancestorChain: newAncestorChain,
          depth: newDepth,
          direction,
          element: child as HTMLElement,
          maxDepth,
          onElementAddedToGroup,
        });
      }
    }
  }
};

/**
 * @summary Sometimes there is a group of elements that together make up what appears
 *   to be a single button, link, image, etc. Examples: a > span | button > div > span
 *   For these we want to take into consideration the entire "clickable group" when
 *   building a good selector. The topmost clickable (a | button | input) should be
 *   preferred in many cases, but if an inner element has a lower-penalty attribute
 *   then that should be preferred.
 *
 * @return An array of HTMLElement that make up the target group. If `element`
 *   itself is not clickable, the array is just the target.
 */
export const getTargets = (target: HTMLElement, isClick: boolean): Target[] => {
  let targets: Target[] = [];

  if (isClick) {
    // Recursive function that will mutate clickableElements array. A recursive
    // function is better than loops to avoid blocking UI paint.
    traverseClickableElements({
      element: target,
      onElementAddedToGroup: (element, level) => {
        targets.push({ element, level });
      },
    });
  }

  // getTargets may have returned an empty array or it may not have been a click.
  // In that case return the provided target.
  if (targets.length < 1) {
    targets = [{ element: target, level: 0 }];
  }

  targets.sort((a, b) => a.level - b.level);

  return targets;
};
