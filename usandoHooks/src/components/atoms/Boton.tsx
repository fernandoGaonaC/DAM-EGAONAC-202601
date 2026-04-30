import { Pressable, Text } from 'react-native';
import { estilos } from '../../themes/Color';

interface Prop {
  texto: string;
  func?: ((numero: number) => void) | (() => void);
}

function Boton({ texto, func }: Prop) {
  return (
    <Pressable
      style={estilos.botones}
      onPress={() => {
        if (!func) return;
       
        if (func.length === 0) {
          (func as () => void)();
        } else {
          (func as (numero: number) => void)(Number(texto));
        }
      }}
    >
      <Text style={estilos.texto_botones}>{texto}</Text>
    </Pressable>
  );
}

export default Boton;
