import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../Colors";

const ContactCont = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 1px;
  transition: 1s;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
const ContactText = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleContact = styled.div`
  font-size: 60px;
`;

const Contact = ({ id }) => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <ContactCont
        id={id}
        style={{ backgroundColor: Colors(nocturneMode).TERTIARY }}
      >
        <ContactText>
          <TitleContact>
            ¿Querés contactarme o te interesa dejarme un review de la página?
          </TitleContact>
          <p>Llená el formulario y leeré tu review </p>
        </ContactText>
        <Form />
      </ContactCont>
    </>
  );
};

export default Contact;
