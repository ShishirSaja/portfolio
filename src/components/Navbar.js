import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 60, 172, 0.2);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(45deg, #ff3cac, #2b86c5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      color: #ffffff;
      background: rgba(255, 60, 172, 0.1);
    }

    &.active {
      color: #ffffff;
      background: rgba(255, 60, 172, 0.2);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MobileNavLink = styled(motion.li)`
  a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      color: #ffffff;
      background: rgba(255, 60, 172, 0.1);
    }

    &.active {
      color: #ffffff;
      background: rgba(255, 60, 172, 0.2);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <NavContent>
        <Logo href="#home">Shishir S</Logo>
        <NavLinks>
          <NavLink>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </NavLink>
          <NavLink>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContent>

      <MobileMenu
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <CloseButton onClick={closeMobileMenu}>
          <FaTimes />
        </CloseButton>
        <MobileNavLinks>
          <MobileNavLink>
            <a href="#home" onClick={closeMobileMenu}>
              Home
            </a>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#skills" onClick={closeMobileMenu}>
              Skills
            </a>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </MobileNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
