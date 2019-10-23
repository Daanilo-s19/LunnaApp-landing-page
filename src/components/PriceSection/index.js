import React from "react";
import { Container, Price, Title, Item, Char } from "./styles";

const PriceSection = props => {
  const { price, id } = props;
  return (
    <Container price={price}>
      {price.map(value => (
        <>
          <Price id={id}>
            <Title color={value.color}>{value.title}</Title>
            {value.items.map(itens => (
              <Item key={itens}>{itens}</Item>
            ))}
          </Price>
          {value.versus && <Char>{value.versus}</Char>}
        </>
      ))}
    </Container>
  );
};
export default PriceSection;
