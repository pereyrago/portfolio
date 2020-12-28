import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../Colors";

const SkillCont = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1px;
  padding-top: 70px;
`;

const Skills = ({ id }) => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <SkillCont
        id={id}
        style={{ backgroundColor: Colors(nocturneMode).TERTIARY }}
      >
        <h1>Skills</h1>
      </SkillCont>
    </>
  );
};

export default Skills;
