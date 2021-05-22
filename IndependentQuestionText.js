
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Button,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RadioButton from './RadioButton';





const IndependentQuestionText = ({navigation}) => {
    const [text, onChangeText] = React.useState("Unesite odgovor");
  const [number, onChangeNumber] = React.useState(null);

    var question = 'Proizvod koji ste upravo kupili vas je privukao zbog: ';

    return (
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center'}}>
            <Text style={styles.question}>{question}</Text>

            <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                  />


            <View style={styles.button}>
            <Button
                title="Submit"
                color="#009387"
            />
             </View>
           </View>
        );
}

export default IndependentQuestionText;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  question: {
          marginBottom: 35,
          marginLeft: 20,
          marginRight: 20,
          fontSize: 25,
  	},
  	button: {
         marginLeft: 190,
         width: 150
    },
    input: {
        height: 150,
        margin: 20,
        borderWidth: 1,
      },
});