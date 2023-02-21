import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.div)`
  position: fixed;
  width: 96%;
  margin-left: 4%;
  max-width: 1440px;
  height: 96px;
  padding: 39px 0px;
  display: flex;
  flex-direction: row;
  z-index: 1000;
  overflow: hidden;
  top: 40px;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
  .logo {
    min-width: 48px;
    height: 48px;
  }

  .nav-btn {
    border: none;
    outline: none;
    color: #ffffff;
    background: transparent;
    cursor: pointer;
    width: 24px;
    height: 21px;
    display: none;
    opacity: 0;
  }
  .nav-close-btn {
    position: absolute;
    top: 3.7rem;
    right: 2rem;
    color: #ffffff;
  }

  @media (min-width: 1440px) {
    left: 50%;
    transform: translateX(-50%) !important;
  }
  @media (min-width: 768px) and (max-width: 1100px) {
    top: 0px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 39px 24px;
    margin-left: 0px;
    top: 0px;
    .nav-btn {
      display: block;
      opacity: 1;
    }
    .responsive {
      transform: none;
    }
  }
`;

export const Line = styled.div`
  width: 473px;
  height: 1px;
  margin-right: -100px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  z-index: 2;

  @media (max-width: 1005px) {
    display: none;
  }
`;

export const NavCont = styled.div`
  width: fit-content;
  height: 96px;
  display: flex;
  padding: 39px 165px 39px 123px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);

  @media (min-width: 768px) and (max-width: 970px) {
    min-width: 450px;
    width: fit-content;
    padding: 39px 48px;
  }
  @media (max-width: 767px) {
    transition: 1s;
    transform: translateX(100vh);
    min-height: 100vh;
    width: 67.7%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 48px;

  a {
    span {
      margin-right: 12px;
      font-weight: 700;
    }
    font-family: var(--barlow-condensed-font-family);
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 54px;
    text-decoration: none;
    letter-spacing: 2.7px;
    color: var(--white);
    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }
  }

  .activeClassName {
    border-bottom: 3px solid var(--white);
  }

  @media (min-width: 768px) and (max-width: 900px) {
    gap: 37px;

    a {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
      span {
        display: none;
      }
    }
  }

  @media (max-width: 767px) {
    gap: 32px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 150px 20px 0px 0px;
    gap: 1.2em;
    a {
      padding-bottom: 10px;
    }
  }
`;
