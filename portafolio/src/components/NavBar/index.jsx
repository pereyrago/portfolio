import React, { useState } from "react";
import styled from "styled-components";
import RightArrow from "../Images/RightArrow";
import OpenMenu from "../Images/Menu";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  let modoDia = true;
  const switchMode = () => {
    if (modoDia) {
      document.documentElement.style.setProperty("--PRIMARY", "#164f6b");
      document.documentElement.style.setProperty("--SECONDARY", "#051b24");
      document.documentElement.style.setProperty("--TERTIARY", "#b8b8b2");
      document.documentElement.style.setProperty("--BACKGROUND", "#2e2d2d");
      document.documentElement.style.setProperty("--ALTSECONDARY", "#023246");
    } else {
      document.documentElement.style.setProperty("--PRIMARY", "#287094");
      document.documentElement.style.setProperty("--SECONDARY", "#023246");
      document.documentElement.style.setProperty("--TERTIARY", "#d4d4ce");
      document.documentElement.style.setProperty("--BACKGROUND", "#f6f6f6");
      document.documentElement.style.setProperty("--ALTSECONDARY", "#051b24");
    }
    return (modoDia = !modoDia);
  };

  return (
    <>
      <Nav>
        <button
          onClick={switchMode}
          style={{
            textAlign: "center",
          }}
        >
          LOGO
        </button>
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

        <OpenMenuBtn onClick={() => setMenu(!menu)}>
          <OpenMenu color="var(--TERTIARY)" size="38" />
        </OpenMenuBtn>
      </Nav>
      <Menu
        style={{
          transform: menu ? "translatex(200%)" : "translatex(0%)",
        }}
      >
        <MenuTitle>
          <button
            onClick={() => switchMode()}
            style={{
              textAlign: "center",
            }}
          >
            LOGO
          </button>
          <BackBtn onClick={() => setMenu(!menu)}>
            <RightArrow size={50} color="var(--TERTIARY)" />
          </BackBtn>
        </MenuTitle>
        <MenuBody>
          <a
            style={{ textDecoration: "none" }}
            href="#home"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb>Inicio</SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#proyects"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb>Proyectos</SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#skills"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb>Habilidades</SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#about"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb>Sobre mí</SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#contact"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb>Contáctame</SectionsMb>
          </a>
        </MenuBody>
      </Menu>
    </>
  );
};

export default NavBar;

//ESTILOS

const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0;
  background-color: var(--SECONDARY);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  height: 70px;
  transition: 0.5s;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
  }
`;

const Sections = styled.div`
  font-size: 20px;
  font-weight: bolder;
  font-family: Arial;
  color: var(--TERTIARY);
  @media (max-width: 600px) {
    display: none;
  }
`;
const SectionsMb = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: var(--TERTIARY);
  margin: 40px;
  font-family: Arial;
`;
const Menu = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;

  background-color: var(--PRIMARY);
  transition: 0.5s;
  @media (max-width: 600px) {
    transition: 0.5s;
  }
`;
const BackBtn = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
`;
const MenuTitle = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;
const OpenMenuBtn = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`;
const MenuBody = styled.div`
  margin-top: 10%;
  height: 80vh;
  justify-content: space-between;
`;
