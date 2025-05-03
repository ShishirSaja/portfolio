import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

const SkillsSection = styled.section`
  padding: 5rem 10%;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  color: #ffffff;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 60, 172, 0.1);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 60, 172, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(255, 60, 172, 0.2);
    background: rgba(255, 60, 172, 0.15);
  }

  h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled(motion.li)`
  background: rgba(255, 60, 172, 0.2);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  border: 1px solid rgba(255, 60, 172, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 60, 172, 0.3);
    transform: translateY(-2px);
  }
`;

const Skills = () => {
  const skills = {
    "Frontend Development": [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JQuery",
      "Tailwind CSS",
    ],
    "Backend Development": [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "RESTful APIs",
      "Mysql",
    ],
    "Tools & Technologies": ["Git", "VS Code", "Figma", "Postman", "Github"],
  };

  return (
    <SkillsSection id="skills">
      <SkillsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </SectionTitle>
        <SkillsGrid>
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{category}</h3>
              <SkillList>
                {items.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsSection>
  );
};

export default Skills;
