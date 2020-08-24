import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import { TextInput } from "react-native-gesture-handler";

function RegisterInputText({ placeholder, onChangeText, value }) {
  return (
    <TextInput
      placeholderTextColor="#000"
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.text}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.white,
    borderRadius: 25,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default RegisterInputText;
