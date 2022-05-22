import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

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
  handleUpload = () => {
    
  }
  handlePlayMusic = () => {
    const { navigation } = this.props;
    navigation.navigate("Player");
  };
  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("Share");
  };
  render() {
    const { errors } = this.state;
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
              <Text center h1 bold black>
                {myMusic.musicName}
              </Text>
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
            <Block row middle>
              <Button
                gradient
                style={{
                  marginTop: -width * 0.02,
                  marginLeft: -width * 0.02,
                  marginRight: width * 0.02,
                  width: (width - width * 0.07 * 4) / 2,
                }}
                onPress={() => this.handlePlayMusic()}
              >
                <Text bold white center>
                  Upload Image
                </Text>
              </Button>
              <Button
                gradient
                style={{
                  marginTop: -width * 0.02,
                  marginHorizentol: width * 0.02,
                  width: (width - width * 0.07 * 4) / 2,
                }}
                onPress={() => this.handlePlayMusic()}
              >
                <Text bold white center>
                  Go to play music
                </Text>
              </Button>
            </Block>
            <Block flex={0.2} center margin={[-width * 3.8, 0, 0, 0]}>
              <Text>Type Music Name</Text>
              <Input
                style={{ width: width * 0.8 }}
                defaultValue={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <Button
                gradient
                style={{
                  marginTop: width * 0.02,
                  marginHorizentol: width * 0.02,
                  width: (width - width * 0.07 * 3) ,
                }}
                onPress={() => this.handleSubmit()}
              >
                <Text bold white center>
                  Submit
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
