import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import ButtonContainer from '../ButtonContainer';

const TextQuestionScreen = ({ question }) => {
  const [answer, setAnswer] = useState("...");

  return (
    <View>
      <View style={styles.question}>
        <Text style={styles.questionText}>{question.QuestionText}</Text>
        <TextInput
          placeholder="Vaš odgovor..."
          onChangeText={(value) => { setAnswer(value); }}
          style = {styles.input}></TextInput>
      </View>
      <ButtonContainer answer={answer} />
    </View>
  )
};

export default TextQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 100,
    borderRadius: 10
  },
  questionText: {
    color: 'white',
    fontSize: 18
  }
});