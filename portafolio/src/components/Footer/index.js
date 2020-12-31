import React from "react";
import styled from "styled-components";
import Github from "../Images/Github";
import LinkedIn from "../Images/LinkedIn";
import Gmail from "../Images/Gmail";
import Twitter from "../Images/Twitter";

const Foot = styled.div`
  bottom: 0;
  height: auto;
  padding-top: 40px;
  padding-bottom: 1px;
  background-color: var(--SECONDARY);
  width: 100%;
  @media (max-width: 600px) {
    height: auto;
  }
`;
const Text = styled.p`
  color: white;
  font-size: 18px;
`;
const Link = styled.a`
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin-left: 20px;
`;
const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
const Rows = styled.div`
  width: 22%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 0.5fr 4fr;
  @media (max-width: 600px) {
    width: auto;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <Row>
        <Column>
          <Text>Gabriel Pereyra</Text>
          <Text>Full Stack developer</Text>
          <Text>Buenos Aires, Argentina</Text>
        </Column>
        <Column>
          <Rows>
            <Github color="white" size="30" />
            <Link href="https://github.com/pereyrago">
              github.com/pereyrago
            </Link>
          </Rows>
          <Rows>
            <LinkedIn color="white" size="30" />
            <Link href="https://www.linkedin.com/in/gabi-pereyra/">
              linkedin.com/in/gabi-pereyra/
            </Link>
          </Rows>
          <Rows>
            <Gmail color="white" size="30" />
            <Link href="mailto:pereyrago@gmail.com">pereyrago@gmail.com</Link>
          </Rows>
          <Rows>
            <Twitter color="white" size="30" />
            <Link href="https://www.linkedin.com/in/gabi-pereyra/">
              twitter.com/gabi-pereyra/
            </Link>
          </Rows>
        </Column>
      </Row>
      <Text style={{ textAlign: "center" }}>¯\_(ツ)_/¯</Text>
    </Foot>
  );
};

export default Footer;
