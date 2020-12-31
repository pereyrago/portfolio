import React from "react";
import styled from "styled-components";

const AboutCont = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 1px;
  padding-top: 70px;
  background-color: var(--PRIMARY);
`;

const AboutMe = ({ id }) => {
  return (
    <>
      <AboutCont id={id}>
        <h1>About</h1>
      </AboutCont>
    </>
  );
};

export default AboutMe;
