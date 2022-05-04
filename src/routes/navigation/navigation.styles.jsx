import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  background-color: salmon;
  padding: 1rem;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
