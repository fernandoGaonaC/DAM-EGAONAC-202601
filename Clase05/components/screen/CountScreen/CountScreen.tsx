import { Pressable } from "react-native";
import {View, Text} from 'react-native'
import { stylesCountScreen } from "./CountScreen.style";
type countScreenProps={
    label:string;
    OnPress:(value:number)=>void;
}

export const CountScreen : React.FC<countScreenProps>=(
    {label,OnPress}
)=>{
    return(
        <Pressable style={{backgroundColor:"red",margin:30, }} onPress={OnPress}>
            <Text style={{fontSize:30}}>
                {label}
            </Text>
        </Pressable>
    )
}







