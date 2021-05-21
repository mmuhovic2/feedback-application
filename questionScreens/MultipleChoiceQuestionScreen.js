import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ButtonContainer from '../ButtonContainer';

const MultipleChoiceQuestionScreen = ({ question }) => {
  const [answer, setAnswer] = useState("...");

  return (
    <View>
      <View style={styles.question}>
        <Text>This is a multiple choice question</Text>
        <Text>{question.QuestionText}</Text>
      </View>
      <ButtonContainer answer={answer} />
    </View>
  )
};

export default MultipleChoiceQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
});