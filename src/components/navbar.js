import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Btn from "./button";
const StNav = styled.nav`
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: pink;
  padding: 0 15px 0 15px;
`;

function Navbar() {
  const navigate = useNavigate();
  return (
    <StNav>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </div>
      <Btn
        title="글쓰기"
        onClick={() => {
          navigate("/write");
        }}
      />
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        디테일 테스트용
      </button>
    </StNav>
  );
}

export default Navbar;
