import React from 'react';
import { Link } from 'react-router-dom';

import { Header, TopBarContainer, HeaderContent, Description } from './styles';

import logoImg from '../../assets/images/logo.svg';

import backIcon from '../../assets/images/icons/back.svg';

interface IProps {
  title: string;
  description?: string;
  contentMarginBottom?: boolean;
}

const PageHeader: React.FC<IProps> = ({
  children,
  title,
  description,
  contentMarginBottom,
}) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent contentMarginBottom={contentMarginBottom}>
        <strong>{title}</strong>

        {description && <Description>{description}</Description>}

        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
