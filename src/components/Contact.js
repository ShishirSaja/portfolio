import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

const ContactSection = styled.section`
  padding: 5rem 10%;
  background: linear-gradient(to bottom, #1e293b, #0f172a);
  color: #ffffff;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #ff3cac, #2b86c5);
  }
`;

const ContactText = styled(motion.p)`
  font-size: 1.2rem;
  color: #94a3b8;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #ffffff;
  font-size: 1rem;
  text-align: left;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 60, 172, 0.3);
  background: rgba(255, 60, 172, 0.1);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 60, 172, 0.5);
    background: rgba(255, 60, 172, 0.15);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 60, 172, 0.3);
  background: rgba(255, 60, 172, 0.1);
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 60, 172, 0.5);
    background: rgba(255, 60, 172, 0.15);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
  background: linear-gradient(45deg, #ff3cac, #2b86c5);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 60, 172, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const DownloadResume = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff3cac, #2b86c5);
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 2rem auto;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 60, 172, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 60, 172, 0.4);
  }

  svg {
    font-size: 1.3rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContent>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        <ContactText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </ContactText>

        <DownloadResume
          href="/projects/resume.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload />
          Download Resume
        </DownloadResume>

        <ContactForm
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Your message"
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
