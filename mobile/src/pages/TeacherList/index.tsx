import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {
  TeacherItemList,
  ITeacher as ITeacherData,
} from '../../components/TeacherItem';

import api from '../../services/api';

import {
  Container,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  FilterButton,
  SubmitButton,
  SubmitButtonText,
} from './styles';

interface IFilters {
  subject: string;
  week_day: string;
  time: string;
}

interface ITeacher extends ITeacherData {
  id: number;
}

const initialFilters: IFilters = {
  subject: '',
  week_day: '',
  time: '',
};

const TeacherList: React.FC = () => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const handleToggleFiltersVisible = (): void => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const handleInputChange = (filter: keyof IFilters) => (
    fieldValue: string
  ) => {
    setFilters({
      ...filters,
      [filter]: fieldValue,
    });
  };

  const handleFiltersSubmit = async (): Promise<void> => {
    const { subject, week_day, time } = filters;

    try {
      const { data } = await api.get('classes', {
        params: { subject, week_day, time },
      });

      setTeachers(data);
      setIsFiltersVisible(false);
    } catch (err) {
      throw new Error(err);
    }
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
            <Input
              placeholder="Selecione"
              value={filters.subject}
              onChangeText={handleInputChange('subject')}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Selecione"
                  value={filters.week_day}
                  onChangeText={handleInputChange('week_day')}
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Selecione"
                  value={filters.time}
                  onChangeText={handleInputChange('time')}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherItemList>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </TeacherItemList>
    </Container>
  );
};

export default TeacherList;
