import React from "react";
import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: red;
  color: #fff;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
