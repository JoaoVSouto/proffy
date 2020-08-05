import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { Container, Main, Fieldset, Footer } from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
        contentMarginBottom
      />

      <Main>
        <Fieldset>
          <legend>Seus dados</legend>

          <Input type="text" label="Nome completo" name="name" />

          <Input type="text" label="Avatar" name="avatar" />

          <Input type="text" label="Whatsapp" name="whatsapp" />

          <Textarea label="Biografia" name="bio" />
        </Fieldset>

        <Fieldset>
          <legend>Sobre a aula</legend>

          <Input type="text" label="Matéria" name="subject" />

          <Input type="text" label="Custo da sua hora por aula" name="cost" />
        </Fieldset>

        <Footer>
          <p>
            <img src={warningIcon} alt="Aviso" />
            Importante!
            <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </Footer>
      </Main>
    </Container>
  );
};

export default TeacherForm;
