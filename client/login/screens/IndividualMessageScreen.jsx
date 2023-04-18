import { View, Text } from 'react-native'
import React from 'react'

const IndividualMessageScreen = () => {
  return (
    <View style = {{
        display:flex,
        flexDirection:'column',
        width:"90%",
        height:"20px",
        marginTop:"5px",
    }}>
      <Text>Name</Text>
      <Text>LastMessage</Text>
    </View>
  )
}

export default IndividualMessageScreen