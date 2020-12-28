import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../Colors";

const ProyectCont = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1px;
  padding-top: 70px;
`;
const Proyectos = ({ id }) => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <ProyectCont
        id={id}
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: Colors(nocturneMode).PRIMARY,
        }}
      >
        <h1>Proyectos</h1>
      </ProyectCont>
    </>
  );
};

export default Proyectos;
