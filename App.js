import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Text, Block } from './components'
import Navigation from "./navigation";

export default function App() {
  return (
      <><StatusBar style="light" /><Block white>
          <Navigation />
      </Block></>
    
  );
}

const styles = StyleSheet.create({});