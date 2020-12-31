import React from "react";
import styled from "styled-components";
import ProyectsCard from "./ProyectsCard";

const ProyectCont = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 1;
  padding-top: 70px;
  background-color: var(--PRIMARY);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Proyectos = ({ id }) => {
  return (
    <>
      <ProyectCont id={id}>
        <ProyectsCard />
      </ProyectCont>
    </>
  );
};

export default Proyectos;
