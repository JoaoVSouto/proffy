import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
`;

export const PageLandingContent = styled.div``;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;

    + a {
      margin-left: 1.6rem;
    }

    &.study {
      background-color: var(--color-primary-lighter);

      &:hover,
      &:focus {
        background-color: var(--color-primary-light);
      }
    }

    &.give-classes {
      background-color: var(--color-secundary);

      &:hover,
      &:focus {
        background-color: var(--color-secundary-dark);
      }
    }

    img {
      width: 4rem;
      margin-right: 2rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }
`;
