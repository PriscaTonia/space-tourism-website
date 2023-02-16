import styled from "styled-components";

export const StyledCrew = styled.div`
  background: var(--crew-desktop-bg-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media (min-width: 768px) and (max-width: 900px) {
    background: var(--crew-tablet-bg-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 767px) {
    background: var(--crew-mobile-bg-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  padding-top: 40px;
  margin: 0px auto;

  @media (min-width: 768px) and (max-width: 900px) {
    padding-top: 0px;
  }

  @media (max-width: 767px) {
    padding-top: 24px;
  }
`;

export const Main = styled.main`
  padding: 62px 165px 0px 166.5px;
  @media (max-width: 1100px) {
    padding: 40px 0px 0px 38.5px;
  }

  @media (max-width: 767px) {
    padding: 24px 24px 104px 24px;
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

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }
`;