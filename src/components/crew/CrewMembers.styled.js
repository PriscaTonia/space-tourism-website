import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 40px;
    padding-top: 60px;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding-top: 32px;
    gap: 32px;
  }
`;

export const Content = styled.div`
  max-width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1100px) {
    align-items: center;
    .header_name {
      display: flex;
      gap: 10px;
    }
  }
  @media (max-width: 767px) {
  }
`;

export const Tabs = styled.div`
  display: flex;
  max-width: 132px;
  padding-bottom: 37px;
  justify-content: space-between;

  button {
    width: 15px;
    height: 15px;
    outline: none;
    border: none;
    border-radius: 50%;
    background: var(--white);
    mix-blend-mode: normal;
    opacity: 0.17;
    cursor: pointer;

    &:hover {
      background: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  }

  .active {
    background: var(--white);
    opacity: unset;
    mix-blend-mode: unset;
  }

  @media (max-width: 1100px) {
    padding-bottom: 37px;
    width: 285.5px;
    justify-content: space-evenly;
  }

  @media (max-width: 767px) {
    width: 237.5px;
    order: -1;
    padding-bottom: 32px;
    button {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
    }
  }
`;

export const H3 = styled.h3`
  font-family: var(--bellfair-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-bottom: 15px;
  padding-top: 154px;

  @media (max-width: 1100px) {
    padding-top: 0px;
    font-size: 24px;
    line-height: 28px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 18px;
    padding-bottom: 8px;
  }
`;

export const H1 = styled.h1`
  font-family: var(--bellfair-font-family);
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 56px;
  line-height: 64px;
  color: var(--white);

  @media (max-width: 1100px) {
    text-align: center;
    font-size: 40px;
    line-height: 46px;
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
  padding-top: 27px;
  padding-bottom: 120px;
  max-width: 444px;

  @media (max-width: 1100px) {
    max-width: 458px;
    text-align: center;
    padding-bottom: 40px;
    font-size: 16px;
    line-height: 28px;
  }
  @media (max-width: 767px) {
    padding-top: 16px;
    padding-bottom: 0px;
    font-size: 15px;
    line-height: 25px;
    max-width: 327px;
  }
`;

export const Image = styled.div`
  max-width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: 572px;
    img {
    }
  }
  @media (max-width: 767px) {
    border-bottom: 2px solid #383b4b;
    height: unset;
    img {
      height: unset;
    }
    .Douglas {
      width: 177.12px;
      height: 222px;
    }
    .Mark {
      width: 153.92px;
      height: 222px;
    }
    .Victor {
      width: 180.73px;
      height: 222px;
    }
    .Anousheh {
      width: 226.15px;
      height: 223px;
    }
  }
`;
