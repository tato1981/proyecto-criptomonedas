import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: Flex;
  align-items: center;
`;
const Imagen = styled.img`
  display: block;
  width:110px;
  gap: 1rem;
  margin-top:18px;
  padding-right: 10px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          El precio es de: <span> {PRICE} </span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span> {HIGHDAY} </span>
        </Texto>
        <Texto>
          El precio mas bajo del dia: <span> {LOWDAY} </span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span> {CHANGEPCT24HOUR} </span>
        </Texto>
        <Texto>
          Ultima actualizacion: <span> {LASTUPDATE} </span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
