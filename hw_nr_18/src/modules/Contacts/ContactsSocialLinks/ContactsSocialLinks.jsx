/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import contactsSocialLinksItems from "./contactsSocialLinksItems";
import { contactsSocialLinksListStyle, contactsSocialLinkSpanStyle  } from "./styles";


const ContactsSocialLinks = () => {
  const elements = contactsSocialLinksItems.map(({ href, icon, style }, index) => (
    <li key={index}>
      <a
        href={href}
        target="_blank"
        css={css`
          ${style && css(style)} 
          padding: 8px;
          display: inline-block;
        `}
      >
        {icon}
      </a>
    </li>
  ));

  return (
    <div >
    <span css={contactsSocialLinkSpanStyle }>Найдите нас:</span>
    <ul css={contactsSocialLinksListStyle}>{elements}</ul>
    </div>
    
  )
  
};

export default ContactsSocialLinks;
