import React from "react";
import styled from "styled-components";
import LoginView from "../../views/login";
import { colors } from "../../Components/UI/contants";

const Login = () => {
  return <LoginView />;
};

export default Login;

const ForgotLink = styled.a`
  color: black;
  font-size: 12px;
  text-align: center;
  &:hover {
    color: ${colors.deepBlue};
    cursor: pointer;
  }
`;

export { ForgotLink };
