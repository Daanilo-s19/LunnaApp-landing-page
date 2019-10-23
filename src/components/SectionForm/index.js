import React, { useState } from "react";
import * as Yup from "yup";
import { Container, Title, Content, Image } from "./styles";
import { Input, Form } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import lunna from "../../assets/Lunna.png";

toast.configure();

const Schema = Yup.object().shape({
  nome: Yup.string().required(() => {
    toast.warn("Preencha o Campo nome");
  }),
  sobrenome: Yup.string().required(() => {
    toast.warn("Preencha o Campo nome");
  }),
  email: Yup.string()
    .email(() => {
      toast.error("Insira um e-mail válido.");
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

export default function SectionForm(props) {
  const [success, setSuccess] = useState([false]);
  const { icon, id } = props;

  const handleSubmit = () => {
    toast.success("Sucessão");
    setSuccess(false);
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
