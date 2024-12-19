import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0.9rem 4rem;
    display: flex;
    align-items: center;
    z-index: 1000;
    border-bottom: 0.8px solid #FFCB37;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 0.9rem 2rem;
    }
`;

const LogoContainer = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    line-height: 1;
`;

const LogoText = styled.span`
    color: #f7a31c;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 5px;
    font-family: 'Montagu Slab', serif;
`;

const LogoSubtext = styled.span`
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'Montagu Slab', serif;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.95);
        padding: 1.5rem;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        gap: 2rem;
    }
`;

const Overlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2.5rem;
    align-items: center;
    font-family: 'Angkor', serif;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const StyledNavLink = styled(NavLink)`
    color: #9b9b9b;
    text-decoration: none;
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: white;
    }

    &.active {
        background-color: #333333;
        color: white;
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

const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    color: #fff;
    font-size: 2rem;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <HeaderContainer>
                <LogoContainer to="/">
                    <LogoText>MONEY MONDAY</LogoText>
                    <LogoSubtext>DUBAI</LogoSubtext>
                </LogoContainer>

                <Hamburger onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </Hamburger>

                <Nav isOpen={menuOpen}>
                    <NavLinks>
                        <StyledNavLink to="/" end onClick={closeMenu}>
                            Home
                        </StyledNavLink>
                        <StyledNavLink to="/events" onClick={closeMenu}>
                            Events
                        </StyledNavLink>
                        <StyledNavLink to="/about" onClick={closeMenu}>
                            About
                        </StyledNavLink>
                        <StyledNavLink to="/traders-brawl" onClick={closeMenu}>
                            Traders Brawl
                        </StyledNavLink>
                    </NavLinks>
                    <ReserveButton to="/reserve" onClick={closeMenu}>
                        Reserve Your Spot
                    </ReserveButton>
                </Nav>
            </HeaderContainer>
            <Overlay isOpen={menuOpen} onClick={closeMenu} />
        </>
    );
};

export default Header;
