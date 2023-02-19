import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  padding: 26px 0px 0px 0px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    gap: 56px;
  }

  @media (max-width: 767px) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 80px;

  .main_content {
    max-width: 470px;
    h4 {
      font-family: var(--barlow-condensed-font-family);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      padding-bottom: 11px;
      color: var(--light-blue);
    }
  }

  @media (max-width: 1100px) {
    gap: 44px;
    flex-direction: column;
    .main_content {
      h4 {
        padding-bottom: 16px;
        text-align: center;
      }
    }
  }

  @media (max-width: 767px) {
    .main_content {
      max-width: 327px;
      h4 {
        font-size: 14px;
        line-height: 17px;
        padding-bottom: 9px;
      }
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: transparent;
    font-family: var(--bellfair-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 2px;
    color: var(--white);
    cursor: pointer;

    &:hover {
      border: 1px solid #ffffff;
    }
  }

  .active {
    opacity: unset;
    mix-blend-mode: unset;
    background: var(--white);
    color: var(--dark-blue);
  }

  @media (max-width: 1100px) {
    justify-content: space-evenly;
    flex-direction: row;
    gap: 16px;

    button {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 767px) {
    button {
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 1px;
      width: 40px;
      height: 40px;
    }
  }
`;

export const H1 = styled.h1`
  font-family: var(--bellfair-font-family);
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  color: var(--white);
  padding-bottom: 17px;

  @media (max-width: 1100px) {
    text-align: center;
    font-size: 40px;
    line-height: 46px;
    padding-bottom: 16px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const P = styled.p`
  font-family: var(--barlow-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: var(--light-blue);

  @media (max-width: 1100px) {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  .landscape {
    display: none;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    .landscape {
      display: flex;
    }
    .portrait {
      display: none;
    }
    img {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
  }
`;
