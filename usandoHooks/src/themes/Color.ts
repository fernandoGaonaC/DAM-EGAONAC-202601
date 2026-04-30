import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
    botones:{
        backgroundColor:"blue",
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        borderRadius:10,
        margin:5,
    },
    texto_botones:{
         color:'white',
         fontSize: 30,
        
        },
    display:{
          backgroundColor: 'orange',
        flex: 2,
        width: '100%',
        justifyContent: 'center',      
        alignItems: 'flex-end',        
        padding: 10,
            
    },
    teclado:{
        flex:5,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'white',
        justifyContent:'center',

    },
    pantalla:{
        flex:1,
        backgroundColor:'green',
        flexDirection:'column',
        
    },
    texto_pantalla:{
        fontSize:50
    }

});