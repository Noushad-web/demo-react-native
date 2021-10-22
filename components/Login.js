import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Otp from './Otp';
import style from '../globalStyle';

const Login = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible(!isVisible);
  }

  return (
    <SafeAreaView style={style.container}>
      {
      (isVisible)
        ?
          <Otp/>
        :
        <>
          <Text style={style.heading}>Phone number</Text>
          <TextInput placeholder='Mobile number...' style={style.input} ></TextInput>
            <TouchableOpacity onPress={handlePress} style={style.btn}>
              <Text style={style.btnText}>Login</Text>
            </TouchableOpacity>
        </>
      }
    </SafeAreaView>
  )
}

export default Login;
