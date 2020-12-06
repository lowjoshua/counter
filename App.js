import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CounterText from "./components/CounterText";

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
  function renderEncouragingText() {
    if (count == 30) {
      return "Some more!"
    }
    if (count == 20) {
      return "Well done!"
    }
    if (count >= 10 && count <= 19) {
      return "Keep Going"
    }
  }
 
  return (
    <View style={styles.container}>
      <CounterText fontSize={30} color="pink" marginBottom={55}>
      {count}
      </CounterText>
      <CounterText fontSize={40} color="blue" marginBottom={5}>
      {count}
      </CounterText>
      <CounterText fontSize={60} color="green" marginBottom={5}>
      {count}
      </CounterText>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity onPress={Increment}
                        style={styles.button}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>

      <Button title='-' onPress={Decrement}> </Button>
      <Button title='Reset' onPress={Reset}> </Button>
      <Text style={styles.encouragingtext}> {renderEncouragingText()} </Text>
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
  encouragingtext: {
    marginTop: 50,
    color: '#aaaaaa',
    fontSize: 30,
  },
  count: {
    marginBottom: 50,
    color: 'red',
    fontSize: 80,
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  }


});
