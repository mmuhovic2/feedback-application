import React, { Component, useState } from 'react';
import { Alert} from 'react-native';

import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Button,
    CheckBox,
    StatusBar,
    Image
} from 'react-native';



const IndependentQuestionMultipleChoice = ({navigation}) => {
    const answers = [
    	{
    		key: '1',
    		text: 'Izgled',
    		isSelected: true,
    	},
    	{
    		key: '2',
    		text: 'Boja',
    		isSelected: false,
    	},
    	{
    		key: '3',
    		text: 'Cijena',
    		isSelected: false,
    	},
    	{
    		key: '4',
    		text: 'Funkionalnost',
    		isSelected: false,
      }
    ];



    var question = 'Proizvod koji ste upravo kupili vas je privukao zbog: ';

    var payments = [];


    for (let ans of answers) {
        payments.push(
        <View style={styles.answers}>
            <CheckBox/>
            <Text style={styles.radioText}>{ans.text}</Text>
        </View>
        )
    }

    return (
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center'}}>
             <Text style={styles.question}>{question}</Text>

             <View style={styles.checkboxes} >
                { payments }
            </View>


             <View style={styles.button}>
             <Button
                 title="Submit"
                 color="#009387"
             />
              </View>
           </View>
        );
}

export default IndependentQuestionMultipleChoice;

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
    checkboxes: {
        marginLeft: 20,
        marginRight: 20,
    },
    radioText: {
            marginRight: 35,
            fontSize: 15,
            color: '#000',
            fontWeight: '700'
        },
    answers:{
        flexDirection: "row",
        marginBottom: 25,
    }
});