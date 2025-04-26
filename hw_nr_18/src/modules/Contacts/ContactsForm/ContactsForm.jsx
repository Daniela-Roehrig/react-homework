/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import {
  textFieldWrapperStyle,
} from "./styles";

import fields from "./fields";
import { topFieldsStyle, fullWidthFieldStyle } from "./styles"

const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log("Formulardaten:", values); // hier kannst du alles machen
    reset();
  };


  return (
    <div css={textFieldWrapperStyle}>
      <form id="contactsForm" onSubmit={handleSubmit(onSubmit)}>
        <div css={topFieldsStyle}>
          <TextField
            {...fields.name}
            register={register}
            error={errors[fields.name.name]}
          />
          <TextField
            {...fields.email}
            register={register}
            error={errors[fields.email.name]}
          />
        </div>
        <TextField
          {...fields.text}
          as="textarea"
          register={register}
          error={errors[fields.text.name]}
          css={fullWidthFieldStyle}
        />
      </form>
    </div>

  );
};

export default ContactsForm;
