import React, { useMemo } from 'react';

import { Container } from './styles';

import format from '../../utils/format';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface ITeacher {
  avatar: string;
  name: string;
  subject: string;
  whatsapp: string;
  cost: number;
  bio: string;
}

const TeacherItem: React.FC<ITeacher> = ({
  avatar,
  bio,
  cost,
  name,
  subject,
  whatsapp,
}) => {
  const costFormatted = useMemo(() => format.toBRLCurrency(cost), [cost]);

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
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
