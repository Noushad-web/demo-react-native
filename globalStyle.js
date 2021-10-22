import { StyleSheet } from "react-native";

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center", 
    padding:0,
    paddingTop:20,
    maxWidth:500,
    borderColor:'black',
    borderWidth: 2,
  },

  btn: {
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 0,
  },

  btnText: {
    color: 'white',
    textAlign: 'center'
  },

  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2196F3'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    width: 250,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'grey',
  },

  loginBtn: {
    backgroundColor:'red',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  }
})

export default style;