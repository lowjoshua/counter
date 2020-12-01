import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let [count, setCount] = useState(0)

  function Increment() {
    console.log("You pressed me ouch!");
    setCount(count + 1);
  }
  function Decrement() {
    if (count > 0) {
    console.log("You pressed me ouch!");
    setCount(count -1);
    }
  } 
  function Reset() {
    console.log("You pressed me ouch!");
    setCount(count = 0);
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title='Increment' onPress={Increment}> </Button>
      <Button title='Decrement' onPress={Decrement}> </Button>
      <Button title='Reset' onPress={Reset}> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
