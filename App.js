import React, {useState} from 'react';
import { Text, TextInput, View, Button, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import Login from './components/Login';



const App = () => {

  const [text, SetText] = useState('User name');  

  return (
    <View style={styleRoot.wrapper}>
      <Login />
    </View>
  )
}


const styleRoot = StyleSheet.create ({
  wrapper: {
    flex:1
  }
})
export default App;