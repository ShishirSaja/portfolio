import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import ThreeDBackground from "./ThreeDBackground";
import profileImage from "./profile.JPG";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  padding: 2rem;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 60, 172, 0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #94a3b8;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
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

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  overflow: hidden;
  border: 3px solid rgba(255, 60, 172, 0.3);
  box-shadow: 0 0 20px rgba(255, 60, 172, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  color: #94a3b8;
  font-size: 1.1rem;
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <ThreeDBackground />
      <HeroContent>
        <ProfileImage
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profileImage} alt="Profile" />
        </ProfileImage>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm Your Shishir S
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Undergraduate Software Engineer | web developer | MERN
        </Subtitle>
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
        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ContactItem href="mailto:shishirsaja17@gmail.com">
            <FaEnvelope />
            shishirsaja17@gmail.com
          </ContactItem>
          <ContactItem href="tel:+918884355815">
            <FaPhone />
            +91 88843 55815
          </ContactItem>
        </ContactInfo>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
