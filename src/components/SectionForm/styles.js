import styled from "styled-components";

import { Form } from "formik";
import { device, size } from "../../styles";

export const Container = styled.div`
  width: 90%;
  margin: -80px auto 20px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.h2`
  width: 70%;
  margin-top: 80px;
  text-align: center;
  font: 26px/35px Segoe UI;
  letter-spacing: 0;
  color: #707070;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  margin: 30px 0 20px;

  @media (max-width: ${size.mobileL}) {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 90%;
      display: flex;
      input:last-child {
        margin-right: 0;
      }
      @media ${device.mobileS} {
        width: 90%;
      }
    }
    h2 {
      text-align: center;
      font: 35px Segoe UI;
      font-weight: bold;
      margin: 30px;
      letter-spacing: 0;
      color: #707070;
    }
    input {
      width: 90%;
      height: 50px;
      background: #ffffff;
      border: 1px solid #b1b0b0;
      border-radius: 10px;
      margin: 4px;
      padding: 14px;

      @media ${device.mobileS} {
        width: 90%;
      }
    }

    button {
      width: 90%;
      height: 42px;
      background: #199ce8;
      border-radius: 10px;
      font: 15px/20px Segoe UI;
      font-weight: bold;
      box-sizing: border-box;
      border: 0;
      color: #ffffff;

      @media ${device.mobileS} {
        width: 90%;
      }
    }
    button:hover {
      cursor: pointer;
      background: #1aaced;
    }
  }
`;
// export const FormSubscription = styled(Form)``;

export const Image = styled.img`
  width: 40%;
  height: auto;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
