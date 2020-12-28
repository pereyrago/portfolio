import React from "react";
import Form from "./Form";
import styled from "styled-components";

const ContactCont = styled.div`
  display: flex;
  flex-direction: row;
  height: "100vh";
  width: "100vw";
  background-color: "blue";
  padding-bottom: 40px;
  padding: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Contact = () => {
  return (
    <>
      <ContactCont>
        <p>
          Por favor no olvides crear tu página de agradecimiento, es una página
          simple que confirma que hemos recibido correctamente la solicitud de
          contacto, una práctica muy sana si lo que quieres es mantener al
          emisor del contacto contento; es muy frustrante que simplemente se
          borren todos los campos y no saber si se envió correctamente, o no.
          Nosotros te mostraremos ejemplos y te enseñaremos como hacerlo! En
          CHET conocemos perfectamente cómo hacer un formulario de contacto
          eficiente; si estás interesado, te invitamos a que veas más sobre
          nuestro servicio de diseño web donde vas a poder conocer más sobre
          nuestros trabajos en curso. Gracias!
        </p>
        <Form />
      </ContactCont>
    </>
  );
};

export default Contact;
