import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Button,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RadioButton from './RadioButton';

const PROP = [
	{
		key: '1',
		text: 'Izgled',
	},
	{
		key: '2',
		text: 'Boja',
	},
	{
		key: '3',
		text: 'Cijena',
	},
	{
		key: '4',
		text: 'Funkionalnost',
  },
];



const IndependentQuestionSingleAnswer = ({navigation}) => {

    var question = 'Proizvod koji ste upravo kupili vas je privukao zbog: ';

    return (
          <View style={{flex: 1, justifyContent: 'center', justifyContent: 'center'}}>
            <Text style={styles.question}>{question}</Text>
            <RadioButton PROP={PROP}/>
            <View style={styles.button}>
            <Button
                title="Submit"
                color="#009387"
            />
             </View>
           </View>
        );
}

export default IndependentQuestionSingleAnswer;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;




const styles = StyleSheet.create({
  question: {
          marginBottom: 35,
          marginLeft: 20,
          marginRight: 20,
          fontSize: 25,
  	},
  	button: {
         marginLeft: 190,
         width: 150
    }
});