import React from "react";
import noteLuna from "../../assets/noteLunna.png";
import {
  Container,
  Title,
  Content,
  ContentItem,
  Image,
  Item,
  Icon,
  Underline
} from "./styles.js";

const SectionDesc = props => {
  const { item, icon } = props;
  return (
    <Container>
      <Title>
        <b>
          {" "}
          A <Icon src={icon} /> <Underline>é uma ferramenta</Underline> completa
        </b>
      </Title>
      <Content>
        <Image src={noteLuna} />
        <ContentItem item={item}>
          {item.map((value, index) => (
            <Item key={index}>
              <Icon src={value.icon} />
              <h3>{value.title}</h3>
              <span>{value.subTitle}</span>
            </Item>
          ))}
        </ContentItem>
      </Content>
    </Container>
  );
};
export default SectionDesc;
