import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const TextArea = styled.textarea`
  resize: none;
  height: 250px;
  font-size: 16px;
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
        <input placeholder="Tu nombre" name="name" onChange={formFiller} />
        <h3>Mail</h3>
        <input
          placeholder="Tu email"
          type="email"
          name="mail"
          onChange={formFiller}
        />
        <h3>LinkedIn</h3>
        <input
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
