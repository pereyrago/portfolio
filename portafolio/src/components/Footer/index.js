import React from "react";
import styled from "styled-components";
import Github from "../Images/Github";

const Foot = styled.div`
  height: 30vh;
  background-color: black;
  margin: 0;
  width: 100vw;
  padding: 1px;
`;
const Text = styled.p`
  color: white;
  font-size: 18px;
`;
const Link = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
`;
const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
          <Row>
            <Github color="white" size="50" />
            <Link href="https://github.com/pereyrago">
              github.com/pereyrago
            </Link>
          </Row>
        </Column>
      </Row>
      <Text>Copiright @ Gabriel Pereyra Todos los derechos reservados</Text>
    </Foot>
  );
};

export default Footer;
