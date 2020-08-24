import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import colors from "../config/colors";
import RegisterInputText from "../components/RegisterInputText";
import RegisterText from "../components/RegisterText";
import ButtonsWelcome from "../components/ButtonsWelcome";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Login</Text>
      <RegisterText>Please enter your name</RegisterText>
      <RegisterInputText
        placeholder={"Your name"}
        onChangeText={(text) => setUsername(text)}
        value={username}
      ></RegisterInputText>
      <View style={styles.buttonContainer}>
        <ButtonsWelcome
          title="Log in"
          onPress={() => {
            dispatch({ type: "server/register", data: username });
            navigation.navigate("FriendList");
          }}
        />
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
