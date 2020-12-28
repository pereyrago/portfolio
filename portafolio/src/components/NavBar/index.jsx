import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Colors.js";
import { useSelector, useDispatch } from "react-redux";
import changeNocturneMode from "../../store/actions";
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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
const BtnMenu = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;
const Menu = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: tomato;
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
const NavBar = () => {
  const [menu, setMenu] = useState(false);
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
        <BtnMenu onClick={() => setMenu(!menu)}>Menu</BtnMenu>
      </Nav>
      <Menu style={{ transform: menu ? "translatex(200%)" : "translatex(0%)" }}>
        <button onClick={() => setMenu(!menu)}>Gabito</button>
      </Menu>
    </>
  );
};

export default NavBar;
