import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button} from "react-native-paper"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions'


const Settings = ({navigation}) => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
        navigation.navigate("login")
    }
    const updateProfileHandler = () => {
        
    }

    const deleteProfileHandler = () => {

    }

  return (
    <View style = {{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    }}
    >
      <TouchableOpacity onPress={()=>navigation.navigate("changePw")}>
                <Text
                    style = {{
                        color:"#900",
                        height:30,
                        margin:20,
                        textAlign:"center"
                    }}
                >
                    Change Password
                </Text>
            </TouchableOpacity>
            <Button
            
                style = {Styles.btn}
                onPress = {logoutHandler}
            >
                <Text style = {{color:"#fff"}}>Log Out</Text>
            </Button>
            <Button
            
            style = {Styles.btn}
            onPress = {updateProfileHandler}
        >
            <Text style = {{color:"#0ff"}}>Update Profile</Text>
        </Button>
            <Button
            
                style = {Styles.btn}
                onPress = {deleteProfileHandler}
            >
                <Text style = {{color:"#ff0"}}>Delete Account</Text>
            </Button>

    </View>
  )
}

export default Settings

const Styles = StyleSheet.create({
   
    
    input:{
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#b5b5b5",
        padding:10,
        paddingLeft:15,
        marginVertical:15,
        fontSize:15

    }
    ,
    btn:{
        backgroundColor:"#900",
        padding:5,
    
    }
})