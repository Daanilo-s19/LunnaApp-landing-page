import React from "react";
import Section from "./../Section";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <Section id={props.id} className="ClientSection" size={props.size}>
      <h3>{props.children}</h3>
    </Section>
  );
}

export default ClientsSection;
