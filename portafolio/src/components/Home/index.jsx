import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Colors from "../../Colors";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
const Home = () => {
  const nocturneMode = useSelector((store) => store.nocturneMode);
  return (
    <>
      <Container style={{ backgroundColor: Colors(nocturneMode).TERTIARY }}>
        <BtnStart
          style={{
            color: Colors(nocturneMode).TERTIARY,
            backgroundColor: Colors(nocturneMode).SECONDARY,
          }}
        >
          Iniciar
        </BtnStart>
      </Container>
    </>
  );
};

export default Home;
