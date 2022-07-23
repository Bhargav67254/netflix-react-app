import React from "react";
import styled from "styled-components";
const FirstPage = () => {
  return (
    <Container>
      <img src="images/9.jpg" alt="" />
      <Wrapper>
        <h1>
          Unlimited movies, TV
          <br />
          shows, and more.
        </h1>
        <p>Watch anywhere. Cancel Anytime.</p>
      </Wrapper>
    </Container>
  );
};

export default FirstPage;
const Container = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    opacity: 0.4;
    z-index: -1;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: absolute;
  letter-spacing: 1.5px;
  top: 0;
  left: 0;
  right: 0;
  height: 90vh;

  h1 {
    color: whitesmoke;
    font-size: 50px;
    text-align: center;
  }
  p {
    color: whitesmoke;
    font-size: 25px;
    text-align: center;
  }
`;
