import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Colors from "../../Colors";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  margin: 0;
  padding: 1;
`;
const BtnStart = styled.div`
  display: flex;
  height: 20%;
  width: 30%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  @media (max-width: 600px) {
    height: 10%;
    width: 45%;
  }
`;
const Home = ({ id }) => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <Container
        id={id}
        style={{ backgroundColor: Colors(nocturneMode).TERTIARY }}
      >
        <BtnStart
          style={{
            color: Colors(nocturneMode).TERTIARY,
            backgroundColor: Colors(nocturneMode).PRIMARY,
          }}
        >
          Texto
        </BtnStart>
      </Container>
    </>
  );
};

export default Home;
