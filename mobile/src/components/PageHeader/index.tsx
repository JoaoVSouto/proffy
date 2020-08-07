import React, { ReactNode } from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Container, TopBar, Title, Header } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface IProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<IProps> = ({ title, children, headerRight }) => {
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

      <Header>
        <Title>{title}</Title>

        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
