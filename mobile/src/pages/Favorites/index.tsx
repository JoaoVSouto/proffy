import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherItemList } from '../../components/TeacherItem';

import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys Favoritos" />

      <TeacherItemList>
        <TeacherItem />
      </TeacherItemList>
    </Container>
  );
};

export default Favorites;
