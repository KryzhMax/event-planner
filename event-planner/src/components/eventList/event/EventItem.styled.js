import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Box from "../../common/box";

export const BoxHover = styled(Box)`
  width: 272px;
  overflow: initial;

  transition: transform 300ms ease-in-out, translateY 300ms ease-in-out;
`;

export const StyledEvent = styled.li`
  position: relative;
  overflow: hidden;
  height: 480px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);

  &:hover ${BoxHover}, &:focus ${BoxHover} {
    transform: translateY(-56px);
  }
`;
export const StyledCard = styled(Box)`
  position: relative;
  height: 464px;

  background-color: #fff;
  border-radius: 12px;
  box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
`;

export const EventWrapper = styled(Box)`
  width: 272px;
  height: 480px;
  background-color: #c8c8c8;
`;

export const StyledImg = styled.img`
  width: 272px;
  min-height: 296px;
`;

export const StyledDatePlace = styled.span`
  max-height: 40px;

  font-size: 14px;
  line-height: 1.7;

  color: #7b61ff;
`;

export const TextWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const StyledTitle = styled.h2`
  padding: 13px 16px 8px 16px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: 0px;
  text-align: left;
`;
export const StyledDesc = styled.p`
  padding: 8px 16px 16px;
  height: 96px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.42;
  text-align: left;
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

export const Container = styled(Box)`
  padding: 20px;
`;
