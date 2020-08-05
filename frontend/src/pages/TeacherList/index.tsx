import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { Container, Form, Main } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Input
            type="text"
            label="Matéria"
            name="subject"
            autoComplete="off"
          />

          <Input type="text" label="Dia da semana" name="week_day" />

          <Input type="time" label="Hora" name="time" />
        </Form>
      </PageHeader>

      <Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
