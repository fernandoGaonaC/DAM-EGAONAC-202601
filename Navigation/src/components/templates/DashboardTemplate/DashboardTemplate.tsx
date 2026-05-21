import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../atoms";

interface Props {
  nombre: string;
  subtitulo: string;
  onPress:()=>void,
  lista?: React.ReactNode;
}

function DashboardTemplate({ nombre,  subtitulo, lista ,onPress}: Props) {
  return (
    <View >
      <Text style={styles.title}>{nombre}</Text>
      <Button titulo="NUEVO PRODUCTO" onPress={onPress} ></Button>
      <View style={styles.middleBlock}>
        <Text style={styles.subtitle}>{subtitulo}</Text>
        {lista}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#007680", 
  },
  middleBlock: {
    flex: 1,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    color: "#ef7f00",
  },
});

export default DashboardTemplate;
