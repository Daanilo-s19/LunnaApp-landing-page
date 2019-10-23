import styled from "styled-components";
import borderContainer from "../../assets/borderContainer.png";

import { device } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background: transparent url(${borderContainer}) top no-repeat padding-box;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;
export const Price = styled.div`
  width: 25%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
  margin: 20px;

  p:nth-child(2n) {
    background: #e9e9e9;
  }
  @media ${device.mobileL} {
    width: 80%;
  }
`;
export const Title = styled.h3`
  height: 73px;
  background: ${props => (props.color ? props.color : "black")};
  text-align: center;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 47px/63px Segoe UI;
  letter-spacing: 0;
  color: #ffffff;
`;

export const Item = styled.p`
  text-align: center;
  height: 68px;
  font: Semibold 21px/28px Segoe UI;
  font-weight: bold;
  letter-spacing: 0;
  color: #707070;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Char = styled.h1`
  width: 72px;
  height: 173px;
  text-align: left;
  font: Bold 130px/173px Segoe UI;
  color: #199ce8;
`;
