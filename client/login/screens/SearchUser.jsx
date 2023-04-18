import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button} from "react-native-paper"
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'

import { getAllUsersSearch } from '../redux/actions'

const SearchUser = ({navigation}) => {
    const {user} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const searchHandler = () => {
        dispatch(getAllUsersSearch(username));
      navigation.navigate("searchResults")

    }
    useEffect(()=>{
        if (user && !user.isActivated){
            navigation.navigate("sendActivate")
        }
        
    },[user])
  return (
    <View
    style = {{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    }}
>
    <Text style= {{fontSize:20, margin:20}}>
            SEARCH
    </Text>
    <View style = {{width:"70%"}}>
            <TextInput
                style = {Styles.input}
                placeholder='Search users...'
                value={username}
                onChangeText={setUsername}
            />

            <TouchableOpacity disabled = {!username} onPress={searchHandler} >
                <Icon name = "search1" size = {30} color = "#980" />
            </TouchableOpacity>  

           
        </View>
    </View>
  )
}

export default SearchUser

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