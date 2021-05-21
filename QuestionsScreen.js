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
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CampaignContext } from './contexts/CampaignContext'
import SingleAnswerQuestionScreen from './questionScreens/SingleAnswerQuestionScreen'
import ScaleQuestionScreen from './questionScreens/ScaleQuestionScreen'
import TextQuestionScreen from './questionScreens/TextQuestionScreen'
import MultipleChoiceQuestionScreen from './questionScreens/MultipleChoiceQuestionScreen'



const QuestionsScreen = ({ navigation }) => {
  const { Questions } = useContext(CampaignContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const getNextQuestion = () => {
    if (currentQuestion < Questions.length-1)
      setCurrentQuestion(currentQuestion + 1);
  };

  const getPreviousQuestion = () => {
    if (currentQuestion > 0)
      setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.question}>
          {Questions[currentQuestion].QuestionType == "single-answer" &&
            <SingleAnswerQuestionScreen question={Questions[currentQuestion]}/>
          }
          {Questions[currentQuestion].QuestionType == "scale" &&
            <ScaleQuestionScreen question={Questions[currentQuestion]}/>
          }
          {Questions[currentQuestion].QuestionType == "text" &&
            <TextQuestionScreen question={Questions[currentQuestion]}/>
          }
          {Questions[currentQuestion].QuestionType == "multiple-choice" &&
            <MultipleChoiceQuestionScreen question={Questions[currentQuestion]}/>
          }
        </View>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={getPreviousQuestion}>
          <LinearGradient
            colors={['#ededed', '#d3d3d3']}
            style={styles.button}
          >
            <MaterialIcons
              name="navigate-before"
              color="#000000"
              size={20}
            />
            <Text style={styles.textButton}>Previous </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={getNextQuestion}>
          <LinearGradient
            colors={['#ededed', '#d3d3d3']}
            style={styles.button}
          >
            <Text style={styles.textButton}>Next</Text>
            <MaterialIcons
              name="navigate-next"
              color="#000000"
              size={20}
            />
          </LinearGradient>
        </TouchableOpacity>

        </View>
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
  },
  button: {
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold'
  },
  question: {
    height: '90%',
    justifyContent: 'center'
  },
  buttonsContainer: {
   // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});