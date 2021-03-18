import React,{useState} from 'react'
import {Text , View, StyleSheet, TouchableHighlight, TextInput, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from "expo-image-picker";
export default function CreateImagePost({navigation}){
    const [image, setImage]=useState(null);
    const [label, setLabel]=useState("Choose Image")
    const imagePicker=async ()=>{
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result)
        if(!result.cancelled){
            setImage(result.uri)
            setLabel("Update Image")
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableHighlight style={styles.arrowContainer} underlayColor={'white'} onPress={()=>{navigation.navigate("CreatePost")}}>
            <Text style={styles.arrow}>{'\u2190'}</Text>
            </TouchableHighlight>
            <Text style={styles.head}>Image</Text>
            <TouchableHighlight underlayColor={"grey"} style={styles.button} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.post}>Post</Text>
            </TouchableHighlight>
            </View>
            <View>
                <TextInput style={styles.textInput} multiline={true} placeholder='Write content here'></TextInput>
                {image &&  <Image source={{uri:image}} style={styles.image}/>}
                <TouchableOpacity style={styles.addImage} activeOpacity={0.5} onPress={()=>imagePicker()}>
                    <Text>{label}</Text>
                </TouchableOpacity>
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
    },image:{
        alignSelf:'stretch', 
        height:200
    },
    addImage:{
        color:'black',
        backgroundColor:'#e6e6e6',
        fontSize:300,
        margin:10,
        alignSelf:'center',
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:50,
        paddingRight:50,
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
        backgroundColor:'lightgrey',
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