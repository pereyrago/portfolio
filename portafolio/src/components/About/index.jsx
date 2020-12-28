import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../../Colors";

const AboutCont = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1px;
  padding-top: 70px;
`;

const AboutMe = ({ id }) => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <AboutCont
        id={id}
        style={{ backgroundColor: Colors(nocturneMode).PRIMARY }}
      >
        <h1>About</h1>
      </AboutCont>
    </>
  );
};

export default AboutMe;
