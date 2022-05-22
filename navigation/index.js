import React from "react";
import { Image, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Browse from "../screens/Browse";
import Oemer from "../screens/Oemer";
import MyMusic from "../screens/MyMusic";
import MyMusicDetail from "../screens/MyMusicDetail";
import Player from "../screens/Player";
import Share from "../screens/Share";
import Success from "../screens/Success";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Browse,
    Oemer,
    MyMusic,
    MyMusicDetail,
    Player,
    Share,
    Success
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      headerStyle: {
        height: 0,
        opacity: 0
        // height: theme.sizes.base * 5,
        // backgroundColor: theme.colors.white, // or 'white
        // borderBottomColor: theme.colors.white,
        // elevation: 0 // for android
      },
    //   headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         // fontFamily: 'Cochin',
    //         fontWeight: 'bold',
    //         fontSize: 20,
    //     },
    //   headerBackground: () => <Image source={require("../assets/images/header1.png")} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 3.9}}/>,
    //   headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeft: () => null,
    }
  }
);

export default createAppContainer(screens);
