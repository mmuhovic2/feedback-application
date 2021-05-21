import React, { useState } from 'react'
import { Text, View } from 'react-native';

const SingleAnswerQuestionScreen = (question) => {

  return (
    <View>
      <Text>This is a single answer question</Text>
      <Text>{question.question.QuestionText}</Text>
    </View>
  )
};

export default SingleAnswerQuestionScreen;