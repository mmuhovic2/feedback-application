import React, { useState } from 'react'
import { Text, View } from 'react-native';

const TextQuestionScreen = (question) => {
  return (
    <View>
      <Text>This is a text question</Text>
      <Text>{question.question.QuestionText}</Text>
    </View>
  )
};

export default TextQuestionScreen;