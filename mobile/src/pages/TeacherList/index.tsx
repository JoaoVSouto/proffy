import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherItemList } from '../../components/TeacherItem';

import {
  Container,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
} from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys Disponíveis">
        <SearchForm>
          <Label>Matéria</Label>
          <Input placeholder="Selecione" />

          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <Input placeholder="Selecione" />
            </InputBlock>

            <InputBlock>
              <Label>Horário</Label>
              <Input placeholder="Selecione" />
            </InputBlock>
          </InputGroup>
        </SearchForm>
      </PageHeader>

      <TeacherItemList>
        <TeacherItem />
      </TeacherItemList>
    </Container>
  );
};

export default TeacherList;
