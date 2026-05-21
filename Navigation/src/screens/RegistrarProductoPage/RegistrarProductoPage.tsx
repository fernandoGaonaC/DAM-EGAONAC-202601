import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductoForm } from "../../components/organisms";
import AuthTemplates from "../../components/templates/AuthTemplate/AuthTemplates";
import { AuthStackParamList } from "../../Routes";
import { useNavigation } from "@react-navigation/native";
import { ProductoService } from "../../core/services";
import { Product } from "../../core/entities/Producto.entity";
function RegistarProductoPage(){
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    
  const handlerCreate = (Producto:Product) => {
    ProductoService.register(Producto)
    navigation.navigate("Dashboard");
  };
  
  const handlerBack = () => {
    navigation.navigate("Dashboard");
  };
    return(
        <AuthTemplates titulo="Producto">
            <ProductoForm onBack={handlerBack} onCreate={handlerCreate}></ProductoForm>
        </AuthTemplates>
    );
}
export default RegistarProductoPage;