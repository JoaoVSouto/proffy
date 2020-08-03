import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  ${up('lgDesktop')} {
    max-width: 1200px !important;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
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

  ${up('lgDesktop')} {
    align-self: center;
    margin: 0;

    img {
      height: 100%;
      float: left;
    }

    h2 {
      width: 80%;
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const HeroImage = styled.img`
  grid-area: hero;
  width: 100%;

  ${up('lgDesktop')} {
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  grid-area: buttons;
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

  ${up('lgDesktop')} {
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  grid-area: total;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  ${up('lgDesktop')} {
    justify-self: end;
  }
`;
