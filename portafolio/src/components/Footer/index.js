import React from "react";
import styled from "styled-components";
import Github from "../Images/Github";
import LinkedIn from "../Images/LinkedIn";

const Foot = styled.div`
  height: 30vh;
  background-color: black;
  margin: 0;
  width: 100vw;
  padding: 1px;

  @media (max-width: 600px) {
    height: auto;
  }
`;
const Text = styled.p`
  color: white;
  font-size: 18px;
`;
const Link = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin-left: 20px;
`;
const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
const Rows = styled.div`
  width: 22vw;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 0.5fr 4fr;
`;

const Footer = () => {
  return (
    <Foot>
      <Row>
        <Column>
          <Text>Gabriel Pereyra</Text>
          <Text>Linked In</Text>
          <Text>GitHub</Text>
        </Column>
        <Column>
          <Text>Ubicación</Text>
          <Text>Buenos Aires, Argentina</Text>
          <Text>😊</Text>
          <Rows>
            <Github color="white" size="30" />
            <Link href="https://github.com/pereyrago">
              github.com/pereyrago
            </Link>
          </Rows>
          <Rows>
            <LinkedIn color="white" size="30" />
            <Link href="https://www.linkedin.com/in/gabi-pereyra/">
              linkedin.com/in/gabi-pereyra/
            </Link>
          </Rows>
        </Column>
      </Row>
      <Text>Copiright @ Gabriel Pereyra Todos los derechos reservados</Text>
    </Foot>
  );
};

export default Footer;
