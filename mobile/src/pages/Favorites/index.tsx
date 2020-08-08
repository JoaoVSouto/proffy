import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {
  TeacherItemList,
  ITeacher,
} from '../../components/TeacherItem';

import { Container, NotFound } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<ITeacher[]>([]);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadFavorites = async (): Promise<void> => {
        const favoritesData = await AsyncStorage.getItem('favorites');

        if (favoritesData) {
          const favoritedTeachers = JSON.parse(favoritesData);

          if (isActive) {
            setFavorites(favoritedTeachers);
          }
        }
      };

      loadFavorites();

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <Container>
      <PageHeader title="Meus proffys Favoritos" />

      {favorites.length === 0 && (
        <NotFound>Você ainda não possui nenhum proffy favorito!</NotFound>
      )}

      <TeacherItemList>
        {favorites.map(favorite => (
          <TeacherItem key={favorite.id} teacher={favorite} favorited />
        ))}
      </TeacherItemList>
    </Container>
  );
};

export default Favorites;
