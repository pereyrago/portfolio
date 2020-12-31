import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../Colors";

const SkillCont = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 1;
  background-color: var(--TERTIARY);
  padding-top: 70px;
`;

const Skills = ({ id }) => {
  return (
    <>
      <SkillCont id={id}>
        <h1>Skills</h1>
      </SkillCont>
    </>
  );
};

export default Skills;
