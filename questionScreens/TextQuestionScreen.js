import React, { useState, useContext } from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CampaignContext } from '../contexts/CampaignContext'

const TextQuestionScreen = ({question}) => {

  return (
    <View>
      <Text>This is a text question</Text>
      <Text>{question.QuestionText}</Text>
    </View>
  )
};

export default TextQuestionScreen;