import React, { useState } from "react";
import * as Yup from "yup";
import api from "../../services/api";
import { Container, Title, Content, Image } from "./styles";
import { Input, Form } from "@rocketseat/unform";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import lunna from "../../assets/Lunna.png";

toast.configure();

export default function SectionForm(props) {
  const { icon, id, token } = props;

  const Schema = Yup.object().shape({
    first_name: Yup.string().required(() => {
      toast.warn("Preencha o Campo Nome");
    }),
    last_name: Yup.string().required(() => {
      toast.warn("Preencha o Campo Sobrenome");
    }),
    email: Yup.string()
      .email(() => {
        toast.error("Insira um E-mail válido.");
      })
      .required(() => {
        toast.warn("Preencha o campo Email ");
      }),
    role: Yup.string().required(() => {
      toast.warn("Preencha o campo profissão.");
    }),
    invite: Yup.string()
      .email(() => {
        toast.error("Insira um e-mail válido.");
      })
      .required(() => {
        toast.warn("Preencha o campo e-mail.");
      }),
    invite_from: Yup.string().notRequired()
  });
  const initialdata = {
    invite_from: null
  };
  const handleSubmit = value => {
    api
      .post("/subscribe", value)
      .then(function(response) {
        Swal.fire({
          position: "center-top",
          type: "success",
          title: "Entre no seu email e ative para ter acesso ao",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(function(error) {
        Swal.fire({
          type: "warning",
          title: "Ocorreu um erro!",
          footer: " tente novamente mais tarde !",
          showConfirmButton: false,
          timer: 3000
        });
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
        <Form schema={Schema} onSubmit={handleSubmit} initialData={initialdata}>
          <h2>Se inscreva e indique um amigo!</h2>
          <div>
            <Input type="text" name="first_name" placeholder="Nome" />
            <Input type="text" name="last_name" placeholder="Sobrenome" />
          </div>
          <Input type="email" name="email" placeholder="E-mail de trabalho" />
          <Input type="text" name="role" placeholder="Profissão" />
          <Input
            type="email"
            name="invite"
            placeholder="Indique o e-mail de um amigo"
          />
          <Input type="hidden" name="invite_from" value={token} />
          <button type="submit">
            Quero ter uma gestão eficiente de projetos!
          </button>
        </Form>
      </Content>
    </Container>
  );
}
