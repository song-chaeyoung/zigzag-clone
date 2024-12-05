import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  background: #ffffff;
`;

const Layout = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      {/* <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} /> */}
      <Container>
        <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
