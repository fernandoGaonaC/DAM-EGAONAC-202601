import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LoginForm, Tarjeta } from "../../components/organisms";
import AuthTemplates from "../../components/templates/AuthTemplate/AuthTemplates";
import { AuthStackParamList } from "../../Routes";
import { AuthService } from "../../core/services";
const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handlerLogin = async(username:string,password:string) => {
    try{
    const user = await AuthService.login(username, password);
      console.log("Usuario autenticado:", user);
      navigation.navigate("Dashboard");
    }catch(error){
      console.log("no existe el usuario")
      handlerRegister();
    }

  };
  const handlerRegister = () => {
    navigation.navigate("Register");

  };

  return (
    <AuthTemplates titulo="Login">
      <LoginForm onIngresar={handlerLogin} onRegistrar={handlerRegister} />
    </AuthTemplates>
  );
};

export default LoginPage;