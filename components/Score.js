import React, { Component } from 'react';
import Block from "./Block";
import Button from './Button';
import Text from './Text';
import { WebView } from 'react-native-webview';

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file
    };
  }

  render() {
    return (
            <WebView
                source={{uri: 'http://192.168.31.81:3000'}}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    startInLoadingState={true}
                    automaticallyAdjustContentInsets={true}
            >
            </WebView>
    );
  }
}

export default Score;