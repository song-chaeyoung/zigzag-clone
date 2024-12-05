import React from "react";
import {
  IoLogOutOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  img {
    width: 100px;
  }
  .header_right {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      cursor: pointer;
    }
  }
`;

const Header = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header_left">
        <Link to={"/"}>
          <img src="/logo_black.webp" alt="logo" />
        </Link>
      </div>
      <div className="header_right">
        <IoSearchOutline size={24} />
        {authenticate ? (
          <IoLogOutOutline size={24} onClick={() => setAuthenticate(false)} />
        ) : (
          <IoPersonOutline size={24} onClick={() => navigate("/login")} />
        )}
      </div>
    </Container>
  );
};

export default Header;
