import { css } from "@emotion/react";

export const contactsSocialLinksListStyle = css`
    display: flex;
    padding: 40px 65px;
    gap: 50px;
    align-items: center;
`;

export const contactsSocialLinkSpanStyle = (color) => css`
    color: rgba(0, 0, 0, 0.7);
    font-size: 20px;
    font-weight: 600;
    color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px
`;
