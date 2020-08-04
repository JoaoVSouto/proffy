import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container, Form, InputBlock, Label, Input } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <InputBlock>
            <Label htmlFor="subject">Matéria</Label>
            <Input type="text" id="subject" autoComplete="off" />
          </InputBlock>

          <InputBlock>
            <Label htmlFor="week_day">Dia da semana</Label>
            <Input type="text" id="week_day" />
          </InputBlock>

          <InputBlock>
            <Label htmlFor="time">Hora</Label>
            <Input type="text" id="time" />
          </InputBlock>
        </Form>
      </PageHeader>
    </Container>
  );
};

export default TeacherList;
