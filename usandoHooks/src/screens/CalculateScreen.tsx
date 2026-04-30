import {View} from 'react-native'
import Boton from '../components/atoms/Boton'
import Contador from '../components/atoms/Contador'
import { estilos } from '../themes/Color'
import Teclado from '../components/Molecules/Teclado'
import { useEffect, useState } from 'react'
export default function CalculateScreen(){
const [valor,SetValor]=useState<number>(0)

    return (
        <>
       <View style={estilos.pantalla}>
        <Contador mensaje={valor}></Contador>
        <Teclado operacion1={SetValor} dato={valor} ></Teclado>
        </View>    
        </>
    )
}