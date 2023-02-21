import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTechnology = styled(motion.div)`
  background: var(--tech-desktop-bg-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 900px) {
    background: var(--tech-tablet-bg-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 767px) {
    background: var(--tech-mobile-bg-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0px auto;

  @media (min-width: 768px) and (max-width: 900px) {
  }

  @media (max-width: 767px) {
  }
`;

export const Main = styled.main`
  padding: 212px 0px 101px 166.5px;
  @media (max-width: 1100px) {
    padding: 136px 0px 97px 0px;
  }

  @media (max-width: 767px) {
    padding: 88px 0px 81px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const H2 = styled.h2`
  font-family: var(--barlow-condensed-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: var(--white);

  span {
    font-weight: 700;
    mix-blend-mode: normal;
    opacity: 0.25;
  }

  @media (max-width: 1100px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
    padding-left: 38.5px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    padding-left: 0px;
  }
`;
