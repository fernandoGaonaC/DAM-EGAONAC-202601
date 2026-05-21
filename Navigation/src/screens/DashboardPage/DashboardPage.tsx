import { View, FlatList } from "react-native";
import { DashboardTemplate } from "../../components/templates";
import { AuthStackParamList } from "../../Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Product } from "../../core/entities/Producto.entity";
import Tarjeta from "../../components/organisms/Tarjeta/Tarjeta";
import { ProductoService } from "../../core/services";

function DashboardPage() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    const loadProductos = async () => {
      const data = await ProductoService.list();
      setProductos(data);
    };
    loadProductos();
  }, []);

  const handlerProducto = () => {
    navigation.navigate("Producto");
  };

  const renderTarjeta = ({ item }: { item: Product }) => (
    <Tarjeta
      nombre={item.nombre}
      codigo={item.codigo}
      stock={item.cantidad}
      ganancia={`$${item.precioVenta - item.costo}`}
    />
  );

  return (
    <View>
      <DashboardTemplate
        nombre="Bienvenido user"
        subtitulo="PRODUCTOS RECIENTES"
        onPress={handlerProducto}
        lista={
          <FlatList
            data={productos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderTarjeta}
          />
        }
      />
    </View>
  );
}

export default DashboardPage;
