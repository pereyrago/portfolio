import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import Colors from "../../Colors";

const SkillCont = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 1;
  background-color: var(--TERTIARY);
  padding-top: 70px;
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  height: 16%;
  width: 16%;
  margin: 2%;
  transition: 0.3s;
  &:hover {
    height: 18%;
    width: 18%;
    margin: 0;
  }
`;

const Skills = ({ id }) => {
  return (
    <>
      <SkillCont id={id}>
        <Skill>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://reactjs.org/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg"
              alt="react"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>

        <Skill>
          <a href="https://redux.js.org" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg"
              alt="redux"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://nodejs.org" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://expressjs.com" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg"
              alt="express"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>

        <Skill>
          <a href="https://www.postgresql.org" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://www.mongodb.com/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://www.w3.org/html/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://www.w3schools.com/css/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://sass-lang.com" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg"
              alt="sass"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://git-scm.com/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://graphql.org" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
              alt="graphql"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://babeljs.io/" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
              alt="babel"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://webpack.js.org" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg"
              alt="webpack"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://jestjs.io" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
              alt="jest"
              width="70%"
              height="70%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://postman.com" target="_blank">
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="80%"
              height="80%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://reactnative.dev/" target="_blank">
            <img
              src="https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png"
              alt="jasmine"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://www.docker.com/" target="_blank">
            <img
              src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg"
              alt="docker"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://expo.io/" target="_blank">
            <img
              src="https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s"
              alt="expo"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
        <Skill>
          <a href="https://nextjs.org/" target="_blank">
            <img
              src="https://cdn.auth0.com/blog/logos/nextjs-logo.png"
              alt="typescript"
              width="100%"
              height="100%"
            />
          </a>
        </Skill>
      </SkillCont>
    </>
  );
};

export default Skills;
