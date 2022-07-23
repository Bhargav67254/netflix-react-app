import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/home/DetailPage";
import DetailPageTwo from "./components/home/DetailPageTwo";
import { useStateValue } from "./components/Stateprovider";
import { auth } from "./firebase";
import Custom404page from "./components/Custom404page";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Main>
      <Header />
      {!user ? (
        <Container>
          <LoginPage />
        </Container>
      ) : (
        <Container>
          <Switch>
            <Route path={"/details/:id"} component={DetailPage} />
            <Route path={"/detail/:id"} component={DetailPageTwo} />
            <Route exact path={"/"} component={HomePage} />
            <Route path={"*"} component={Custom404page} />
          </Switch>
        </Container>
      )}
    </Main>
  );
};

export default App;
const Container = styled.div`
  overflow-x: hidden;
  scroll-behavior: smooth;
`;
const Main = styled(Router)`
  overflow-x: hidden;
`;
