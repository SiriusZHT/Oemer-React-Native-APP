import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

export default class Header extends Component {
  render() {
    const { color, backImage, style, children, ...props } = this.props;
    const cardStyles = [styles.card, style];

    return backImage ? (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    ) : (
      <ImageBackground>
        <Block
          color={color || theme.colors.white}
          style={cardStyles}
          {...props}
        >
          {children}
        </Block>
      </ImageBackground>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
});
