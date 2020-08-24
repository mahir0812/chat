import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FriendListScreen({ navigation }) {
  const usersOnline = useSelector((state) => state.usersOnline);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundColor,
        paddingTop: 50,
      }}
    >
      <FlatList
        data={usersOnline}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Chat", {
                  name: item.username,
                  userId: item.userId,
                })
              }
            >
              <View style={styles.listRow}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <Text style={styles.avatarName}>{item.username}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listRow: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 10,
  },
  avatarName: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
    paddingHorizontal: 20,
    textAlignVertical: "center",
  },
});
