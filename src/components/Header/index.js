// src/components/Header/index.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 1.2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const LogoText = styled.span`
  color: #f7a31c;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const LogoSubtext = styled.span`
  color: #f7a31c;
  font-size: 1rem;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #9b9b9b;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  font-weight: 500;

  &:hover, &.active {
    color: white;
  }
`;

const ReserveButton = styled(Link)`
  background-color: #f7a31c;
  color: black;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff9900;
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
          <NavLink to="/" className="active">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/traders-brawl">Traders Brawl</NavLink>
        </NavLinks>
        <ReserveButton to="/reserve">Reserve Your Spot</ReserveButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;