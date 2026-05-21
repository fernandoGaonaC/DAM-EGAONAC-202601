import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import styles from "./InputText.style";

interface Props {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const InputText = ({ label, placeholder, value, onChangeText }: Props) => {
  return (
    <View >
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};



export default InputText;
