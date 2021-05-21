import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ButtonContainer from '../ButtonContainer';

const ScaleQuestionScreen = ({ question }) => {
  const [answer, setAnswer] = useState("...");
  return (
    <View>
      <View style={styles.question}>
        <Text>This is a scale question</Text>
        <Text>{question.QuestionText}</Text>
      </View>
      <ButtonContainer answer={answer} />
    </View>
  )
};

export default ScaleQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
});