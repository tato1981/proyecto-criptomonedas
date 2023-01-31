import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #6f74f3;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #5f62f4;
    cursor: pointer;
  }
`;

export const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false); //tiene en cuemta el resultado del la sentencia if
                                             // de la funcion handleSubmit

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas("Elige tu Criptomoneda", criptos );

  useEffect(() => {
    // llamar a la api

    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCriptos(arrayCriptos);
    };

    consultarAPI();
  }, []); //[] ya que solo se ejecute una vez cuando el documento este listo


       // funcion submit del formulario
   const handleSubmit = (e) => {
    e.preventDefault()

   if([moneda, criptomoneda].includes('')){
      setError(true)

      return
   }
    setError(false);
    setMonedas({
      moneda,
      criptomoneda
    })
    
   }


  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        onSubmit = {handleSubmit}  //funcion submit del formulario 
      >
        <SelectMonedas />
        <SelectCriptomoneda />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};
