// src/components/Header/index.js
import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0.9rem 4rem;
  display: flex;
  gap:5rem;
  align-items: center;
  z-index: 1000;
  border-bottom: 0.8px solid #FFCB37;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 0 10%;
`;

const LogoText = styled.span`
  color: #f7a31c;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 5px;
  font-family: 'Montagu Slab', serif;
`;

const LogoSubtext = styled.span`
  color:rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 600;
  text-align:center;
  letter-spacing: 2px;
  font-family: 'Montagu Slab', serif;
`;

const Nav = styled.nav`
margin: 0 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  font-family: 'Angkor', serif; 
`;

const StyledNavLink = styled(NavLink)`
  color: #9b9b9b;
  text-decoration: none;
  font-size: 14px;
  padding: 0.5rem 1rem; /* Add padding for better spacing */
  border-radius: 4px; /* Optional: Rounded corners for the background */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: white;
  }

  &.active {
    background-color: #333333; /* Selected button background */
    color: white; /* Ensure text color is visible */
  }
`;


const ReserveButton = styled(Link)`
  background: linear-gradient(to right, #EF7A42, #FFCB37);
  color: black;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #FFCB37, #EF7A42);
    transform: translateY(-1px);
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoText>MONEY MONDAY</LogoText>
        <LogoSubtext>DUBAI</LogoSubtext>
      </LogoContainer>

      <Nav>
        <NavLinks>
          <StyledNavLink to="/" end>Home</StyledNavLink>
          <StyledNavLink to="/events">Events</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/traders-brawl">Traders Brawl</StyledNavLink>
        </NavLinks>
        <ReserveButton to="/reserve">Reserve Your Spot</ReserveButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;