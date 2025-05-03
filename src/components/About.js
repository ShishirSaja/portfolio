import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 5rem 10%;
  background: linear-gradient(to bottom, #1e293b, #0f172a);
  color: #ffffff;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(to right, #ff3cac, #2b86c5);
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #94a3b8;
    margin-bottom: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 60, 172, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(255, 60, 172, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 60, 172, 0.2);
    background: rgba(255, 60, 172, 0.15);
  }

  h3 {
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  p {
    color: #94a3b8;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #ff3cac, #2b86c5);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;

    &::after {
      width: 80px;
      height: 3px;
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutText>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm a Computer Science Engineering student with a passion for
            web development and technology. I enjoy building clean, functional
            web applications and learning how things work behind the scenes. I'm
            especially interested in how modern tools, real-time systems, and AI
            can be used to create better user experiences. I've been actively
            involved in tech events, hackathons, and workshops, which have
            helped me grow both as a developer and a team player. I value
            writing clear, maintainable code and always look for opportunities
            to learn and improve. Outside of tech, I'm also an artist and a
            dancer, creative outlets that help me stay inspired and bring a
            fresh perspective to my work.
          </motion.p>
        </AboutText>
        <SkillsGrid>
          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </SkillCard>
          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB, Mysql</p>
          </SkillCard>
          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>Tools</h3>
            <p>Git, VS Code, Figma, Postman</p>
          </SkillCard>
        </SkillsGrid>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
