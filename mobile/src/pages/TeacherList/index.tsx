import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {
  TeacherItemList,
  ITeacher,
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
  NotFound,
  TimeButton,
  TimeButtonText,
  DayPickerContainer,
} from './styles';

interface IFilters {
  subject: string;
}

const initialFilters: IFilters = {
  subject: '',
};

const TeacherList: React.FC = () => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [timeField, setTimeField] = useState('');
  const [time, setTime] = useState(new Date());
  const [day, setDay] = useState('0');
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [wasRequested, setWasRequested] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const loadFavorites = async (): Promise<void> => {
    const favoritesData = await AsyncStorage.getItem('favorites');

    if (favoritesData) {
      const favoritedTeachers = JSON.parse(favoritesData);
      const favoritedTeachersIds = favoritedTeachers.map(
        (teacher: ITeacher) => teacher.id
      );

      setFavorites(favoritedTeachersIds);
    }
  };

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
    const { subject } = filters;

    try {
      setIsFiltersVisible(false);

      await loadFavorites();
      const { data } = await api.get('classes', {
        params: { subject, week_day: day, time: timeField },
      });

      setTeachers(data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setWasRequested(true);
    }
  };

  const handleTimeChange = (event: Event, selectedDate?: Date): void => {
    setShowTimePicker(false);

    if (selectedDate) {
      setTime(selectedDate);

      const hours = selectedDate.getHours();
      const minutes = selectedDate.getMinutes();

      const hoursPadded = String(hours).padStart(2, '0');
      const minutesPadded = String(minutes).padStart(2, '0');

      const timeMounted = `${hoursPadded}:${minutesPadded}`;
      setTimeField(timeMounted);
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
                <DayPickerContainer>
                  <Picker
                    selectedValue={day}
                    onValueChange={itemValue => setDay(itemValue as string)}
                    style={{
                      transform: [
                        { scaleX: 0.85 },
                        { scaleY: 0.85 },
                        { translateX: -5 },
                      ],
                      marginRight: -17,
                    }}
                  >
                    <Picker.Item label="Domingo" value="0" color="#6a6180" />
                    <Picker.Item
                      label="Segunda-feira"
                      value="1"
                      color="#6a6180"
                    />
                    <Picker.Item
                      label="Terça-feira"
                      value="2"
                      color="#6a6180"
                    />
                    <Picker.Item
                      label="Quarta-feira"
                      value="3"
                      color="#6a6180"
                    />
                    <Picker.Item
                      label="Quinta-feira"
                      value="4"
                      color="#6a6180"
                    />
                    <Picker.Item
                      label="Sexta-feira"
                      value="5"
                      color="#6a6180"
                    />
                    <Picker.Item label="Sábado" value="6" color="#6a6180" />
                  </Picker>
                </DayPickerContainer>
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <TimeButton onPress={() => setShowTimePicker(true)}>
                  <TimeButtonText placeholder={!timeField}>
                    {timeField || 'Selecione'}
                  </TimeButtonText>
                  <Feather name="clock" size={20} color="#9c98a6" />
                </TimeButton>
              </InputBlock>
            </InputGroup>

            {showTimePicker && (
              <DateTimePicker
                value={time}
                onChange={handleTimeChange}
                mode="time"
                display="default"
                is24Hour
                textColor="#fff"
              />
            )}

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      {wasRequested && teachers.length === 0 && (
        <NotFound>Nenhum proffy encontrado :(</NotFound>
      )}

      <TeacherItemList>
        {teachers.map(teacher => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherItemList>
    </Container>
  );
};

export default TeacherList;
