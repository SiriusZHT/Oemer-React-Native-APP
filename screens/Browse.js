import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class Browse extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  };
  handleOemer = () => {
    const { navigation } = this.props;
    navigation.navigate("Oemer");
  };
  handleMyMusic = () => {
    const { navigation } = this.props;
    navigation.navigate("MyMusic");
  };
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block flex={1}>
          <Block flex={0.45} color="white1">
            <ImageBackground
              source={require("../assets/images/header2.png")}
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
            <Block margin={[theme.sizes.base * 1, 0, 0, 0]}>
                <Text center h1 bold black>
                Hi Sirius
                </Text>
            </Block>
          </Block>

          <Block
            color="white1"
            padding={[0, theme.sizes.base * 2]}
            margin={[0]}
            flex={0.55}
          >
            <Block >
              <Button
                gradient
                onPress={() => this.handleOemer()}
                style={{
                  height: theme.sizes.base * 4,
                  borderRadius: theme.sizes.radius * 5,
                  marginTop: theme.sizes.base * 1,
                }}
              >
                <Text h2 bold white center>
                  Oemer
                </Text>
              </Button>
              <Button
                gradient
                onPress={() => this.handleMyMusic()}
                style={{
                  height: theme.sizes.base * 4,
                  borderRadius: theme.sizes.radius * 5,
                  marginTop: theme.sizes.base * 2.5,
                }}
              >
                <Text h2 bold white center>
                  My Musics
                </Text>
              </Button>
              <Button
                gradient
                onPress={() => this.handleMyMusic()}
                style={{
                  height: theme.sizes.base * 4,
                  borderRadius: theme.sizes.radius * 5,
                  marginTop: theme.sizes.base * 2.5,
                }}
              >
                <Text h2 bold white center>
                  Posts Musics
                </Text>
              </Button>

              <Button onPress={() => navigation.navigate("Login")}>
                <Text
                  gray
                  caption
                  right
                  style={{ textDecorationLine: "underline" }}
                >
                  Back to Login
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.8,
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
