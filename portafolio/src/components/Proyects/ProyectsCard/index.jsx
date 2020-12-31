import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90%;
  width: 90%;
  background-color: red;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const CardCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 30%;
  margin: 20px;
  background-color: transparent;
  border-radius: 10px;
  transition: 0.4s;
`;
const Card = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 10px;
  transition: 0.4s;
  &:hover {
    height: 130%;
    width: 130%;
  }
`;

const ProyectsCard = ({ proyectos }) => {
  return (
    <>
      <Container>
        <CardCont>
          <Card
            src="https://s3.amazonaws.com/use-cache.salvationarmy.org/0cf84c8a-0588-434c-afbd-d2f776e6fb37_SRC+Logo+lowres.jpg"
            alt="gabito"
          />
        </CardCont>
        <CardCont>
          <Card
            src="https://s3.amazonaws.com/use-cache.salvationarmy.org/0cf84c8a-0588-434c-afbd-d2f776e6fb37_SRC+Logo+lowres.jpg"
            alt="gabito"
          />
        </CardCont>
        <CardCont>
          <Card
            src="https://s3.amazonaws.com/use-cache.salvationarmy.org/0cf84c8a-0588-434c-afbd-d2f776e6fb37_SRC+Logo+lowres.jpg"
            alt="gabito"
          />
        </CardCont>
        <CardCont>
          <Card
            src="https://s3.amazonaws.com/use-cache.salvationarmy.org/0cf84c8a-0588-434c-afbd-d2f776e6fb37_SRC+Logo+lowres.jpg"
            alt="gabito"
          />
        </CardCont>
        <CardCont>
          <Card
            src="https://s3.amazonaws.com/use-cache.salvationarmy.org/0cf84c8a-0588-434c-afbd-d2f776e6fb37_SRC+Logo+lowres.jpg"
            alt="gabito"
          />
        </CardCont>
      </Container>
    </>
  );
};

export default ProyectsCard;
