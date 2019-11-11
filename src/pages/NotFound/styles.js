import styled from "styled-components";
import { Link } from "react-router-dom";
export const Error = styled.div`
  padding-top: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  h1 {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
  }
`;
export const Return = styled(Link)`
  width: 100px;
  height: 46px;
  margin: 30px;
  background: #1998c1;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  &:hover {
    opacity: 0.6;
    color: #ffff;
  }
`;
