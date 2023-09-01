import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext, cloneElement } from "react";
import { LoggedContext } from "../../contexts/loggedContext";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const menuStyle = {
  margin: "0",
};

const items = [
  {
    label: (
      <Link
        to="/dashboard"
        style={{ textDecoration: "none", fontFamily: "JetBrains Mono" }}
      >
        Dashboard
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        to="/perfil"
        style={{ textDecoration: "none", fontFamily: "JetBrains Mono" }}
      >
        Ver perfil
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/login"
        onClick={() => {
          localStorage.removeItem('token')
        }}
        style={{ textDecoration: "none", fontFamily: "JetBrains Mono" }}
      >
        Sair
      </Link>
    ),
    key: "3",
    danger: true,
  },
];

const DropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
    style={{
      alignSelf: "center",
      margin: "0 0 0 0",
      padding: "0",
      cursor: 'pointer'
    }}
  >
    <AnotherNavLink onClick={(e) => e.preventDefault()}>
      Perfil
      <DownOutlined />
    </AnotherNavLink>
  </Dropdown>
);
export default DropDown;

const AnotherNavLink = styled.p`
  text-decoration: none;
  font-family: "JetBrains Mono";
  margin: 0;
  &:hover {
    color: #1aa9aa;
    cursor: pointer;
  }
`;
