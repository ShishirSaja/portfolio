import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterSection = styled.footer`
  padding: 3rem 10%;
  background: linear-gradient(to bottom, #1e293b, #0f172a);
  color: #ffffff;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: #ffffff;
  font-size: 1.5rem;
  background: rgba(255, 60, 172, 0.1);
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 60, 172, 0.3);

  &:hover {
    background: rgba(255, 60, 172, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(255, 60, 172, 0.3);
  }
`;

const Copyright = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://github.com/ShishirSaja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/shishirsaja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} shishirsaja. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
