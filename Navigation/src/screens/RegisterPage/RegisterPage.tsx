import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RegisterForm from "../../components/organisms/RegisterForm/RegisterForm";
import AuthTemplates from "../../components/templates/AuthTemplate/AuthTemplates";
import { AuthStackParamList } from "../../Routes";
import { useNavigation } from "@react-navigation/native";
import { AuthService } from "../../core/services";
import { User } from "../../core/entities";

const RegisterPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  
  const handlerRegister = async (user:User) => {
await AuthService.register(user)
    navigation.navigate("Login");
  };

  return (
    <AuthTemplates titulo="Register">
      <RegisterForm onSubmit={handlerRegister} disableAction={false} />
    </AuthTemplates>
  );
};

export default RegisterPage;