import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHome = styled(motion.div)`
  background: var(--home-desktop-bg-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 900px) {
    background: var(--home-tablet-bg-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 767px) {
    background: var(--home-mobile-bg-image);
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

export const Main = styled(motion.main)`
  display: flex;
  justify-content: space-between;
  padding: 387px 165px 131px 165px;
  a {
    text-decoration: none;
    font-family: var(--bellfair-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 2px;
    color: var(--dark-blue);
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 156px;
    justify-content: center;
    align-items: center;
    padding: 202px 159px 90px;
  }
  @media (max-width: 767px) {
    gap: 81px;
    padding: 112px 24px 48px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  p {
    font-style: normal;
    font-weight: 400;
    /* width: fit-content; */
  }
  .first_text {
    font-family: var(--barlow-condensed-font-family);
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: var(--light-blue);
  }
  .second_text {
    font-family: var(--bellfair-font-family);
    font-size: 150px;
    line-height: 172px;
    color: var(--white);
    padding: 24px 0px;
  }
  .third_text {
    font-family: var(--barlow-font-family);
    font-size: 18px;
    line-height: 32px;
    color: var(--light-blue);
  }
  @media (max-width: 1100px) {
    align-items: center;
    .first_text {
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 3.375px;
    }
    .second_text {
      font-size: 150px;
      line-height: 150px;
    }
    .third_text {
      text-align: center;
      font-size: 16px;
      line-height: 28px;
    }
  }
  @media (max-width: 767px) {
    .first_text {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
    .second_text {
      font-size: 80px;
      line-height: 100px;
    }
    .third_text {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

export const MainDiagram = styled.button`
  border-radius: 50%;
  outline: none;
  border: none;
  align-self: flex-end;
  width: 274px;
  height: 274px;
  padding: 119px 64px 118px 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  font-family: var(--bellfair-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  letter-spacing: 2px;
  color: var(--dark-blue);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 2px 88px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1100px) {
    align-self: center;
    width: 242px;
    height: 242px;
  }
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
    padding: 68px 29.5px 59px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 1.25px;
  }
`;
