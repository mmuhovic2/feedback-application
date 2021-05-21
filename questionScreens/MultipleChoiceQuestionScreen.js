import React, { useState } from 'react'
import { Text, View } from 'react-native';

const MultipleChoiceQuestionScreen = (question) => {
  return (
    <View>
      <Text>This is a multiple choice question</Text>
      <Text>{question.question.QuestionText}</Text>
    </View>
  )
};

export default MultipleChoiceQuestionScreen;