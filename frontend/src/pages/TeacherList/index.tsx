import React from 'react';

import PageHeader from '../../components/PageHeader';

import {
  Container,
  Form,
  InputBlock,
  Label,
  Input,
  Main,
  TeacherItem,
} from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

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

      <Main>
        <TeacherItem>
          <header>
            <img
              src="https://api.adorable.io/avatars/face/eyes5/nose7/mouth7/6633cc"
              alt="User 1"
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
            pessoas através de experiências. Mais de 200.000 pessoas já passaram
            por uma das minhas explosões.
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
        </TeacherItem>
      </Main>
    </Container>
  );
};

export default TeacherList;
