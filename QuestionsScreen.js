import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { CampaignContext } from './contexts/CampaignContext'
import SingleAnswerQuestionScreen from './questionScreens/SingleAnswerQuestionScreen'
import ScaleQuestionScreen from './questionScreens/ScaleQuestionScreen'
import TextQuestionScreen from './questionScreens/TextQuestionScreen'
import MultipleChoiceQuestionScreen from './questionScreens/MultipleChoiceQuestionScreen'



const QuestionsScreen = ({ navigation }) => {
  const { questions, currentQuestion, getNextQuestion, getPreviousQuestion } = useContext(CampaignContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          {questions[currentQuestion].QuestionType == "single-answer" &&
            <SingleAnswerQuestionScreen question={questions[currentQuestion]}/>
          }
          {questions[currentQuestion].QuestionType == "scale" &&
            <ScaleQuestionScreen question={questions[currentQuestion]}/>
          }
          {questions[currentQuestion].QuestionType == "text" &&
            <TextQuestionScreen question={questions[currentQuestion]}/>
          }
          {questions[currentQuestion].QuestionType == "multiple-choice" &&
            <MultipleChoiceQuestionScreen question={questions[currentQuestion]}/>
          }
      </View>
    </View>
  );
};

export default QuestionsScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: height_logo,
    height: height_logo
  }
});