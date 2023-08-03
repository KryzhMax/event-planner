import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: ${({ theme }) => theme.borders.normal};
  background-color: ${({ theme }) => theme.colors.button.transparent};
  color: ${(p) => p.theme.colors.white};
  min-width: 100px;
  min-height: 54px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.white};

    box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.25);
    transition: background-color ${({ theme }) => theme.animation.cubic},
      box-shadow ${({ theme }) => theme.animation.cubic};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      box-shadow: none;
    }
  }
`;
