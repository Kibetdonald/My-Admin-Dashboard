import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { FaBell, FaAngleDown } from "react-icons/fa";
import profile from "../assets/dk.svg";
import "../assets/style.css";

const Nav = styled.div`
  background-color: rgb(27, 31, 41);
  height: 70px;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.4rem;
  height: 80px;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background-color: rgb(27, 31, 41);
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "-100%" : "0%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars className="menu-icons" onClick={showSidebar} />
            &nbsp;&nbsp;
            <h4 className="dashboard-logo-text">Event-Yetu</h4>
            <div className="form-display">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  style={{width: "20vw"}}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="navbar-top-nav">
              <FaBell />
              &nbsp;&nbsp; &nbsp;&nbsp;
              <img className="avatar" src={profile} alt="profile-pic" />
              <FaAngleDown style={{ paddingTop: "6px" }} />
            </div>
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaBars className="menu-icons" onClick={showSidebar} />
              &nbsp;&nbsp;
              <h4 className="dashboard-logo-text">Event-Yetu</h4>
            </NavIcon>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
