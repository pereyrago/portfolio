import React, { useState } from "react";
import styled from "styled-components";

const FormCont = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 30%;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
const TextArea = styled.textarea`
  resize: none;
  height: 250px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 10px;
`;
const Input = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

const Form = () => {
  const [form, setForm] = useState({});

  const formFiller = (e) => {
    return setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <FormCont>
        <h3>Nombre</h3>
        <Input placeholder="Tu nombre" name="name" onChange={formFiller} />
        <h3>Mail</h3>
        <Input
          placeholder="Tu email"
          type="email"
          name="mail"
          onChange={formFiller}
        />
        <h3>LinkedIn</h3>
        <Input
          placeholder="Tu Linkedin opcional"
          name="linkedIn"
          onChange={formFiller}
        />
        <h3>Comentario</h3>
        <TextArea
          placeholder="Dejame un comentario"
          name="comment"
          onChange={formFiller}
        />
      </FormCont>
    </>
  );
};

export default Form;
