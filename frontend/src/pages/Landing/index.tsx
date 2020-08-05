import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('connections');

      setTotalConnections(data.total);
    })();
  }, []);

  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <TotalConnections className="total-connections">
          Total de {totalConnections}{' '}
          {totalConnections === 1
            ? 'conexão já realizada'
            : 'conexões já realizadas'}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
