import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux'
export default function Home({navigation}) {
  useEffect(()=>{    
    setInterval(()=>{
     setDate(new Date())
    },1000*60)
},[])
  const [date, setDate]=useState('');
  const data=useSelector(state => state)
  const diff_minutes=(date)=>{
    var latestDate=new Date();
    var diff=(latestDate.getTime()-date.getTime())/1000
    diff/=60
    diff= Math.abs(Math.round(diff))
    if(diff>1440)
    return Math.abs(Math.round(diff/1440))+'d'
    else if(diff>60)
    return Math.abs(Math.round(diff/60))+'h'
    else
      return diff+'m'
  }
  const postRender=(posts)=>{
    return  (posts.slice(0).reverse().map((post)=>{
      if(post.image!==null)
        return(
          <View style={styles.post} key={post.time}>
            <Image style={styles.image} source={{uri:post.image}}/>
            <Text style={styles.postText}>{post.text}</Text>
            <Text style={styles.postTime}>{diff_minutes(post.time)}</Text>
            <View style={styles.separater}></View>
          </View>
        )
    else
        return(
          <View style={styles.post} key={post.time}>
            <Text style={styles.postText}>{post.text}</Text>
            <Text style={styles.postTime}>{diff_minutes(post.time)}</Text>
            <View style={styles.separater}></View>
          </View>
        )
    }))
  }
  const renderData=(data)=>{
    if(data.length==0)
      return <Text style={styles.message}> No Post </Text>
    else{
      return(
        postRender(data)
      )
    }
  }
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      {renderData(data)}
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
    backgroundColor: '#eaf0fa',
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
    direction:'ltr',
    backgroundColor:'white',
  },
  button:{
      borderRadius:25,
      backgroundColor:'#eaf0fa'
  },
  message:{marginTop:300, 
    textAlign:'center'
  },
  image:{
  alignSelf:'stretch', 
  height:200,
  marginBottom:5
  },
  postText:{
    marginLeft:20,
    marginRight:20,
    marginBottom:5,
    marginTop:5
  },
  postTime:{
    marginLeft:20,
    marginRight:20,
    marginBottom:5,
    marginTop:5,
    color:'lightgrey'
  },
  separater:{
    height:12,
    backgroundColor:'#eaf0fa'
  },
  post:{
    backgroundColor:'white'
  }
});
