/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import footerContactsItems from "../../Footer/FooterContacts/footerContactsItems";
import { contactLinkStyle, contactsListStyle} from './contactLinkStyle'
import { footerContactsTitleStyle } from "../../Footer/FooterContacts/styles";

const ContactItems = () => {
  const { colors } = useTheme();

  const elements = footerContactsItems.map(({ href, text }) => (
    <li key={text} css={contactsListStyle(colors.darkLight)}>
      <a href={href} css={contactLinkStyle(colors.darkLight)}>
        {text}
      </a>
    </li>
  ));

  return (
    <div>
      <p css={footerContactsTitleStyle}>Контакты</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default ContactItems;
