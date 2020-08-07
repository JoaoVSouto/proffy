import React, { useMemo } from 'react';
import { Image, Linking } from 'react-native';

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

// import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export { TeacherItemList } from './styles';

export interface ITeacher {
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
}

const TeacherItem: React.FC<IProps> = ({ teacher }) => {
  const costFormatted = useMemo(() => format.toBRLCurrency(teacher.cost), [
    teacher,
  ]);

  const handleLinkToWhatsapp = (): void => {
    Linking.openURL(
      `whatsapp://send?phone=+55${teacher.whatsapp}&text=Olá ${teacher.name}, tudo bem? Gostaria de falar com você sobre suas aulas de ${teacher.subject} :D`
    );
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
          <FavoriteButton favorited>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
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
