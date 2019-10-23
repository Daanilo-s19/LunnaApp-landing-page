import styled from "styled-components";
import { device } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 94px;
  background: #199ce8;
  box-shadow: 0px -3px 6px #00000029;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Copyright = styled.h2`
  width: 40%;
  text-align: left;
  font: Regular 15px/20px Segoe UI;
  letter-spacing: 0;
  color: #ffffff;

  @media ${device.mobileL} {
    font-size: 10px;
  }
`;
