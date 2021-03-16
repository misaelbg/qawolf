import { Box } from "grommet";
import styled, { keyframes } from "styled-components";

import WolfSitting from "../../shared/icons/WolfSitting";

type Props = { color?: string };

const height = "134px";

const wolfKeyFrames = keyframes`
0% {
  opacity: 0;
  transform: scale(0, 0);
}
50% {
  opacity: 0.5;
  transform: scale(1.2, 1.2);
}
100% {
  opacity: 1;
  transform: scale(1, 1);
}
`;

const StyledBox = styled(Box)`
  animation: ${wolfKeyFrames} 0.8s ease-in-out;
`;

export default function Wolf({ color }: Props): JSX.Element {
  if (!color) return <Box height={height} />;

  return (
    <StyledBox alignSelf="center" height={height}>
      <WolfSitting animate color={color} />
    </StyledBox>
  );
}