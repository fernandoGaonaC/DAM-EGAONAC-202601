import { View } from "react-native";
import { Text } from "react-native-gesture-handler";
import estilosTarjeta from "./Tarjeta.style";
import { Button } from "../../atoms";
interface prop{
    nombre:string,
    codigo:string,
    stock:number,
    ganancia:string,

}
function Tarjeta({nombre,codigo,stock,ganancia}:prop){
    return (
        <View style={estilosTarjeta.carta}>
            <Text>{nombre}</Text>
            <Text>{codigo}</Text>
            <Text>{stock}</Text>
            <Text>{ganancia}</Text>
            <Button 
             style={estilosTarjeta.boton}
             titulo="VENDER" onPress={()=>{}} ></Button>


        </View>
    );
}
export default Tarjeta;