import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function CounterText(props) {
return (
<Text 
    style={[
    styles.counterText,
    { 
    color: props.color,
    fontSize: props.fontSize,
    marginBottom: props.marginBottom,
    }
]}
>
    {props.children}
</Text>
);
}

const styles = StyleSheet.create({
    counterText: {
        fontWeight: "bold"
    }
});