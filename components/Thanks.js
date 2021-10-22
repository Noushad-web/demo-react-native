import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import style from '../globalStyle';

const Thanks = ()=> {

  const [isVisible__thank, setIsVisible__thank] = useState(false);
  
  return (
    <View>
      <Button style={style.loginBtn} title='Thank you For submitting'></Button>
    </View>
  )
}

export default Thanks;