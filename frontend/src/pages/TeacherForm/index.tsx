import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import { Container, Main, Fieldset, ScheduleItem, Footer } from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';

interface HTMLFormFieldElement extends HTMLElement {
  name: string;
  value: string;
}

interface ITeacherInfo {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface IClassInfo {
  subject: string;
  cost: string;
}

interface IScheduleItem {
  week_day: string;
  from: string;
  to: string;
}

interface IWeekDayOption {
  value: string;
  label: string;
  disabled?: boolean;
}

const initialTeacherInfo = {
  name: '',
  avatar: '',
  whatsapp: '',
  bio: '',
};

const initialClassInfo = {
  subject: '',
  cost: '',
};

const initialScheduleItem = {
  week_day: '',
  from: '',
  to: '',
};

const initialWeekDayOptions = [
  { value: '0', label: 'Domingo' },
  { value: '1', label: 'Segunda-feira' },
  { value: '2', label: 'Terça-feira' },
  { value: '3', label: 'Quarta-feira' },
  { value: '4', label: 'Quinta-feira' },
  { value: '5', label: 'Sexta-feira' },
  { value: '6', label: 'Sábado' },
];

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [teacherInfo, setTeacherInfo] = useState<ITeacherInfo>({
    ...initialTeacherInfo,
  });
  const [classInfo, setClassInfo] = useState<IClassInfo>({
    ...initialClassInfo,
  });

  const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([
    { ...initialScheduleItem },
  ]);

  const addNewScheduleItem = (): void => {
    const existsEmptySchedule = scheduleItems.find(
      scheduleItem => !scheduleItem.week_day
    );

    if (existsEmptySchedule) {
      return;
    }

    setScheduleItems([...scheduleItems, { ...initialScheduleItem }]);
  };

  const handleFilterOptions = (option: IWeekDayOption): IWeekDayOption => {
    const weekDaysSelected = scheduleItems.map(
      scheduleItem => scheduleItem.week_day
    );

    if (weekDaysSelected.includes(option.value)) {
      return { ...option, disabled: true };
    }

    return option;
  };

  const handleChange = (
    setValues: React.Dispatch<React.SetStateAction<any>>
  ) => (e: React.ChangeEvent<HTMLFormFieldElement>): void => {
    const { target } = e;
    setValues((values: any) => ({
      ...values,
      [target.name]: target.value,
    }));
  };

  const setScheduleItemValue = (
    position: number,
    fieldName: string,
    value: string
  ): void => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [fieldName]: value };
      }

      return { ...scheduleItem };
    });

    setScheduleItems(updatedScheduleItems);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { name, avatar, whatsapp, bio } = teacherInfo;
    const { subject, cost } = classInfo;

    try {
      await api.post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      });

      setTeacherInfo({ ...initialTeacherInfo });
      setClassInfo({ ...initialClassInfo });
      setScheduleItems([{ ...initialScheduleItem }]);

      history.push('/');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
        contentMarginBottom
      />

      <Main>
        <form onSubmit={handleSubmit}>
          <Fieldset>
            <legend>Seus dados</legend>

            <Input
              type="text"
              label="Nome completo"
              name="name"
              value={teacherInfo.name}
              onChange={handleChange(setTeacherInfo)}
            />

            <Input
              type="url"
              label="Avatar"
              name="avatar"
              value={teacherInfo.avatar}
              onChange={handleChange(setTeacherInfo)}
            />

            <Input
              type="text"
              label="Whatsapp"
              maxLength={11}
              name="whatsapp"
              value={teacherInfo.whatsapp}
              onChange={handleChange(setTeacherInfo)}
            />

            <Textarea
              label="Biografia"
              name="bio"
              value={teacherInfo.bio}
              onChange={handleChange(setTeacherInfo)}
            />
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

            <Select
              required
              placeholder="Selecione qual você quer ensinar"
              label="Matéria"
              name="subject"
              value={classInfo.subject}
              onChange={handleChange(setClassInfo)}
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

            <Input
              type="text"
              label="Custo da sua hora por aula"
              name="cost"
              value={classInfo.cost}
              onChange={handleChange(setClassInfo)}
            />
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  required
                  placeholder="Selecione o dia"
                  label="Dia da semana"
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={e =>
                    setScheduleItemValue(index, e.target.name, e.target.value)
                  }
                  options={initialWeekDayOptions.map(handleFilterOptions)}
                />
                <Input
                  type="time"
                  label="Das"
                  name="from"
                  value={scheduleItem.from}
                  onChange={e =>
                    setScheduleItemValue(index, e.target.name, e.target.value)
                  }
                />
                <Input
                  type="time"
                  label="Até"
                  name="to"
                  value={scheduleItem.to}
                  onChange={e =>
                    setScheduleItemValue(index, e.target.name, e.target.value)
                  }
                />
              </ScheduleItem>
            ))}
          </Fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
