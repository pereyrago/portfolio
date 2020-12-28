import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../Colors";

const ContactCont = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 50px;
  transition: 1s;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Contact = ({ id }) => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <ContactCont
        id={id}
        style={{ backgroundColor: Colors(nocturneMode).TERTIARY }}
      >
        <p>¿Querés contactarme o te interesa dejarme un review de la página?</p>
        <p>Llená el formulario y leeré tu review </p>
        <Form />
      </ContactCont>
    </>
  );
};

export default Contact;
