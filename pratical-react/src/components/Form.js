import React from "react";
import { Button } from "./styles/Button.styled";
import { FormStyled } from "./styles/Form.styled";

function Form() {
  return (
    <>
      <FormStyled>
        <input type="text" placeholder="Email Address" />
        <Button>Submit</Button>
      </FormStyled>
    </>
  );
}

export default Form;
