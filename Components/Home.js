import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux'
export default function Home({navigation}) {
  const [data,setData]=useState('')
  const data2=useSelector(state => state)
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
  <Text style={styles.message}> No Post {
  /*This is for degubbing purpose */
  console.log(data2)}</Text>
  </ScrollView>
    <TouchableHighlight style={styles.button} underlayColor={"grey"} onPress={()=>{navigation.navigate('CreatePost')}}>
      <Image style={styles.addimage} source={require("./pngegg.png")}/>
    </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: '#e6e6e6',
    paddingBottom:20,
    maxHeight:700,
    flex:2,
    marginBottom:-10
  },
  addimage:{
    maxHeight:35,
    maxWidth:35,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:25,
  },
  scrollContainer:{
    marginBottom:10,
    alignSelf:'stretch',
    marginTop:55,
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
  },
  button:{
      borderRadius:25
  },
  message:{marginTop:300, 
    textAlign:'center'
}
});
