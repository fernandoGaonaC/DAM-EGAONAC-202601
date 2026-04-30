import { Text, View } from "react-native";
import { estilos } from "../../themes/Color";
interface Prop{
    mensaje:number,
}
export default function Contador({mensaje}:Prop){
return (
    <>
    <View style={estilos.display}> 
        <Text style={estilos.texto_pantalla}>{mensaje}</Text>
    </View>
    </>
)
}