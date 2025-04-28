import { css } from "@emotion/react";

export const footerContactsTitleStyle = css`
    font-size: 24px;
    color: #fff;
    margin-bottom: 39px;
`;

export const footerContactsItemStyle = css`
    margin-bottom: 13px;
`;

export const footerContactsLinkStyle = color =>  css`
    text-decoration: none;
    font-size: 18px;
    color: ${color};

    :hover {
        color: #fff;
}
`;

export const contactsWrapperStyle=css`
    display: flex;
    justify-content: space-between;
    align-items: center
`;

export const contactsButtonStyle = css`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 31px 0;
`;

export const socialLinksWrapper = css`
    background-color: rgba(250, 250, 250, 1);
    border-radius: 10px
`;