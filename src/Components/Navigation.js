import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import breakpoints from "../styles/breakpoints";
import avatar from "../img/avatar.jpeg";

function Navigation() {
  return (
    <NavigationStyled>
      <NavLink to="/" end className="brand" aria-label="Home">
        <img src={avatar} alt="Amritanshu Suyal" width="1600" height="1600" />
        <span className="brand-name">Amritanshu Suyal</span>
      </NavLink>
      <ul className="nav-items">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-class" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-class" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active-class" : "")}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-class" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-class" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: var(--sidebar-dark-color);
  border-bottom: 1px solid var(--border-color);

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--border-color);
    }
    .brand-name {
      color: var(--white-color);
      font-weight: 600;
      font-size: var(--font-size-body);
      white-space: nowrap;
    }
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    li a {
      display: block;
      padding: 0.5rem 0.85rem;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: var(--font-size-small);
      letter-spacing: 1px;
      color: var(--font-light-color);
      transition: color 0.3s ease, background-color 0.3s ease;
      &:hover {
        color: var(--white-color);
      }
    }
    .active-class {
      background-color: var(--primary-color);
      color: var(--white-color) !important;
    }
  }

  @media screen and (max-width: ${breakpoints.px496}) {
    padding: 0 1rem;
    .brand-name {
      display: none;
    }
    .nav-items {
      gap: 0;
      li a {
        padding: 0.5rem 0.35rem;
        font-size: 0.65rem;
        letter-spacing: 0;
      }
    }
  }
`;

export default Navigation;
