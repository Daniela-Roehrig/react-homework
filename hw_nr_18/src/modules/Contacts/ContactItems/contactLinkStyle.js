import { css } from "@emotion/react";

// Stil für die Liste
export const contactsListStyle = (color) => css`
  list-style: none;
  position: relative;

  margin-bottom: 8px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${color};
    transform: translateY(-50%);
  }   
`;

export const contactLinkStyle = (color) => css`
  text-decoration: none;
  font-size: 18px;
  color: ${color};
  padding: 20px;

  &:hover {
    color: #000;
  }
`;

