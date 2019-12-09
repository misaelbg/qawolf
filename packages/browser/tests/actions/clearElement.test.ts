import { CONFIG } from "@qawolf/config";
import { focusClearElement } from "../../src/actions";
import { launch } from "../../src/browser/launch";

describe("focusClearElement", () => {
  it("clears the input value", async () => {
    const browser = await launch({
      url: `${CONFIG.testUrl}login`
    });
    const page = await browser.page();

    const usernameElement = await browser.find({ css: "#username" });
    await usernameElement.evaluate(
      (element: HTMLInputElement) => (element.value = "spirit")
    );

    const username1 = await page.$eval(
      "#username",
      (i: HTMLInputElement) => i.value
    );
    expect(username1).toBe("spirit");

    await focusClearElement(usernameElement);

    const username2 = await page.$eval(
      "#username",
      (i: HTMLInputElement) => i.value
    );
    expect(username2).toBe("");

    await browser.close();
  });
});