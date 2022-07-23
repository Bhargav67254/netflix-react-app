import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useStateValue } from "./Stateprovider";

const Header = () => {
  const [nevBar, setNevBar] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setNevBar(true);
      } else if (window.scrollY < 10) {
        setNevBar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  function GoogleSignin() {
    auth.signInWithPopup(provider).then((response) => {
      dispatch({
        type: "SET_USER",
        user: response.user,
      });
    });
  }

  function Signout() {
    auth.signOut().then(() => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    });
  }
  return (
    <>
      {!user ? (
        <Wrapper>
          <LeftHeader>
            <img src="images/1.png" alt="" />
          </LeftHeader>
          <SignInButton onClick={GoogleSignin}>Sign in</SignInButton>
        </Wrapper>
      ) : (
        <Container nevBar={nevBar}>
          <LeftHeader>
            <Link to={"/"}>
              <img src="images/1.png" alt="" />
            </Link>
            <LeftHeaderMenu sideBar={sideBar}>
              <Wrap>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <p>Home</p>
                </Link>
              </Wrap>
              <Wrap>
                <p>Movies</p>
              </Wrap>
              <Wrap>
                <p>Tv Show</p>
              </Wrap>
              <Wrap>
                <p>My List</p>
              </Wrap>
              <Wrap onClick={Signout}>
                <p>Sign Out</p>
              </Wrap>
            </LeftHeaderMenu>
          </LeftHeader>
          <RightHeader>
            <Icons>
              <SearchIcon />
              <CardGiftcardOutlinedIcon
                style={{ marginLeft: "20", marginRight: "20" }}
              />
              <NotificationsIcon style={{ marginRight: "20" }} />
            </Icons>
            <UserIcon
              onClick={() => setSideBar(!sideBar)}
              src={user.photoURL}
            />
          </RightHeader>
        </Container>
      )}
    </>
  );
};

export default Header;
const Container = styled.div`
  height: 70px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: all 700ms;
  background-color: ${(props) =>
    props.nevBar ? `rgba(0,0,0,0.8)` : `transparent`};
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 120px;
    object-fit: contain;
    margin: 8px 20px 0px 20px;
  }
  @media screen and (max-width: 320px) {
    img {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  z-index: 1000;
  position: absolute;
  top: 20px;
`;
const SignInButton = styled(Button)`
  background-color: #e50914 !important;
  color: whitesmoke !important;
  text-transform: capitalize !important;
  letter-spacing: 1.5px !important;
  margin-right: 20px !important;
  @media screen and (max-width: 320px) {
    margin-right: 10px;
  }
`;

const LeftHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 250px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 58px;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 800ms;
    transform: ${(props) =>
      props.sideBar ? "translateX(0)" : "translateX(100%)"};
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  position: relative;
  p {
    color: whitesmoke;
    font-size: 15px;
    font-weight: 500;
    margin: 5px 5px;
    letter-spacing: 2px;
    cursor: pointer;
  }
  :hover {
    border-bottom: 1px solid whitesmoke;
    transition: all 800ms;
  }
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
const Icons = styled.div`
  display: flex;
  color: whitesmoke !important;
  cursor: pointer;
  @media screen and (max-width: 895px) {
    display: none;
  }
`;
const UserIcon = styled(Avatar)`
  cursor: pointer;
`;
