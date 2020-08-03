import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis." />
    </Container>
  );
};

export default TeacherList;
