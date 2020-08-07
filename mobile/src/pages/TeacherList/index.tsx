import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherItemList } from '../../components/TeacherItem';

import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys Disponíveis" />

      <TeacherItemList>
        <TeacherItem />
      </TeacherItemList>
    </Container>
  );
};

export default TeacherList;
