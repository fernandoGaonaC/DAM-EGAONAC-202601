import { View } from "react-native";
import { InputsGroup } from "../../molecules";
import { Button } from "../../atoms";
import { useState } from "react";
import { Product } from "../../../core/entities/Producto.entity";

interface Prop {
  onCreate: (product: Product) => void;
  onBack: () => void;
}

function ProductoForm({ onCreate, onBack }: Prop) {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [costo, setCosto] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <View>
      <InputsGroup
        fields={[
          {
            label: "NOMBRE PRODUCTO",
            placeholder: "Ej: Camiseta",
            value: nombre,
            onChangeText: setNombre,
          },
          {
            label: "SKU / CODIGO",
            placeholder: "Ej: SKU123",
            value: codigo,
            onChangeText: setCodigo,
          },
          {
            label: "CANTIDAD EN STOCK",
            placeholder: "Ej: 10",
            value: cantidad,
            onChangeText: setCantidad,
          },
          {
            label: "COSTO COMPRA",
            placeholder: "Ej: 50000",
            value: costo,
            onChangeText: setCosto,
          },
          {
            label: "PRECIO VENTA",
            placeholder: "Ej: 70000",
            value: precioVenta,
            onChangeText: setPrecioVenta,
          },
          {
            label: "DESCRIPCION",
            placeholder: "Detalles del producto",
            value: descripcion,
            onChangeText: setDescripcion,
          },
        ]}
      />

      <Button
        titulo="CREAR PRODUCTO"
        onPress={() =>
          onCreate({
            nombre,
            codigo,
            cantidad: Number(cantidad),
            costo: Number(costo),
            precioVenta: Number(precioVenta),
            descripcion,
          })
        }
      />
      <Button titulo="BACK TO CATALOG" onPress={onBack} />
    </View>
  );
}

export default ProductoForm;
