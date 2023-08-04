import styled from "styled-components";
import Box from "../common/box/Box";
import background from "../../assets/images/Geo.jpg";
// import { device } from "../../utils/device";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-image: url(${background});
`;
