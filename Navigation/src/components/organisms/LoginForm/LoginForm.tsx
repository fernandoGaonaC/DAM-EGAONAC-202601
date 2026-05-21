import { Text, View } from "react-native";
import { Button } from "../../atoms";
import styleLogin from "./LoginFormStyle";
import { InputsGroup } from "../../molecules";
import { useState } from "react";

interface Props {
  onRegistrar: () => void;
  onIngresar: (username: string, password: string) => void;
}

function LoginForm({ onRegistrar, onIngresar }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styleLogin.titulo}>Formulario Login</Text>
      
      <InputsGroup
        fields={[
          {
            label: "Username",
            placeholder: "user",
            value: username,
            onChangeText: setUsername,
          },
          {
            label: "Password",
            placeholder: "Password",
            value: password,
            onChangeText: setPassword,
          },
        ]}
      />

      <Button titulo="Iniciar Sesión" onPress={() => onIngresar(username, password)} />
      <Button titulo="No tienes cuenta ?" onPress={onRegistrar} />
    </View>
  );
}

export default LoginForm;
