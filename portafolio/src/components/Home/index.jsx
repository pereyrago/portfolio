import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--TERTIARY);
  align-items: center;
  flex-direction: column;
  transition: 1s;
  margin: 0;
  padding-bottom: 1px;
`;

const Sections = styled.div`
  font-size: 70px;
  font-weight: bolder;
  font-family: Arial;
  color: var(--SECONDARY);
  transition: 0.3s;
  &:hover {
    transform: translateX(30%);
    color: var(--PRIMARY);
  }
  &:active {
    transform: translateZ(30%);
    color: var(--PRIMARY);
  }
  @media (max-width: 600px) {
  }
`;
const Home = ({ id }) => {
  return (
    <>
      <Container id={id}>
        <a style={{ textDecoration: "none" }} href="#home">
          <Sections>Inicio</Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#proyects">
          <Sections>Proyectos</Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#skills">
          <Sections>Habilidades</Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#about">
          <Sections>Sobre mi</Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#contact">
          <Sections>Contáctame</Sections>
        </a>
      </Container>
    </>
  );
};

export default Home;
