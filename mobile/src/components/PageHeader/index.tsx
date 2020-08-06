import React from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, TopBar, Title } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

const PageHeader: React.FC = () => {
  const handleGoBack = (): void => {};

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>Proffys Disponíveis</Title>
    </Container>
  );
};

export default PageHeader;
