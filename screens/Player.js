import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  SafeAreaView,
  View,
} from "react-native";
import { WebView, Image } from "react-native-webview";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class Oemer extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  };

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block flex={1}>
          <Block flex={0.2} color="white1">
            <ImageBackground
              source={require("../assets/images/header3.png")}
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
            <Block margin={[-theme.sizes.base * 5.5, 0, 0, 0]}>
              <Text center h1 bold black>
                Oemer
              </Text>
            </Block>
          </Block>

          <Block
            color="white1"
            padding={[0, theme.sizes.base * 2]}
            margin={[0]}
            flex={0.8}
          >
            {/* <ScrollView> */}
            <WebView
              source={{ uri: "http://172.20.10.2:3000" }}
              domStorageEnabled={true}
              javaScriptEnabled={true}
              startInLoadingState={true}
              automaticallyAdjustContentInsets={true}
            ></WebView>
            {/* </ScrollView> */}
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 5.6,
  },
  signup: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
