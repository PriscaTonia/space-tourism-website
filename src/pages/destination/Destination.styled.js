import styled from "styled-components";

export const StyledDest = styled.div`
  background: var(--dest-desktop-bg-image);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media (min-width: 768px) and (max-width: 900px) {
    background: var(--dest-tablet-bg-image);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 767px) {
    background: var(--dest-mobile-bg-image);
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

export const Main = styled.main``;
