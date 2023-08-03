import { BsSearch } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";
import { device } from "../../utils/device";
import Box from "../common/box";

export const InputWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
`;

// export const Label = styled.label`
//   position: relative;
//   display: flex;
// `;

export const Input = styled.input`
  position: relative;
  display: flex;
  font-size: 14px;
  align-items: center;
  width: 272px;
  height: 48px;
  background-color: #fff;

  margin-top: 20px;
  padding-left: 50px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);

  border: 1px solid transparent;
  border-radius: 10px;

  font-style: normal;

  &:hover,
  &:focus {
    outline: 1px solid #7b61ff;

    transition: outline 100ms linear;
  }
`;

export const IconSearch = styled(BsSearch)`
  width: 24px;
  height: 24px;
  color: #7b61ff;

  @media ${device.tablet} {
  }
`;

export const IconClose = styled(IoMdCloseCircleOutline)`
  width: 24px;
  height: 24px;
  color: #7b61ff;

  @media ${device.tablet} {
  }

  &:hover,
  &:focus {
  }
`;

export const IconWrapper = styled(Box)`
  position: absolute;
  left: 10px;
  top: 30px;
`;
