import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class MyMusic extends Component {
  state = {
    active: "Products",
    myMusics: [],
  };

  componentDidMount() {
    this.setState({ myMusics: this.props.myMusics });
  }

  render() {
    const { profile, navigation } = this.props;
    const { myMusics } = this.state;

    return (
      <Block color="white1">
        {/* <Block flex={0.25}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex={0.2}>
            <ImageBackground
              source={require("../assets/images/header3.png")}
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
            <Block
              margin={[
                -theme.sizes.padding * 3.5,
                0,
                theme.sizes.padding * 2.5,
                0,
              ]}
            >
              <Text center h1 bold black>
                MyMusic
              </Text>
            </Block>
          </Block>

          {/* </Block> */}

          <Block
            style={{ paddingVertical: theme.sizes.base * 2 }}
            color="white1"
          >
            <Block row space="between" style={styles.myMusics}>
              {myMusics.map((myMusic) => (
                <TouchableOpacity
                  key={myMusic.musicName}
                  onPress={() =>
                    navigation.navigate("MyMusicDetail", { myMusic })
                  }
                >
                  <Card center shadow style={styles.myMusic}>
                    <Block
                      margin={[0, 25, 0, 0]}
                      // size={80}
                      color={theme.colors.secondary}
                      flex={0.2}
                    >
                      <Image
                        source={myMusic.afterImage}
                        style={{
                          minWidth: 90,
                          maxWidth: 90,
                          minHeight: 60,
                          maxHeight: 60,
                          borderRadius: 5,
                        }}
                      />
                    </Block>
                    <Block flex={0.1}></Block>
                    <Block flex={0.7}>
                      <Text black medium h2>
                        {myMusic.musicName}
                      </Text>
                    </Block>

                    {/* <Text gray caption>
                    {myMusic.count} products
                  </Text> */}
                  </Card>
                </TouchableOpacity>
              ))}
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

MyMusic.defaultProps = {
  profile: mocks.profile,
  myMusics: mocks.myMusics,
};

export default MyMusic;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 5.6,
  },
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  myMusics: {
    flexDirection: "column",
    // flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  myMusic: {
    // this should be dynamic based on screen width
    flexDirection: "row",

    minWidth: width - theme.sizes.padding * 2.4 - theme.sizes.base,
    maxWidth: width - theme.sizes.padding * 2.4 - theme.sizes.base,
    maxHeight: width - theme.sizes.padding * 2.4 - theme.sizes.base,
  },
});
