import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  padding: 5rem 10%;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  color: #ffffff;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 60, 172, 0.1);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 60, 172, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(255, 60, 172, 0.2);
    background: rgba(255, 60, 172, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(45deg, #ff3cac, #2b86c5);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #94a3b8;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: rgba(255, 60, 172, 0.2);
    border: 1px solid rgba(255, 60, 172, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 60, 172, 0.3);
      transform: translateY(-2px);
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Alma – Alumni Management System",
      description:
        "A full-stack web application for tracking and engaging alumni, featuring a responsive React frontend styled with Tailwind CSS and backend integration using Node.js and MySQL",
      githubLink: "https://github.com/ShishirSaja/Alumni_Network",
      liveLink: "https://project1-live.com",
      image: "/projects/alma.png",
    },
    {
      title: "Alpha 2.0 – Equity Analysis App",
      description:
        "A React-based web app for real-time equity analysis, integrating APIs to display company stats, technical indicators, and market news with a user-friendly interface.",
      githubLink: "https://github.com/ShishirSaja/sjec_alpha",
      liveLink: "https://project2-live.com",
      image: "/projects/alpha.png",
    },
    {
      title: "Fake News Detection System",
      description:
        "An AI-powered web application that uses natural language processing to classify news articles as real or fake, helping users verify information credibility in real time.",
      githubLink: "https://github.com/ShishirSaja",
      liveLink: "https://project3-live.com",
      image: "/projects/fake-news.png",
    },
    {
      title: "Basket – KOT Automation",
      description:
        "A localized restaurant order management system built with React and MySQL, streamlining KOT handling across captains, supervisors, and receptionists for efficient service flow.",
      githubLink: "https://github.com/ShishirSaja/KOT_Automation",
      liveLink: "https://project3-live.com",
      image: "/projects/basket.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ProjectLinks>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
