import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import styleAuth from "./AuthTemplateStyle";
interface Props{
    titulo:string,
    subtitle?:string,
    children:React.ReactNode;
}
function AuthTemplates({titulo,subtitle,children}:Props){

    return (
        <View  >
            <Text style={styleAuth.titulo}
            >{titulo}</Text>
            {subtitle && <Text>{subtitle}</Text>}
            <View>
                {children}
            </View>
        </View>

    );
}
export default AuthTemplates;