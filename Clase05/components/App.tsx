import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CountScreen } from './screen/CountScreen/CountScreen';
import { appStyles } from './screen/CountScreen/App,style';

export class App extends React.Component {
  // Estado inicial
  state = {
    count: 0,
  };

  // Función para manejar los botones
  handleOnPress = (valor: number) => {
    this.setState(prevState => ({
      count: prevState.count + valor,
    }));
  };

  render() {
    console.log("App funcionando");

    return (
      <View style={appStyles.root}>
        {/* Pantalla de resultados */}
        <View style={appStyles.display}>
          <Text style={styles.displayText}>{this.state.count}</Text>
        </View>

        {/* Teclado */}
        <View style={appStyles.keypad}>
          <CountScreen label={"1"} OnPress={() => this.handleOnPress(1)} />
          <CountScreen label={"2"} OnPress={() => this.handleOnPress(2)} />
          <CountScreen label={"3"} OnPress={() => this.handleOnPress(3)} />
          <CountScreen label={"4"} OnPress={() => this.handleOnPress(4)} />
          <CountScreen label={"5"} OnPress={() => this.handleOnPress(5)} />
          <CountScreen label={"6"} OnPress={() => this.handleOnPress(6)} />
          <CountScreen label={"7"} OnPress={() => this.handleOnPress(7)} />
          <CountScreen label={"8"} OnPress={() => this.handleOnPress(8)} />
          <CountScreen label={"9"} OnPress={() => this.handleOnPress(9)} />
          <CountScreen label={"+"} OnPress={() => this.handleOnPress(1)} />
          <CountScreen label={"0"} OnPress={() => this.handleOnPress(0)} />
          <CountScreen label={"-"} OnPress={() => this.handleOnPress(-1)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 40,
    color: "white",
  },
});

export default App;