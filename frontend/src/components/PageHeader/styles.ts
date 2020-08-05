import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  ${up('tablet')} {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }

  > img {
    height: 1.6rem;
  }

  ${up('tablet')} {
    max-width: 1100px;
  }
`;

interface IHeaderContentProps {
  contentMarginBottom?: boolean;
}

export const HeaderContent = styled.div<IHeaderContentProps>`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  ${({ contentMarginBottom }) =>
    contentMarginBottom &&
    css`
      margin-bottom: 6.4rem;

      ${up('tablet')} {
        margin-bottom: 0;
      }
    `}

  strong {
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  ${up('tablet')} {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    strong {
      max-width: 350px;
    }
  }
`;

export const Description = styled.p`
  max-width: 30rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: var(--color-text-in-primary);
  margin-top: 2.4rem;
`;
