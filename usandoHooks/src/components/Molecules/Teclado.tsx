import { useState } from "react";
import { estilos } from "../../themes/Color";
import Boton from "../atoms/Boton";
import { View } from "react-native";

type Operacion = "+" | "-" | "X" | "/" | null;

interface Prop {
  operacion1: (numero: number) => void;
  dato: number;
}

export default function Teclado({ operacion1, dato }: Prop) {
  const [acumulado, setAcumulado] = useState<number>(0);
  const [operacionPendiente, setOperacionPendiente] = useState<Operacion>(null);
  const [esperandoNuevoNumero, setEsperandoNuevoNumero] = useState<boolean>(false);

  const presionarDigito = (digito: number) => {
    if (esperandoNuevoNumero) {
      
      operacion1(digito);
      setEsperandoNuevoNumero(false);
    } else {
     
      operacion1(dato * 10 + digito);
    }
  };

  
  const seleccionarOperacion = (op: Operacion) => {
    setAcumulado(dato);
    setOperacionPendiente(op);
    setEsperandoNuevoNumero(true);
  };

  const suma           = () => seleccionarOperacion("+");
  const resta          = () => seleccionarOperacion("-");
  const multiplicacion = () => seleccionarOperacion("X");
  const division       = () => seleccionarOperacion("/");

  const igual = () => {
    if (operacionPendiente === null) return;

    let resultado: number;
    switch (operacionPendiente) {
      case "+": resultado = acumulado + dato; break;
      case "-": resultado = acumulado - dato; break;
      case "X": resultado = acumulado * dato; break;
      case "/": resultado = dato !== 0 ? acumulado / dato : 0; break;
      default:  resultado = dato;
    }

    operacion1(resultado);
    setAcumulado(0);
    setOperacionPendiente(null);
    setEsperandoNuevoNumero(true);
  };

  const resetar = () => {
    operacion1(0);
    setAcumulado(0);
    setOperacionPendiente(null);
    setEsperandoNuevoNumero(false);
  };

  return (
    <>
      <View style={estilos.teclado}>
        <Boton texto={"1"} func={() => presionarDigito(1)} />
        <Boton texto={"2"} func={() => presionarDigito(2)} />
        <Boton texto={"3"} func={() => presionarDigito(3)} />
        <Boton texto={"4"} func={() => presionarDigito(4)} />
        <Boton texto={"5"} func={() => presionarDigito(5)} />
        <Boton texto={"6"} func={() => presionarDigito(6)} />
        <Boton texto={"7"} func={() => presionarDigito(7)} />
        <Boton texto={"8"} func={() => presionarDigito(8)} />
        <Boton texto={"9"} func={() => presionarDigito(9)} />
        <Boton texto={"0"} func={() => presionarDigito(0)} />

        <Boton texto={"+"} func={suma} />
        <Boton texto={"-"} func={resta} />
        <Boton texto={"X"} func={multiplicacion} />
        <Boton texto={"/"} func={division} />
        <Boton texto={"="} func={igual} />
        <Boton texto={"C"} func={resetar} />
      </View>
    </>
  );
}