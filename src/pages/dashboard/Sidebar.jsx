import styled from "styled-components";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { blue_color, jetbrains } from "../../Components/UI/contants";

const linksSidebar = [
  {
    icon: "build-1",
    path: "/edit-profile",
    display: "editar perfil",
  },
  {
    icon: "log-out-1",
    path: "/login",
    display: "sair",
  },
];

const Sidebar = ({ name }) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  const profile = require("../../assets/img/icons/person-circle.webp");
  return (
    <SideBar
      display={desktop ? "column" : "row"}
      width={desktop ? "15%" : "100%"}
      height={"100%"}
    >
      <img
        src={profile}
        alt=""
        style={{
          height: "180px",
        }}
      />
      <ProfileName>{name}</ProfileName>
      {linksSidebar.map((link) => {
        return (
          <SidebarLink key={link.path}>
            <SidebarIcon src={require(`../../assets/img/icons/${link.icon}.webp`)} />
            <SidebarSpan>{link.display}</SidebarSpan>
          </SidebarLink>
        );
      })}
    </SideBar>
  );
};

export default Sidebar;

const SideBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => props.display};
  gap: 15px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: #f8f9fa;
`;

const ProfileName = styled.h2`
  border-bottom: 1px solid ${blue_color};
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const SidebarLink = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  gap: 2px;
  justify-content: center;
  height: 50px;
  width: 100%;

  &:hover {
    background-color: #c8dde5;
    cursor: pointer;
  }
`;

const SidebarIcon = styled.img`
  height: 30px;
`;

const SidebarSpan = styled.span`
  font-family: ${jetbrains};
  font-weight: 400;
  font-size: 20px;
`;
