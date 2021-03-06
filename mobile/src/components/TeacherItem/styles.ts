import styled, { css } from 'styled-components/native';

import BaseButton from '../BaseButton';

export const Container = styled.View`
  background-color: #fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
  flex-shrink: 1;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  border-top-width: 1px;
  border-top-color: #e6e6f0;
  background-color: #fafafc;
  margin-top: 24px;
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

interface IFavoriteButtonProps {
  favorited?: boolean;
}

export const FavoriteButton = styled(BaseButton)<IFavoriteButtonProps>`
  background-color: #8257e5;
  width: 56px;
  margin-right: 8px;

  ${({ favorited }) =>
    favorited &&
    css`
      background-color: #e33d3d;
    `}
`;

export const ContactButton = styled(BaseButton)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;

export const TeacherItemList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
})`
  margin-top: -40px;
`;
