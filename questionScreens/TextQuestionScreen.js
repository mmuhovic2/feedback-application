import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ButtonContainer from '../ButtonContainer';

const TextQuestionScreen = ({question}) => {

  return (
    <View>
      <View style={styles.question}>
      <Text>This is a text question</Text>
      <Text>{question.QuestionText}</Text>
      </View>
      <ButtonContainer/>
    </View>
  )
};

export default TextQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
});