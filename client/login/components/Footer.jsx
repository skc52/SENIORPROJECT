import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getAUser, loadUser} from '../redux/actions'

const Footer = () => {
    const navigation = useNavigation();
    const {user} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
  return (
    <View
        style = {{
            padding:30,
            backgroundColor:"#fff",
            flexDirection:"row",
            justifyContent:"space-around"
        }}
    >
        <TouchableOpacity onPress={()=>navigation.navigate("changePw")}>
            <Icon name = "home" size = {30} color = "#980" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            dispatch(loadUser());
            navigation.navigate("profile", {profileUser:user, me:true})}}>
            <Icon name = "profile" size = {30} color = "#980" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("followRequests")}>
            <Icon name = "pluscircle" size = {30} color = "#980" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("settings")}}>
            <Icon name = "setting" size = {30} color = "#980" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("searchUser")} >
            <Icon name = "search1" size = {30} color = "#980" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("conversationList")} >
            <Icon name = "wechat" size = {30} color = "#980" />
        </TouchableOpacity>    
    </View>
  )
}

export default Footer