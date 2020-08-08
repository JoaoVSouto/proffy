import React, { useMemo, useState } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import format from '../../utils/format';

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
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export { TeacherItemList } from './styles';

export interface ITeacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  whatsapp: string;
  cost: number;
  bio: string;
  user_id: string;
}

interface IProps {
  teacher: ITeacher;
  favorited: boolean;
}

const TeacherItem: React.FC<IProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const costFormatted = useMemo(() => format.toBRLCurrency(teacher.cost), [
    teacher,
  ]);

  const handleLinkToWhatsapp = (): void => {
    Linking.openURL(
      `whatsapp://send?phone=+55${teacher.whatsapp}&text=Olá ${teacher.name}, tudo bem? Gostaria de falar com você sobre suas aulas de ${teacher.subject} :D`
    );
  };

  const handleToggleFavorite = async (): Promise<void> => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const teacherIndex = favoritesArray.findIndex(
        (tchr: ITeacher) => tchr.id === teacher.id
      );

      favoritesArray.splice(teacherIndex, 1);
    } else {
      favoritesArray.push(teacher);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    setIsFavorited(!isFavorited);
  };

  return (
    <Container>
      <Profile>
        <Avatar
          source={{
            uri: teacher.avatar,
          }}
        />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>{costFormatted}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton
            favorited={isFavorited}
            onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
