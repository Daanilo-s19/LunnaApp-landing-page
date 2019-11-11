import styled from "styled-components";
import borderContainer from "../../assets/borderContainer.png";
import { device } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent url(${borderContainer}) bottom no-repeat padding-box;
`;
export const Title = styled.b`
  text-align: center;
  font: 33px/45px Segoe UI;
  letter-spacing: 0;
  color: #707070;
  margin-bottom: 40px;
`;
export const Content = styled.div`
  display: flex;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ContentItem = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.mobileL} {
    width: 80%;
    display: flex;
  }
`;
export const Image = styled.img`
  width: 40%;
  height: 100%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const Item = styled.div`
  width: 40%;
  height: 45%;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
  margin: 11px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    width: 100%;
  }
  h3 {
    text-align: center;
    font: 26px Segoe UI;
    color: #707070;
    margin: 15px;
  }
  span {
    text-align: center;
    font: 21px/28px Segoe UI;
    color: #707070;
  }
`;
export const Underline = styled.span`
  border-bottom: 2px solid #199ce8;
  text-transform: none;
`;
export const Icon = styled.img``;
