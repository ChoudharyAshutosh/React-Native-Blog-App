import React from 'react'
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native'
export default function CreatePost({route, navigation}){
    const arrow='&#8592';
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableHighlight style={styles.arrowContainer} underlayColor={'white'} onPress={()=>{navigation.navigate("Home")}}>
            <Text style={styles.arrow}>{'\u2190'}</Text>
            </TouchableHighlight>
            </View>
            <View style={styles.ButtonContainer}>
            
            <TouchableHighlight underlayColor={"grey"} style={styles.button} onPress={()=>{navigation.navigate('CreateImagePost')}}>
                <Text style={styles.text}>Image</Text>
            </TouchableHighlight>
            
            <TouchableHighlight underlayColor={"grey"} style={styles.button} onPress={()=>{navigation.navigate("CreateTextPost")}}>
                <Text style={styles.text2}>Text</Text>
            </TouchableHighlight>
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
    ButtonContainer:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
        height:100,
        flex:1
    },
    button:{
        color:'black',
        backgroundColor:'#eaf0fa',
        fontSize:300,
        margin:10,
        alignSelf:'center',
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:50,
        paddingRight:50,
    },
    arrow:{
        marginTop:-20,
        fontSize:50, 
        width:27,
        color:'#1a1a1a',
    },
    text:{
        fontSize:18
    },
    text2:{
        fontSize:18,
        marginLeft:8,
        marginRight:8
    },
    arrowContainer:{
        backgroundColor:'white',
        alignSelf:'flex-start'
    },
    header:{
        borderBottomColor:'gray',
        borderBottomWidth:1,
    }
})