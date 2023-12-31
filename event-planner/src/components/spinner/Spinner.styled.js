import styled from "styled-components";

export const SpinnerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(117, 117, 117, 0.391);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
