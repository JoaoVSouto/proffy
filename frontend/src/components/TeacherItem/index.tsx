import React, { useMemo } from 'react';

import api from '../../services/api';

import format from '../../utils/format';

import { Container } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface ITeacher {
  avatar: string;
  name: string;
  subject: string;
  whatsapp: string;
  cost: number;
  bio: string;
  user_id: string;
}

const TeacherItem: React.FC<ITeacher> = ({
  avatar,
  bio,
  cost,
  name,
  subject,
  whatsapp,
  user_id,
}) => {
  const costFormatted = useMemo(() => format.toBRLCurrency(cost), [cost]);

  const createNewConnection = async (): Promise<void> => {
    try {
      await api.post('connections', {
        user_id,
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Container>
      <header>
        <img src={avatar} alt={name} />

        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{costFormatted}</strong>
        </p>
        <a
          href={`https://wa.me/55${whatsapp}?text=Olá ${name}, tudo bem? Gostaria de falar com você sobre suas aulas de ${subject} :D`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default TeacherItem;
