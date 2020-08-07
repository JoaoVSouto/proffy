import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { TeacherItemList } from '../../components/TeacherItem';

import {
  Container,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  FilterButton,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleToggleFiltersVisible = (): void => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <Container>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={
          <FilterButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </FilterButton>
        }
      >
        {isFiltersVisible && (
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
        )}
      </PageHeader>

      <TeacherItemList>
        <TeacherItem />
      </TeacherItemList>
    </Container>
  );
};

export default TeacherList;
