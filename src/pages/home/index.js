import React from "react";
import HeroSection from "./../../components/HeroSection";
import ClientsSection from "./../../components/ClientsSection";
import SectionDesc from "../../components/SectionDesc";
import PriceSection from "../../components/PriceSection";
import SectionForm from "../../components/SectionForm";
import "./styles.scss";

import calendar from "../../assets/calendario.svg";
import mais from "../../assets/mais.svg";
import message from "../../assets/message.svg";
import agenda from "../../assets/agenda.svg";
import lunna from "../../assets/Lunna.png";
import subscription from "../../assets/subscription.png";
import section1 from "../../assets/section1-2x.png";

function HomePage(props) {
  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Ser Freela nunca foi tão fácil!"
        subtitle="Feramenta 100% voltada para freelancers, com gestão de equipes e comunicação integrada com o cliente."
        buttonText="Saiba mais"
        image={section1}
        href="#price"
      />
      <SectionDesc
        icon={lunna}
        item={[
          {
            icon: calendar,
            title: "Gestão Eficiente",
            subTitle: "Tarefas com integração aos projetos e com alertas."
          },
          {
            icon: mais,
            title: "Plataforma Interativa",
            subTitle: "Você recebe recompensas por cada meta atingida."
          },
          {
            icon: message,
            title: "Comunicação Integrada",
            subTitle: "Comunicação com o cliente de forma fácil e integrada."
          },
          {
            icon: agenda,
            title: "Criação de Propostas",
            subTitle: "Propostas personalizadas com status de aprovação."
          }
        ]}
      />
      <ClientsSection id="price">
        Experimente a maneira mais simples de gerenciar negócios!
      </ClientsSection>
      <PriceSection
        price={[
          {
            title: "Free",
            color: "#4ED584",
            items: [
              "Até 3 pessoas por equipe",
              "Até 3 projetos cadastrados",
              "Cadastro de apenas 1 cliente",
              "Propostas simples",
              "Sem envio de contratos"
            ],
            versus: "x"
          },
          {
            title: "Premiun",
            color: "#E6C851",
            items: [
              "Mais de 3 pessoas por equipe",
              "Projetos ilimitados",
              "Cadastro ilimitado de clientes",
              "Propostas personalizadas",
              "Envio de contratos"
            ]
          }
        ]}
      />

      <SectionForm id="form" icon={subscription} />
    </>
  );
}

export default HomePage;
