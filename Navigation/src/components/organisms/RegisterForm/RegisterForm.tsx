import { View, Text } from "react-native";
import { Button } from "../../atoms";
import styleRegister from "./RegisterFormStyle";
import { InputsGroup } from "../../molecules";
import { useState } from "react";
import { User } from "../../../core/entities";

interface Prop {
  onSubmit: (user: User) => void;
  disableAction: boolean;
}

const RegisterForm = ({ onSubmit, disableAction }: Prop) => {
  const [nombre, setNombre] = useState("");
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimineto, setFechaNacimiento] = useState("");
  const [contrasena, setContrasena] = useState("");

  return (
    <View>
      <Text style={styleRegister.subtitulo}>Formulario registro</Text>

      <InputsGroup
        fields={[
          {
            label: "Nombre",
            placeholder: "Tu nombre",
            value: nombre,
            onChangeText: setNombre,
          },
          {
            label: "Username",
            placeholder: "Usuario único",
            value: username,
            onChangeText: setUsername,
          },
          {
            label: "Correo",
            placeholder: "ejemplo@correo.com",
            value: correo,
            onChangeText: setCorreo,
          },
          {
            label: "Fecha de nacimiento",
            placeholder: "YYYY-MM-DD",
            value: fechaNacimineto,
            onChangeText: setFechaNacimiento,
          },
          {
            label: "Contraseña",
            placeholder: "********",
            value: contrasena,
            onChangeText: setContrasena,
          },
        ]}
      />

      <Button
        titulo="Registrarme"
        onPress={() =>
          onSubmit({
            nombre,
            username,
            correo,
            fechaNacimineto, 
            contrasena,
          })
        }
        disabled={disableAction}
      />
    </View>
  );
};

export default RegisterForm;
