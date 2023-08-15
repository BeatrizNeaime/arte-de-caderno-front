import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {
  AuxDiv,
  NavContainer,
  NavDropdown,
  NavLink,
  Navnav,
} from "./navComponents";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import DropDown from "../DropDown";
import { jetbrains } from "../UI/contants";
import { LoggedContext } from "../../contexts/loggedContext";

function NavBoot({ currentPage }) {
  const desktop = useMediaQuery("(min-width: 768px)");
  const [sideMenu, setSideMenu] = useState(false);
  const [topOfPage, setTopOfPage] = useState(true);
  const { isLogged } = useContext(LoggedContext);
  const links = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "Galeria",
      path: "/galeria",
    },
    {
      name: "Sobre",
      path: "/sobre",
    },
    {
      name: isLogged ? "Perfil" : "Login",
      path: isLogged ? "/dashboard" : "/login",
    },
  ];

  var logo = require("../../assets/img/logoG.png");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
      } else {
        setTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavContainer
        position={"fixed"}
        justify={desktop ? "flex-start" : "space-evenly"}
        topOfPage={topOfPage}
      >
        <Navnav width={desktop ? "40%" : "100%"}>
          <AuxDiv width={desktop ? "25%" : "100%"}>
            <img
              src={logo}
              style={{
                height: desktop ? "60px" : "45px",
              }}
            />
          </AuxDiv>
          <AuxDiv
            width={desktop ? "75%" : "0"}
            style={{ display: desktop ? "flex" : "none" }}
          >
            {links.map((link, index) => {
              if (isLogged && link.name === "Perfil") {
                return <DropDown />;
              } else {
                return (
                  <Link
                    key={index}
                    to={link.path}
                    style={{
                      textDecoration: "none",
                      fontFamily: `${jetbrains}`,
                      textDecoration:
                        link.name === currentPage ? "underline" : "none",
                    }}
                  >
                    <NavLink
                      style={{
                        textDecoration: "none",
                        fontFamily: `${jetbrains}`,
                      }}
                    >
                      {link.name}
                    </NavLink>
                  </Link>
                );
              }
            })}
          </AuxDiv>
          <img
            src={require("../../assets/img/icons/menu.png")}
            style={{
              display: desktop ? "none" : "flex",
              height: "30px",
            }}
            onClick={() => {
              setSideMenu(!sideMenu);
            }}
          />
        </Navnav>
      </NavContainer>
      {sideMenu && (
        <NavDropdown
          onBlur={() => {
            setSideMenu(false);
          }}
        >
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.path}
                style={{ textDecoration: "none" }}
              >
                <NavLink style={{ textDecoration: "none", fontSize: "20px" }}>
                  {link.name}
                </NavLink>
              </Link>
            );
          })}
        </NavDropdown>
      )}
    </div>
  );
}

export default NavBoot;
