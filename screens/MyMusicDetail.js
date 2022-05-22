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

import { Button, Block, Input, Text, Card } from "../components";
import { theme } from "../constants";

const { width } = Dimensions.get("window");

export default class MyMusicDetail extends Component {
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
  }
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const { myMusic } = this.props.navigation.state.params;
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
              <Text center h1 bold black>
                {myMusic.musicName}
              </Text>
            </Block>
          </Block>

          <Block
            color="white1"
            padding={[0, theme.sizes.base]}
            margin={[-width* 0.2, 0, 0, 0]}
            flex={0.75}
          >
            <Card center shadow style={styles.myMusic}>
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
            <Button gradient style={{paddingHorizontal: width * 0.07, marginTop: -width * 0.01}} onPress={() => this.handlePlayMusic()}>
                <Text bold white center>
                  Go to play music
                </Text>
            </Button>
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
