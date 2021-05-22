import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ButtonContainer from '../ButtonContainer';
import * as Animatable from 'react-native-animatable';
import { RadioButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MultipleChoiceQuestionScreen = ({ question }) => {
  const [answer, setAnswer] = useState(question.QuestionAnswers[0].AnswerId);
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <View style={styles.question}>
        <Text style={styles.text_question}>{question.QuestionText}</Text>
        <Text></Text>
        <View style={styles.action}>
          
           <View style={styles.button_container}>
               <View style={{flex:0}}>
                  <RadioButton
                    // style={{marginRight: 50}}
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => {setChecked('first'); setAnswer(question.QuestionAnswers[0].AnswerId)}}
                  />
                </View> 
                <View style={{flex:1}}>
                  <Text style={styles.text_footer}>{question.QuestionAnswers[0].Answer.AnswerText}</Text> 
                </View> 
           </View> 

           <View style={styles.button_container}>
               <View style={{flex:0}}>
                  <RadioButton
                    // style={{marginRight: 50}}
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => {setChecked('second'); setAnswer(question.QuestionAnswers[1].AnswerId)}}
                  />
                </View> 
                <View style={{flex:1}}>
                  <Text style={styles.text_footer}>{question.QuestionAnswers[1].Answer.AnswerText}</Text> 
                </View> 
           </View> 

           <View style={styles.button_container}>
               <View style={{flex:0}}>
                  <RadioButton
                    // style={{marginRight: 50}}
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => {setChecked('third'); setAnswer(question.QuestionAnswers[2].AnswerId)}}
                  />
                </View> 
                <View style={{flex:1}}>
                  <Text style={styles.text_footer}>{question.QuestionAnswers[2].Answer.AnswerText}</Text> 
                </View> 
           </View> 
                        
        </View>
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
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'column',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  button_container: {
    flexDirection: "row"
  },
  text_question: {
    color: "#fff",
    fontSize: 25
  }
});