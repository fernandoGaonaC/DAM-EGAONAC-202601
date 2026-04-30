import { StyleSheet } from "react-native";

export const appStyles=StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    
    padding: 20,
  },
  displayText: {
    fontSize: 40,
    color: "white",
    backgroundColor:"green",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

})