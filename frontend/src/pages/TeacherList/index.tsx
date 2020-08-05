import React, { useState, FormEvent, ChangeEvent } from 'react';

import { GoSearch } from 'react-icons/go';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {
  ITeacher as ITeacherData,
} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Form, Main, SubmitButton, NotFound } from './styles';

interface HTMLFormFieldElement extends HTMLElement {
  name: string;
  value: string;
}

interface ITeacher extends ITeacherData {
  id: number;
}

interface IFilterInfo {
  subject: string;
  week_day: string;
  time: string;
}

const initialFilterInfoData = {
  subject: '',
  week_day: '',
  time: '',
};

const TeacherList: React.FC = () => {
  const [filterInfo, setFilterInfo] = useState<IFilterInfo>({
    ...initialFilterInfoData,
  });
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [requested, setRequested] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLFormFieldElement>): void => {
    const { target } = e;

    setFilterInfo({ ...filterInfo, [target.name]: target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const { subject, week_day, time } = filterInfo;

    try {
      const { data } = await api.get('classes', {
        params: { subject, week_day, time },
      });

      setTeachers(data);
    } catch (err) {
      throw new Error(err);
    } finally {
      setRequested(true);
    }
  };

  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form onSubmit={handleSubmit}>
          <Select
            required
            label="Matéria"
            name="subject"
            value={filterInfo.subject}
            onChange={handleChange}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'História', label: 'História' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Educação física', label: 'Educação física' },
            ]}
          />

          <Select
            required
            label="Dia da semana"
            name="week_day"
            value={filterInfo.week_day}
            onChange={handleChange}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            label="Hora"
            name="time"
            value={filterInfo.time}
            onChange={handleChange}
          />

          <SubmitButton type="submit">
            <span>Pesquisar</span>
            <GoSearch size={20} />
          </SubmitButton>
        </Form>
      </PageHeader>

      <Main>
        {teachers.map(teacher => (
          <TeacherItem
            key={teacher.id}
            avatar={teacher.avatar}
            bio={teacher.bio}
            cost={teacher.cost}
            name={teacher.name}
            subject={teacher.subject}
            whatsapp={teacher.whatsapp}
            user_id={teacher.user_id}
          />
        ))}

        {requested && teachers.length === 0 && (
          <NotFound>Nenhum proffy encontrado :(</NotFound>
        )}
      </Main>
    </Container>
  );
};

export default TeacherList;
