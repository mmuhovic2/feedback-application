import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import ButtonContainer from '../ButtonContainer';

const TextQuestionScreen = ({ question }) => {
  const [answer, setAnswer] = useState("...");

  return (
    <View>
      <View style={styles.question}>
        <Text>This is a text question</Text>
        <TextInput
          placeholder="Answer"
          onChangeText={(value) => { setAnswer(value); }}></TextInput>
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
});