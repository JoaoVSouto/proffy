import React from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Container, TopBar, Title } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface IProps {
  title: string;
}

const PageHeader: React.FC<IProps> = ({ title, children }) => {
  const { navigate } = useNavigation();

  const handleGoBack = (): void => {
    navigate('Landing');
  };

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>

      {children}
    </Container>
  );
};

export default PageHeader;
