import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Box from "../../common/box";

export const StyledEvent = styled.li``;

export const EventWrapper = styled(Box)`
  width: 272px;
  height: 480px;
  background-color: #c8c8c8;
`;

export const StyledImg = styled.img`
  width: 272px;
  max-height: 336px;
`;

export const StyledDate = styled(Box)`
  display: flex;
  justify-content: space-between;
  max-height: 40px;
  padding: 8px 16px;

  font-size: 14px;
  line-height: 1.7;

  color: #7b61ff;
`;

export const TextWrapper = styled(Box)`
  background-color: #fff;
`;

export const StyledTitle = styled.h2`
  padding: 16px 16px 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: 0px;
  text-align: left;
`;
export const StyledDesc = styled.p`
  padding: 8px 16px 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.42;
  text-align: left;
`;

export const BoxHover = styled(Box)`
  width: 272px;
  transform: translateY(0%);

  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background: rgba(252, 132, 45, 0.2);

  &:hover,
  &:focus {
    box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
    transition: box-shadow 300ms ease-out, transform 300ms ease-out;
  }
`;

export const StyledReadMore = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  left: 50%;

  width: 114px;
  height: 40px;

  text-decoration: none;
  color: #fff;
  background-color: #7b61ff;

  padding: 8px 12px;
  border-radius: 8px;

  transform: translate(0%);
  opacity: 1;
  transition: opacity 300ms linear;
  z-index: 1;
`;
