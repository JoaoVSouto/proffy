import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, TopBarContainer, HeaderContent } from './styles';

import logoImg from '../../assets/images/logo.svg';

import backIcon from '../../assets/images/icons/back.svg';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <Header>
        <TopBarContainer>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <img src={logoImg} alt="Proffy" />
        </TopBarContainer>

        <HeaderContent>
          <strong>Estes são os proffys disponíveis.</strong>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default TeacherList;
