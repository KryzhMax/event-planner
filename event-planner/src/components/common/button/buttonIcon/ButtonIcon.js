import React from "react";
import { StyledButtonIcon } from "./ButtonIcon.styled";

export default function ButtonIcon({
  children = null,
  onClick = () => {},
  hasBtnClose = true,
  ...allyProps
}) {
  return (
    <StyledButtonIcon type="button" onClick={onClick} {...allyProps}>
      {children}
    </StyledButtonIcon>
  );
}
