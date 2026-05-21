import React from "react";
import { Pressable, Text } from "react-native";
import styleButon from "./ButtonStyle";
interface Prop{
    titulo:string,
    disabled?:boolean,
    onPress:()=>void,

}
const Button=({titulo,onPress,disabled}:Prop)=>{
return (
    <Pressable
    disabled={disabled}  
    style={styleButon.boton1}
    onPress={onPress}>
        <Text
        style={styleButon.texto1}
        >{titulo}</Text>
    </Pressable>

)
}
export default Button;