
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
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
import IndependentQuestionScale from './IndependentQuestionScale';


const DependentQuestion = ({navigation}) => {
    const [text, onChangeText] = React.useState("Unesite odgovor");

    var question1 = 'Podatak 1: ';
    var question2 = 'Podatak 2: ';
    var question3 = 'Podatak 3: ';

    return (
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center'}}>
          <ScrollView style={styles.scrollview}>
                <IndependentQuestionScale></IndependentQuestionScale>

                <Text style={styles.question}>{question1}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                  />


                  <Text style={styles.question}>{question2}</Text>
                  <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={text}
                    />

                    <Text style={styles.question}>{question3}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                      />
              </ScrollView >

            <View style={styles.button}>
              <Button
                  title="Submit"
                  color="#009387"
              />
              </View>
           </View>
        );
}

export default DependentQuestion;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  question: {
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 20,
          fontSize: 15,
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
     scrollview: {
        marginTop: 20
     }
});