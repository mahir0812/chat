import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ChatScreen from "./screens/ChatScreen";
import FriendListScreen from "./screens/FriendListScreen";

const AppStack = createStackNavigator({
  ChatList: FriendListScreen,
  Chat: ChatScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Welcome: WelcomeScreen,
      Register: RegisterScreen,
      Login: LoginScreen,
      FriendList: FriendListScreen,
    },
    {
      initialRouteName: "Login",
      swipeEnabled: true,
      animationEnabled: true,
      lazy: true,
      transitionConfig: () => ({
        transitionSpec: { duration: 1 },
      }),
    }
  )
);
