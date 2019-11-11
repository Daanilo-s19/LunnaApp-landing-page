import React from "react";
import { Container, Copyright } from "./styles.js";
import { Icon } from "../SectionDesc/styles.js";

export default function Footer(props) {
  const { copyright, logo } = props;
  return (
    <Container>
      <Copyright>{copyright}</Copyright>
      <Icon src={logo} />
    </Container>
  );
}
