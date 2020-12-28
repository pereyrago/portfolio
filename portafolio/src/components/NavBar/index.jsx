import React, { useState } from "react";
import styled from "styled-components";
import Colors from "../../Colors.js";
import { useSelector, useDispatch } from "react-redux";
import changeNocturneMode from "../../store/actions";
import RightArrow from "../Images/RightArrow";
import OpenMenu from "../Images/Menu";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const nocturneMode = useSelector((shrefre) => shrefre.nocturneMode);

  const dispatch = useDispatch();

  const modoNoche = () => {
    return dispatch(changeNocturneMode);
  };

  return (
    <>
      <Nav style={{ backgroundColor: Colors(nocturneMode).SECONDARY }}>
        <button
          onClick={() => modoNoche()}
          style={{
            textAlign: "center",
          }}
        >
          LOGO
        </button>
        <a style={{ textDecoration: "none" }} href="#home">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            Inicio
          </Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#proyects">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            Proyectos
          </Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#skills">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            Habilidades
          </Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#about">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            Sobre mi
          </Sections>
        </a>
        <a style={{ textDecoration: "none" }} href="#contact">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            Contáctame
          </Sections>
        </a>

        <OpenMenuBtn onClick={() => setMenu(!menu)}>
          <OpenMenu size="38" color={Colors(nocturneMode).TERTIARY} />
        </OpenMenuBtn>
      </Nav>
      <Menu
        style={{
          transform: menu ? "translatex(200%)" : "translatex(0%)",
          backgroundColor: Colors(nocturneMode).PRIMARY,
        }}
      >
        <MenuTitle>
          <button
            onClick={() => modoNoche()}
            style={{
              textAlign: "center",
            }}
          >
            LOGO
          </button>
          <BackBtn onClick={() => setMenu(!menu)}>
            <RightArrow size={50} color={Colors(nocturneMode).TERTIARY} />
          </BackBtn>
        </MenuTitle>
        <MenuBody>
          <a
            style={{ textDecoration: "none" }}
            href="#home"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Inicio
            </SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#proyects"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Proyectos
            </SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#skills"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Habilidades
            </SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#about"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Sobre mí
            </SectionsMb>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="#contact"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Contáctame
            </SectionsMb>
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
  @media (max-width: 600px) {
    display: none;
  }
`;
const SectionsMb = styled.div`
  font-size: 40px;
  font-weight: bolder;
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
  transform: translatex(-100%);

  transition: 0.5s;
  @media (max-width: 600px) {
    transform: translatex(0%);
    transition: 0.5s;
  }
`;
const BackBtn = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-end;
`;
const MenuTitle = styled.div`
  width: 95vw;
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
  margin-hrefp: 10%;
  height: 80vh;
  justify-content: space-between;
`;
