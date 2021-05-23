import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ButtonContainer from '../ButtonContainer';
import ModalDropdown from 'react-native-modal-dropdown'

const SingleAnswerQuestionScreen = ({ question }) => {
  const [answer, setAnswer] = useState("...");
  var options = ['option 1', 'option 2'] //niz answerText
  

  return (
    <View>
      <View style={styles.question}>
        <Text>This is a single answer question</Text>
        <Text>{question.QuestionText}</Text>
      
        {question.QuestionAnswers[0].Answer.IsApicture === true ? 
            
        : <ModalDropdown
           options={options}
           style={styles.dropdown}
           textStyle={styles.text}
           defaultValue={'Izaberite..'}
           isFullWidth={true}
           dropdownTextStyle={styles.dropdownTextStyle}
           onSelect={(index) => setAnswer(question.QuestionAnswers[index].AnswerId)}
         />}
      </View>
      
      <ButtonContainer answer={answer} />
    </View>
  )
};

export default SingleAnswerQuestionScreen;

const styles = StyleSheet.create({
  question: {
    height: '90%',
    justifyContent: 'center'
  },
  dropdown: {
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
  },
  dropdownTextStyle: {
    color: '#000000'
  },
});