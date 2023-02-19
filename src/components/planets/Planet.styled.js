import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 64px 163px 118px 63.5px;
  display: flex;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 1100px) {
    gap: 53px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 98px 62px 97px;
  }

  @media (max-width: 767px) {
    padding: 0px;
    padding-top: 32px;
  }
`;

export const Content = styled.div`
  max-width: 445px;
  display: flex;
  flex-direction: column;

  hr {
    height: 1px;
    background-color: #383b4b;
    border: none;
  }

  .footer_content {
    display: flex;
    justify-content: space-between;
    max-width: 344px;
    padding-top: 28px;
    p,
    span {
      display: block;
      font-style: normal;
      font-weight: 400;
    }

    p {
      font-family: var(--barlow-condensed-font-family);
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
      text-transform: uppercase;
      color: var(--light-blue);
      padding-bottom: 12px;
    }
    span {
      font-family: var(--bellfair-font-family);
      font-size: 28px;
      line-height: 32px;
      text-transform: uppercase;
      color: var(--white);
    }
  }

  @media (max-width: 1100px) {
    max-width: 573px;
    justify-content: center;
    align-items: center;
    hr {
      width: 573px;
    }
    .footer_content {
      min-width: 573px;
      justify-content: space-evenly;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 90vw;
    hr {
      /* min-width: 327px; */
      max-width: 100%;
    }
    .footer_content {
      min-width: unset;
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      p,
      span {
        text-align: center;
        width: fit-content;
      }
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  max-width: 285.5px;
  padding-bottom: 37px;
  justify-content: space-between;

  button {
    outline: none;
    border: none;
    background: transparent;
    font-family: var(--barlow-condensed-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    padding-bottom: 12px;
    cursor: pointer;
    color: var(--light-blue);

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }
  }

  .active {
    border-bottom: 3px solid var(--white);
    color: var(--white);
  }

  @media (max-width: 1100px) {
    padding-bottom: 37px;
    width: 285.5px;
    justify-content: space-evenly;
  }

  @media (max-width: 767px) {
    width: 237.5px;

    button {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
    }
  }
`;

export const H1 = styled(motion.h1)`
  font-family: var(--bellfair-font-family);
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  padding-bottom: 14px;
  color: var(--white);

  @media (max-width: 1100px) {
    text-align: center;
    font-size: 80px;
    line-height: 92px;
  }

  @media (max-width: 767px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

export const P = styled(motion.p)`
  font-family: var(--barlow-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  padding-bottom: 54px;
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

export const Distance = styled.div`
  /* max-width: 143px; */
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    align-items: center;
  }
  @media (max-width: 767px) {
    max-width: unset;
  }
`;

export const Time = styled.div`
  /* max-width: 122px; */
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    align-items: center;
  }
  @media (max-width: 767px) {
    max-width: unset;
  }
`;

export const Image = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  @media (max-width: 1100px) {
    justify-content: center;
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 767px) {
    img {
      width: 170px;
      height: 170px;
    }
  }
`;
