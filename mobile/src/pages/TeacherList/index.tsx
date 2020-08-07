import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys Disponíveis" />

      <TeacherItem />
    </Container>
  );
};

export default TeacherList;
