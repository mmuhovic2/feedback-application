import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import IndependentQuestionSingleAnswer from './IndependentQuestionSingleAnswer';
import IndependentQuestionMultipleChoice from './IndependentQuestionMultipleChoice';
import IndependentQuestionText from './IndependentQuestionText';
import IndependentQuestionScale from './IndependentQuestionScale';
import DependentQuestion from './DependentQuestion';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        <RootStack.Screen name="IndependentQuestionSingleAnswer" component={IndependentQuestionSingleAnswer}/>
        <RootStack.Screen name="IndependentQuestionMultipleChoice" component={IndependentQuestionMultipleChoice}/>
        <RootStack.Screen name="IndependentQuestionText" component={IndependentQuestionText}/>
        <RootStack.Screen name="IndependentQuestionScale" component={IndependentQuestionScale}/>
        <RootStack.Screen name="DependentQuestion" component={DependentQuestion}/>
    </RootStack.Navigator>
);

export default RootStackScreen;