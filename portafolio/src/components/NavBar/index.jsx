import React from "react";
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
`;

const Sections = styled.div`
  font-size: 20px;
  font-weight: bolder;
  font-family: Arial;
`;

const NavBar = () => {
  const nocturneMode = useSelector((store) => store.nocturneMode);

  const dispatch = useDispatch();

  const modoNoche = () => {
    dispatch(changeNocturneMode);
    return console.log(nocturneMode);
  };

  return (
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
    </Nav>
  );
};

export default NavBar;
