import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { RadioButton } from 'react-native-paper';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        IPAdress: '',
        installationCode: '',
        ping: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidInstallationCode: true,
        isValidPing: true,
    });

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                IPAdress: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                IPAdress: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const pingInputChange = (val) => {
        if( !isNaN(val.trim()) && val.trim() !== '' ) {
            setData({
                ...data,
                ping: val,
                check_pingInputChange: true,
                isValidPing: true
            });
        } else {
            setData({
                ...data,
                ping: val,
                check_pingInputChange: false,
                isValidPing: false
            });
        }
    }

    const handleInstallationCodeChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                installationCode: val,
                isValidInstallationCode: true
            });
        } else {
            setData({
                ...data,
                installationCode: val,
                isValidInstallationCode: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const [checked, setChecked] = React.useState('independent');

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Synchronize your device!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: "#fff"
            }]}
        >
            <Text style={[styles.text_footer, {
                color: "black"
            }]}>IP Adress</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={"black"}
                    size={20}
                />
                <TextInput 
                    placeholder="Your IP Adress"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
           
            

            <Text style={[styles.text_footer, {
                color: "black",
                marginTop: 35
            }]}>Installation Code</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={"black"}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Installation Code"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: "black"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handleInstallationCodeChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                color: "black", marginTop: 35
            }]}>Ping Interval</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="clock-o"
                    color={"black"}
                    size={20}
                />
                <TextInput 
                    placeholder="Ping interval (seconds)"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => pingInputChange(val)}
                />
                {data.check_pingInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                color: "black", marginTop: 35
            }]}>Question Type</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="question-circle-o"
                    color={"black"}
                    size={20}
                />
                <RadioButton
                    style={{marginRight: 50}}
                    value="independent"
                    status={ checked === 'independent' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('independent')}
                />
                <Text style={styles.text_footer}>Independent</Text>
                <RadioButton
                    value="dependent"
                    status={ checked === 'dependent' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('dependent')}
                />
                <Text style={styles.text_footer}>Dependent</Text>
                
            </View>
           
            
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {navigation.navigate("HomeScreen")}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Synchronize</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 35
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });