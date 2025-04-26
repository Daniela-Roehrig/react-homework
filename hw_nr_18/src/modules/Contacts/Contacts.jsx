/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";
import ContactsSocialLinks from "./ContactsSocialLinks/ContactsSocialLinks";

import ContactItems from "./ContactItems/ContactItems";
import { sectionTitleHeadingStyle, sectionTitleWrapperStyle } from "../../shared/components/SectionTitle/styles";
import Button from "../../shared/components/Button/Button";
import ContactsForm from "./ContactsForm/ContactsForm";
import { contactsWrapperStyle } from "./styles";
import { contactsButtonStyle, socialLinksWrapper } from "./styles"

const Contacts = () => {

    return (
        <div>
            <Container>
                <div /*  */>
                    <div>
                        <div css={sectionTitleWrapperStyle} >
                            <p css={sectionTitleHeadingStyle}>Контакты</p>
                            <ul>
                                <ContactItems />
                            </ul>
                        </div>
                    </div>
                    <div css={contactsWrapperStyle}>
                        <div  >
                            <ContactsForm />
                        </div>
                        <div css={socialLinksWrapper}>
                            <ContactsSocialLinks />
                        </div>
                    </div>
                </div>
                <div css={contactsButtonStyle} >
                    <Button type="submit"  form="contactsForm">Отправить</Button>
                </div>

            </Container>
        </div>
    )
}

export default Contacts