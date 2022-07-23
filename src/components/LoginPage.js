import React from "react";
import styled from "styled-components";
import FifthPage from "./login/FifthPage";
import FirstPage from "./login/FirstPage";
import FourthPage from "./login/FourthPage";
import SecondPage from "./login/SecondPage";
import ThirdPage from "./login/ThirdPage";

const LoginPage = () => {
  return (
    <Container>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </Container>
  );
};

export default LoginPage;
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`;
