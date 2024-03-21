import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar
} from 'react-native';
import { LoadingModal } from "react-native-loading-modal";
import axios from 'axios';
import { SIZES } from '../Components/Constants/Theme';
import Button from '../Components/Button';


const Login = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    if (key === 'email') {
      setEmail(value);
    } else if (key === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
  
      const response = await axios.post(
        'http://localhost:5000/login',
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        await AsyncStorage.setItem('token', response.data.token);
        Alert.alert('Success✔️', 'Logged in successful');
        setEmail('');
        setPassword('');
        navigation.navigate('Welcome');
      }
    } catch (error) {
      Alert.alert('Invalid⚠️', 'Incorrect password or username');
      console.log(error)
    } finally {
      setLoading(false);
    }
  };  

  const {
    container,
    imageContainer,
    image,
    welcomeContainer,
    welcomeTitle,
    welcomeText,
    inputContainer,
    input,
    buttonText,
    buttonContainer,
    forgotPass,
    forgotPassText,
    clickHere,
    indicator,
  } = styles;

  return (
      <ScrollView>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <SafeAreaView style={container}>
        <KeyboardAvoidingView
          style={container}
        >
          <View style={imageContainer}>
            <Image source={require('../../assets/images/welcome1.png')} style={image} />
          </View>
          <View style={welcomeContainer}>
            <Text style={welcomeTitle}>Welcome Back!</Text>
            <Text style={welcomeText}>Please Log into your existing account</Text>
          </View>
          <View style={inputContainer}>
            <TextInput
              style={input}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={(value) => handleChange('email', value)}
              value={email}
            />
            <TextInput
              style={input}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry
              onChangeText={(value) => handleChange('password', value)}
              value={password}
            />
          </View>
          <Button
            title={'Login'}
            buttonContainer={buttonContainer}
            buttonText={buttonText}
            press={handleLogin}
          />
          <View style={forgotPass}>
            <Text style={forgotPassText}>Forgot Password?</Text>
            <Text style={clickHere} onPress={() => navigation.navigate('OTPMail')}>
              Click Here
            </Text>
          </View>
          <Text style={indicator}>
          </Text>
        </KeyboardAvoidingView>
        {loading && <LoadingModal task='Logging in..' modalVisible={true} />}
      </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height * 0.02,
  },
  image: {
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.34,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  welcomeText: {
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
    width: 200,
  },
  inputContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height * 0.05,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: SIZES.width * 0.8,
    padding: SIZES.height * 0.017,
    borderRadius: 10,
    margin: 10,
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height * 0.02,
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'orange',
    width: SIZES.width * 0.4,
    padding: SIZES.height * 0.017,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  forgotPass: {
    alignItems: 'center',
    paddingTop: 13,
  },
  forgotPassText: {
    color: 'black',
  },
  clickHere: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  indicator: {
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: SIZES.height,
    left: SIZES.width * 0.43,
  },
});

export default Login;
