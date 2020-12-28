import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Colors.js";
import { useSelector, useDispatch } from "react-redux";
import changeNocturneMode from "../../store/actions";
import RightArrow from "../Images/RightArrow";
import OpenMenu from "../Images/Menu";

const NavBar = () => {
  const [menu, setMenu] = useState(true);
  const nocturneMode = useSelector((store) => store.nocturneMode);

  const dispatch = useDispatch();

  const modoNoche = () => {
    dispatch(changeNocturneMode);
    return console.log(nocturneMode);
  };

  return (
    <>
      <Nav style={{ backgroundColor: Colors(nocturneMode).PRIMARY }}>
        <button
          onClick={() => modoNoche()}
          style={{
            textAlign: "center",
          }}
        >
          LOGO
        </button>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            A Home
          </Sections>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/proyects">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            A Proyects
          </Sections>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/skills">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            A Skills
          </Sections>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/about">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            A About
          </Sections>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          <Sections style={{ color: Colors(nocturneMode).TERTIARY }}>
            A Contact
          </Sections>
        </NavLink>

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
          <NavLink
            style={{ textDecoration: "none" }}
            to="/home"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Home
            </SectionsMb>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/proyects"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Proyects
            </SectionsMb>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/skills"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Skills
            </SectionsMb>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/about"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              About
            </SectionsMb>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/contact"
            onClick={() => setMenu(!menu)}
          >
            <SectionsMb style={{ color: Colors(nocturneMode).TERTIARY }}>
              Contact
            </SectionsMb>
          </NavLink>
        </MenuBody>
      </Menu>
    </>
  );
};

export default NavBar;

//ESTILOS

const Nav = styled.div`
  width: 100vw;
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
  font-size: 50px;
  font-weight: bolder;
  margin: 35px;
  font-family: Arial;
`;
const Menu = styled.div`
  height: 100vh;
  width: 100vw;
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
  margin-top: 10%;
  height: 80vh;
  justify-content: space-between;
`;
