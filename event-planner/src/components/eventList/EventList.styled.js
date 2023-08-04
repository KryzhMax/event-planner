import styled from "styled-components";
import { device } from "../../utils/device";
// import Box from "../../components/common/box";

export const StyledWrapper = styled.ul`
  display: grid;
  gap: 20px;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
