import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 390px) {
    display: block;
  }
`;

const Precio = styled.p`
  font-size: 25px;
  color: #fff;
  font-family: "Lato", sans-serif;
  span {
    font-weight: 900;
  }
`;
const Parrafo = styled.p`
  color: #fff;
  font-size: 15px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

const Span = styled.span`
  color: #9497ff;
  font-family: "Lato", sans-serif;
  font-weight: 900;
`;

const Imagen = styled.img`
  display: block;
  width: 130px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Precio>
          El precio es: <Span>{PRICE}</Span>
        </Precio>
        <Parrafo>
          Precio mas bajo del dia es: <Span>{LOWDAY}</Span>
        </Parrafo>
        <Parrafo>
          Precio mas alto del dia es: <Span>{HIGHDAY}</Span>
        </Parrafo>
        <Parrafo>
          Variacion ultimas 24 horas: <Span>{CHANGEPCT24HOUR}</Span>
        </Parrafo>
        <Parrafo>
          Ultima actualización: <Span>{LASTUPDATE}</Span>
        </Parrafo>
      </div>
    </Contenedor>
  );
};

export default Resultado;
