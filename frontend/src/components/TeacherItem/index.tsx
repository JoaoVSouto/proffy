import React from 'react';

import { Container } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://api.adorable.io/avatars/face/eyes5/nose7/mouth9/8257e5"
          alt="User"
        />

        <div>
          <strong>John Doe</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
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
