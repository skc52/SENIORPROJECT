import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button} from "react-native-paper"
import { useDispatch, useSelector } from 'react-redux'
import { sendFollowRequest , unFollow, clearAcceptSuccess, clearSendSuccess, clearUnfollowSuccess } from '../redux/actions'
import {COLORS, FONT, SIZES, SHADOWS} from './Colors'

const Profile = ({navigation, route}) => {
    const {user} = useSelector((state)=>state.auth)
    const {user2, sendReqSuccess, unfollowSuccess, acceptReqSuccess} = useSelector((state)=>state.follow)
    const {profileUser, me} = route.params;
    const dispatch = useDispatch();
    const [btnText, setBtnText] = useState("Follow");

    const followHandler = () => {
            // if do not follow send follow request
        
        if (profileUser.followers.includes(user._id)){
            dispatch(unFollow(user._id));

        }
        else if (profileUser.followRequests.includes(user._id)){

        }
        else{
            // if follows - unfollow
            dispatch(sendFollowRequest(profileUser._id));
        }

        
        
    }
   


    useEffect(()=>{


        // if user != profileUser
            // if user follows profileUser - Unfollow
            // if user does not follow profileUser - Follow
            // if user has already sent request - Request Sent

        //initial 
        console.log("============================")
        if (user._id === profileUser._id){
            console.log("same users")
        }
        else{
            if (profileUser.followers.includes(user._id)){
                setBtnText("Unfollow");
                console.log("Unfollow")
            }
            else if (profileUser.followRequests.includes(user._id)){
                setBtnText("Request Sent");
                console.log(profileUser);
                console.log("Request sent")
            }
            else{
                console.log(profileUser);
                setBtnText("Follow");
                console.log("Follow");
            }
        }

       
        if (user && !user.isActivated){
            navigation.navigate("sendActivate")
        }
        
    },[])

    useEffect(()=>{
        if (sendReqSuccess){
            // TODO clear send req success
            setBtnText("Request Sent")
            dispatch(clearSendSuccess())
        }
        
    }, [sendReqSuccess])

    useEffect(()=>{
        if (unfollowSuccess){
            // TODO unfollow success

            setBtnText("Follow")
            dispatch(clearUnfollowSuccess());
        }
        
    }, [unfollowSuccess])


   
  return (
    <View
    style = {{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    }}

    
>
        <TouchableOpacity style = {{ width: 300,
    height: 300,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",}} >
            <Image
                    source={{uri: profileUser?.avatar?.url}}
                    resizeMode='contain'
                    style= {{ width: "97%",
                    height: "97%",}}
            
          />
      </TouchableOpacity>
    <Text style= {{fontSize:20, margin:20}}>
        {profileUser?.name}
    </Text>

    <Text style= {{fontSize:20, margin:20}}>
        LEVEL - {profileUser?.level}
    </Text>

    <Text style= {{fontSize:20, margin:20}}>
        {profileUser?.followers.length} Followers
    </Text>

    <Text style= {{fontSize:20, margin:20}}>
        {profileUser?.following.length} Following
    </Text>


    {/* the following button will only be visible if it is not your profile */}
    {/* for the button, if you already follow them, it will show unfollow */}

    {user._id === profileUser._id?<Button
        style = {Styles.btn}
        onPress = {()=>{navigation.navigate("updateProfile")}}
    >
        <Text style = {{color:"#fff"}}>Update Profile</Text>

    </Button> :<Button
        style = {Styles.btn}
        onPress = {followHandler}
    >
        <Text style = {{color:"#fff"}}>{btnText}</Text>

    </Button>}
      




    </View>

  )
}

export default Profile

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