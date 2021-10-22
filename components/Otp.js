import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import style from '../globalStyle';
import Thanks from './Thanks';

const Otp = () => {

  const [isVisible__otp, setIsVisible__otp] = useState(false);

  const handlePress__otp = () => {
    setIsVisible__otp(!isVisible__otp);
  }

  return (
    (!isVisible__otp)
    ?
      <View>

        <Text style={style.heading}>OTP</Text>

        <View style={innerStyle.formWrapper}>
          <TextInput maxLength={1} style={innerStyle.otpInput}></TextInput>
          <TextInput maxLength={1} style={innerStyle.otpInput}></TextInput>
          <TextInput maxLength={1} style={innerStyle.otpInput}></TextInput>
          <TextInput maxLength={1} style={innerStyle.otpInput}></TextInput>
        </View>

        <TouchableOpacity style={innerStyle.submitBtn} onPress={handlePress__otp}>
          <Text style={innerStyle.btnText}>Submit</Text>
        </TouchableOpacity>

      </View>
    :
      <Thanks />
  )
}

export default Otp;

const innerStyle = StyleSheet.create({

  submitBtn: {
    backgroundColor:'dodgerblue',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 0,    
  },

  btnText: {
    color:'white',
    textAlign:'center'
  },

  otpInput: {
    borderColor:'transparent',
    borderBottomColor:'grey',
    borderWidth:1,
    marginHorizontal:7
  },

  formWrapper: {
    flexWrap:'wrap',
    flexDirection:'row',
    marginBottom:20
  }

})