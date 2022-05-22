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
  Image,
} from "react-native";
import { WebView } from "react-native-webview";
import Textarea from "react-native-textarea";

import { Button, Block, Input, Text, Card } from "../components";
import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default class Success extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  };
  handlePlayMusic = () => {
    const { navigation } = this.props;
    navigation.navigate("Player");
  };
  handleMenu = () => {
    const { navigation } = this.props;
    navigation.navigate("Browse");
  };
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const myMusic = require("../constants/mocks").myMusics[0];
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block flex={1}>
          <Block flex={0.25} color="white1">
            <ImageBackground
              source={require("../assets/images/header3.png")}
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
            <Block margin={[-theme.sizes.base * 5.5, 0, 0, 0]}>
              {/* <Text center h1 bold black>
                {myMusic.musicName}
              </Text> */}
            </Block>
          </Block>

          <Block
            color="white1"
            padding={[0, theme.sizes.base]}
            margin={[-width * 0.2, 0, 0, 0]}
            flex={0.75}
          >
            <Card flex={0.8} center shadow style={styles.myMusic}>
              <Block
                margin={[-width * 0.1, 25, 0, 0]}
                // size={80}
                // color={theme.colors.secondary}
                flex={0.5}
              >
                <Block center middle margin={[0, 0, 0, 50]}>
                  <Text center bold h3>
                    Before Oemer
                  </Text>
                </Block>
                <Block margin={[-70, 0, 0, 0]}>
                  <Image
                    source={myMusic.preImage}
                    style={{
                      //   minWidth: theme.sizes.base * 11.5,
                      //   maxWidth: theme.sizes.base * 11.5,
                      //   minHeight: theme.sizes.base * 14,
                      //   maxHeight: theme.sizes.base * 14,
                      minWidth: width * 0.45,
                      maxWidth: width * 0.45,
                      minHeight: width * 0.45,
                      maxHeight: width * 0.45,
                      borderRadius: 5,
                    }}
                  />
                </Block>
              </Block>
              <Block
                margin={[-width * 0.1, 25, 0, 0]}
                // size={80}
                // color={theme.colors.secondary}
                flex={0.5}
              >
                <Block center middle margin={[0, 0, 0, 50]}>
                  <Text center bold h3>
                    After Oemer
                  </Text>
                </Block>
                <Block margin={[-70, 0, 0, 0]}>
                  <Image
                    source={myMusic.afterImage}
                    style={{
                      minWidth: width * 0.45,
                      maxWidth: width * 0.45,
                      minHeight: width * 0.45,
                      maxHeight: width * 0.45,
                      borderRadius: 5,
                    }}
                  />
                </Block>
              </Block>
            </Card>
            <Block margin={[0, 0, 0, width * 0.07]}>
              <Text h1 bold color="primary">Post Submit Success!!!</Text>
            </Block>
            <Block flex={0.2}  margin={[-width * 3.3, 0, 0, width * 0.07]}>
              <Button
                gradient
                style={{
                  marginTop: width * 0.02,
                  marginHorizentol: width * 0.02,
                  width: (width - width * 0.07 * 3) ,
                }}
                onPress={() => this.handleMenu()}
              >
                <Text bold white center>
                  Back to Menu
                </Text>
              </Button>
            </Block>
            {/* <ScrollView> */}
            {/* <WebView
              source={{ uri: "http://192.168.31.81:3000" }}
              domStorageEnabled={true}
              javaScriptEnabled={true}
              startInLoadingState={true}
              automaticallyAdjustContentInsets={true}
            ></WebView> */}
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
  myMusic: {
    // this should be dynamic based on screen width
    flexDirection: "row",

    minWidth: width - theme.sizes.padding * 2.4 - theme.sizes.base,
    maxWidth: width - theme.sizes.padding * 2.4 - theme.sizes.base,
    maxHeight: width - theme.sizes.padding * 2.4 - theme.sizes.base,
  },
});
