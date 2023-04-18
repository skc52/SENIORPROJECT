import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAUser } from '../redux/actions'
import {COLORS, FONT, SIZES, SHADOWS} from './Colors'
import IndividualMessageScreen from './IndividualMessageScreen'
const MessageScreen = ({navigation}) => {
    const {users} = useSelector((state)=>state.users)
    const dispatch = useDispatch();
    useEffect(()=>{
      // load all messages for the user
      dispatch(loadAllMessages());
    },[])
  return (
    <View>
        <Text>
            MESSAGES
        </Text>
        <FlatList
                data={users}
                renderItem={({ item }) => (
                    <IndividualMessageScreen
                        user={item}
                        navigation = {navigation}   
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                       
                    </>
                )}
                ListFooterComponent={() => (
                    <>
                    </>
                )}
            />
    </View>
  )
}

export default MessageScreen

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