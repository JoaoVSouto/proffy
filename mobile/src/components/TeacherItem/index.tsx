import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
// import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export { TeacherItemList } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: 'https://avatars1.githubusercontent.com/u/42191629?v=4',
          }}
        />

        <ProfileInfo>
          <Name>João Vítor</Name>
          <Subject>Matemática</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Entusiasta das melhores tecnologias de química avançada.
        {'\n'}
        {'\n'}
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton>
            <Image source={heartOutlineIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
