import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TextInput} from 'react-native'
import {useDispatch} from 'react-redux'
import { POST_TEXT_POST} from './redux/Post'
export default function CreateTextPost({navigation}){
    const dispatch=useDispatch()
    const savePost=(data)=>{ 
       let post={text:data, image:null, time: new Date()}
        if(data==='')
            alert('Please enter post details')
        else{
            dispatch({type:POST_TEXT_POST, payload:post})
            navigation.navigate('Home')
        }
    }
    const [postData,setPostData]=useState('')
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableHighlight style={styles.arrowContainer} underlayColor={'white'} onPress={()=>{navigation.navigate("CreatePost")}}>
            <Text style={styles.arrow}>{'\u2190'}</Text>
            </TouchableHighlight>
            <Text style={styles.head}>Text</Text>
            <TouchableHighlight underlayColor={"grey"} style={styles.button} onPress={()=>{savePost(postData);}}>
                <Text style={styles.post}>Post</Text>
            </TouchableHighlight>
            </View>
            <View>
                <TextInput onChangeText={TextInputValueHolder=>{setPostData(TextInputValueHolder)}} style={styles.textInput} multiline={true} placeholder='Write content here'></TextInput>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        paddingTop:25,
        backgroundColor:'white'
    },
    header:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
        display:'flex',
        flexDirection:'row',
        paddingBottom:5
    },
    arrowContainer:{
        backgroundColor:'white',
        alignSelf:'flex-start'
    },
    arrow:{
        marginTop:-20,
        fontSize:50, 
        width:27,
        color:'#1a1a1a',
    },
    textInput:{
        fontSize:18,
        marginTop:20,
        padding:10
    },
    head:{
        alignSelf:'flex-start',
        marginLeft:15,
        marginTop:10,
        fontSize:20,
        color:'#4d4d4d'
    },
    button:{
        alignSelf:'stretch',
        backgroundColor:'#d6e0f5',
        marginTop:4,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:30,
        paddingRight:30,
        position:'absolute',
        right:10
    },
    post:{
        fontSize:20,
        color:'#4d4d4d'
    }
})