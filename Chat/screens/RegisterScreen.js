import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import RegisterInputText from "../components/RegisterInputText";
import RegisterText from "../components/RegisterText";
import ButtonsWelcome from "../components/ButtonsWelcome";

function RegisterScreen(props) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Register</Text>
      <RegisterText>Please enter your name</RegisterText>
      <RegisterInputText placeholder={"Your name"}></RegisterInputText>
      <RegisterText>Please enter your mobile phone</RegisterText>
      <RegisterInputText placeholder={"Your phone number"}></RegisterInputText>
      <View style={styles.buttonContainer}>
        <ButtonsWelcome title="Register"></ButtonsWelcome>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },

  heading: {
    fontSize: 30,
    position: "absolute",
    top: "20%",
    fontWeight: "700",
  },

  buttonContainer: {
    width: "70%",
    position: "absolute",
    bottom: "10%",
  },
});

export default RegisterScreen;
