import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  NavLinks,
  NavLink,
  NavigationContainer,
  Title,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Link to="/">
          <Title>The Best App Ever</Title>
        </Link>
        <NavLinks>
          <NavLink to="/">Users</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
