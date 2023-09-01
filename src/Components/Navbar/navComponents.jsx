import styled from "styled-components";
import { colors, fonts } from "../UI/contants";

const AuxDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: ${(props) => props.width};
`;

const NavContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${(props) => props.justify};
  height: 80px;
  padding: 10px;
  padding-left: 40px;
  width: 100vw;
  position: ${(p) => p.position};
  top: 0%;
  left: 0%;
  background: ${(props) =>
    props.topOfPage ? "rgba(255, 255, 255, 0.04)" : "white"};
  backdrop-filter: ${(props)=> props.topOfPage ? "blur(5px)" : "" };
`;

const Navnav = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: ${(props) => props.width};
`;

const NavLink = styled.a`
  color: #000;
  font-family: ${fonts.jetbrains};

  &:hover {
    color: ${colors.deepBlue};
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NavDrop = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(211, 211, 211, 0.5);
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-evenly;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  z-index: 999999999;

  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-60px);
      transform: translateY(-60px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export { NavContainer, Navnav, AuxDiv, NavLink, NavDrop as NavDropdown };
