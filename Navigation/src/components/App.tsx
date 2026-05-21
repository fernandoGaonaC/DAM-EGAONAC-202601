import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthStackParamList } from "../Routes";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage, RegisterPage ,DashboardPage,RegistrarProductoPage} from "../screens";
import RegistarProductoPage from "../screens/RegistrarProductoPage/RegistrarProductoPage";


const Stack=createNativeStackNavigator<AuthStackParamList>();
function App() {
  return (
  <SafeAreaProvider>
    <NavigationContainer>
        <Stack.Navigator
         initialRouteName="Login"
         screenOptions={{
          headerShown:false,
          contentStyle:{
            backgroundColor:"#fff"
          }
         }}>
          <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
          <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
          <Stack.Screen name="Producto" component={RegistarProductoPage}></Stack.Screen>
          <Stack.Screen name="Dashboard" component={DashboardPage}></Stack.Screen>
        
        </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  )
}

export default App;
