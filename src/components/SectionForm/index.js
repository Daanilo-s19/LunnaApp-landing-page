import React, { useState } from "react";
import * as Yup from "yup";
import api from "../../services/api";
import { Container, Title, Content, Image } from "./styles";
import { Input, Form } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import lunna from "../../assets/Lunna.png";

toast.configure();

export default function SectionForm(props) {
  const [success, setSuccess] = useState([false]);
  const { icon, id } = props;

  const Schema = Yup.object().shape({
    nome: Yup.string().required(() => {
      toast.warn("Preencha o Campo Nome");
    }),
    sobrenome: Yup.string().required(() => {
      toast.warn("Preencha o Campo Sobrenome");
    }),
    email: Yup.string()
      .email(() => {
        toast.error("Insira um E-mail válido.");
      })
      .required(() => {
        toast.warn("Preencha o campo Email ");
      }),
    profissao: Yup.string().required(() => {
      toast.warn("Preencha o campo profissão.");
    }),
    amigo: Yup.string()
      .email(() => {
        toast.error("Insira um e-mail válido.");
      })
      .required(() => {
        toast.warn("Preencha o campo e-mail.");
      })
  });

  const handleSubmit = value => {
    api
      .post("/meta", {
        first_name: value.nome,
        last_name: value.sobrenome,
        email: value.email,
        ocupation: value.profissao,
        friends: value.amigo
      })
      .then(function(response) {
        toast.success("Sucesso!");
        setSuccess(false);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <Container id={id}>
      <Title>
        Assim que a versão beta da <img src={lunna} /> sair você será um dos
        primeiros a testar e poderá ganhar 3 meses de Premium!
      </Title>
      <Content>
        <Image src={icon} />
        {success ? (
          <Form schema={Schema} onSubmit={handleSubmit}>
            <h2>Se inscreva e indique um amigo!</h2>
            <div>
              <Input type="text" name="nome" placeholder="Nome" />
              <Input type="text" name="sobrenome" placeholder="Sobrenome" />
            </div>
            <Input type="email" name="email" placeholder="E-mail de trabalho" />
            <Input type="text" name="profissao" placeholder="Profissão" />
            <Input
              type="email"
              name="amigo"
              placeholder="Indique o e-mail de um amigo"
            />
            <button type="submit">
              Quero ter uma gestão eficiente de projetos!
            </button>
          </Form>
        ) : (
          <Title>
            Seja Bem-vindo ao <img src={lunna} /> Beta!
          </Title>
        )}
      </Content>
    </Container>
  );
}
