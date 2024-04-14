import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const {width,height} = Dimensions.get('window')

export default function Webviewscreen() {
    const route = useRoute();
  const { url } = route.params;

  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
        <Pressable style={{width:50,height:50,backgroundColor:'white',position:'absolute',zIndex:1,top:height * 0.05,left:width * 0.03, shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,borderRadius:100,justifyContent:'center',alignItems:'center'}}  onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={28} color="black" /></Pressable>
    <WebView
    source={{ uri: url }}
    style={{ flex: 1 ,width:'100%',height:'100%'}}
  />
  </View>
  )
}