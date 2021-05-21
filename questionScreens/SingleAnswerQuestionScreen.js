import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ButtonContainer from '../ButtonContainer';

const SingleAnswerQuestionScreen = ({question}) => {

  return (
    <View>
      <View style={styles.question}>
      <Text>This is a single answer question</Text>
      <Text>{question.QuestionText}</Text>
      </View>
      <ButtonContainer/>
    </View>
  )
};

export default SingleAnswerQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
});