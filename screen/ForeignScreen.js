
import React, { useEffect, useState } from 'react'
import { View,Text, SafeAreaView, StatusBar, StyleSheet,Image, Pressable, ScrollView, Modal, TouchableOpacity, Linking, ActivityIndicator, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const {width,height} = Dimensions.get('window')

const API_KEY = 'YOUR-API-KEY'; 
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR-API-KEY';
const API_URL2 = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=YOUR-API-KEY';
const API_URL3 = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=YOUR-API-KEY';
const API_URL4 = 'https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=YOUR-API-KEY';

const DEFAULT_COUNTRY = 'tr';

export default function HomeScreen() {
  const [topleft,settopleft] = useState(false);
  const [News, setNews] = useState([]);
  const [tecnews,settecnews] = useState([]);
  const [spornews,setspornews] = useState([])
  const [homefirstnews,sethomefirstnews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: {
            "X-Api-Key": API_KEY,
            country: DEFAULT_COUNTRY,
            
          },
        });
        const response2 = await axios.get(API_URL2, {
            params: {
              "X-Api-Key": API_KEY,
              country: DEFAULT_COUNTRY,
              
            },
          });
          const response3 = await axios.get(API_URL3, {
            params: {
              "X-Api-Key": API_KEY,
              country: DEFAULT_COUNTRY,
              
            },
          });
          const response4 = await axios.get(API_URL4, {
            params: {
              "X-Api-Key": API_KEY,
              country: DEFAULT_COUNTRY,
              
            },
          });
        console.log(response.data.articles[1])
        setspornews(response4.data.articles)
        settecnews(response3.data.articles)
        setNews(response2.data.articles)
        sethomefirstnews(response.data.articles[0])
          setLoading(false);
        } catch (error) {
          console.error('Error fetching news:', error);
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
 if (loading == true){
   return(
    <View style={{   flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
        <ActivityIndicator size="large" color="#000" />
    </View>
   )
 }
 
 
 const linkurl = homefirstnews.url
 const imageUrl = homefirstnews.urlToImage
 const firstnewsdiscription = homefirstnews.title
  return (
    <SafeAreaView style={{backgroundColor: '#fff',flex: 1}}>
           <ScrollView>
    <View style={styles.firstNews}>
      <View style={styles.topleftbut}>
      <Pressable onPress={() => settopleft(true)} style={{width: 50,height: 50,borderRadius: 100,backgroundColor: 'black',opacity: 0.6,alignItems: 'center',justifyContent:'center'}}>
      <Text><AntDesign name="menuunfold" size={28} color="white" /></Text>
      </Pressable>
      </View>

      <View style={styles.firstNewsdescription}>
        <Text style={{color: 'white',fontSize: 20,fontWeight: 600}} wordLimit={1}>{firstnewsdiscription}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: linkurl })}>
           <Text style={{color: 'white',fontSize: 19,opacity: 0.8,marginTop: 10}}>Read more <AntDesign name="right" size={15} color="white" /></Text>
        </TouchableOpacity>
      </View>

    <Image
      source={{ uri: imageUrl }}
      style={styles.firstNewsimage}
      resizeMode="cover"  
    />
    </View>
     
     
     
     
     
    <Modal visible={topleft}>
       <View style={styles.topleftbut}>
       <Pressable onPress={() => settopleft(false)} style={{width: 50,height: 50,borderRadius: 100,backgroundColor: 'black',opacity: 0.6,alignItems: 'center',justifyContent:'center'}}>
      <Text><AntDesign name="menuunfold" size={28} color="white" /></Text>
      </Pressable>
        </View>
       
       </Modal>


     
       <View style={styles.secondNewspart}>
        <View style={{width: '100%',height: 70,overflow: 'hidden',flexDirection: 'row',paddingTop: '5%'}}>
          <Text style={{marginLeft: '8%',fontSize: 19,fontWeight: 700}}>Turkish News</Text>
          <Text style={{position: 'absolute',right: 0,marginRight: '5%',marginTop: '6%',opacity: 0.8,fontWeight: 600}}>More</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {News.map(item => 
          

            <View  style={styles.secondsNews}>
              <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
              <View style={{width: '100%',height: 150,borderRadius: 25,backgroundColor: 'black'}}>
              <Image 
              source={{ uri: item.urlToImage}}
              style={styles.secondsNewsimage}
              resizeMode="cover" 
              />
              </View>
              <Text style={{padding: 10,fontSize: 14,fontWeight: 700}}>{item.title}</Text>
              <Text style={{paddingLeft: 10}}>{item.author}</Text>
              <Text style={{paddingLeft: 10}}>{item.publishedAt.slice(0,10)}</Text>
              <Text style={{paddingLeft: 10,marginTop: 5}}>Read more</Text>
              </TouchableOpacity>
            </View>
            
          )}
         </ScrollView>
       </View>
       <View style={styles.secondNewspart}>
        <View style={{width: '100%',height: 70,overflow: 'hidden',flexDirection: 'row',paddingTop: '5%'}}>
          <Text style={{marginLeft: '8%',fontSize: 19,fontWeight: 700}}>German News</Text>
          <Text style={{position: 'absolute',right: 0,marginRight: '5%',marginTop: '6%',opacity: 0.8,fontWeight: 600}}>More</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {tecnews.map(item => 
          

          <View  style={styles.secondsNews}>
          <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
          <View style={{width: '100%',height: 150,borderRadius: 25,backgroundColor: 'black'}}>
          <Image 
          source={{ uri: item.urlToImage}}
          style={styles.secondsNewsimage}
          resizeMode="cover" 
          />
          </View>
          <Text style={{padding: 10,fontSize: 14,fontWeight: 700}}>{item.title}</Text>
          <Text style={{paddingLeft: 10}}>{item.author}</Text>
          <Text style={{paddingLeft: 10}}>{item.publishedAt.slice(0,10)}</Text>
          <Text style={{paddingLeft: 10,marginTop: 5}}>Read more</Text>
          </TouchableOpacity>
        </View>
            
          )}
         </ScrollView>
       </View>
       <View style={styles.secondNewspart}>
        <View style={{width: '100%',height: 70,overflow: 'hidden',flexDirection: 'row',paddingTop: '5%'}}>
          <Text style={{marginLeft: '8%',fontSize: 19,fontWeight: 700}}>Russian News</Text>
          <Text style={{position: 'absolute',right: 0,marginRight: '5%',marginTop: '6%',opacity: 0.8,fontWeight: 600}}>More</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {spornews.map(item => 
          

          <View  style={styles.secondsNews}>
          <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
          <View style={{width: '100%',height: 150,borderRadius: 25,backgroundColor: 'black'}}>
          <Image 
          source={{ uri: item.urlToImage}}
          style={styles.secondsNewsimage}
          resizeMode="cover" 
          />
          </View>
          <Text style={{padding: 10,fontSize: 14,fontWeight: 700}}>{item.title}</Text>
          <Text style={{paddingLeft: 10}}>{item.author}</Text>
          <Text style={{paddingLeft: 10}}>{item.publishedAt.slice(0,10)}</Text>
          <Text style={{paddingLeft: 10,marginTop: 5}}>Read more</Text>
          </TouchableOpacity>
        </View>
            
          )}
         </ScrollView>
       </View>
       </ScrollView>



      
       <StatusBar  translucent
      backgroundColor="transparent"
      barStyle="dark-content" />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topleftbut: {
   position: 'absolute',
   zIndex: 2,
   top: 0,
   left: 0,
   marginTop: '10%',
   marginLeft: '4%',
  
  },
 firstNews: {
  width: '100%',
  height: height * 0.5,

  overflow: 'hidden',
  borderBottomLeftRadius: 34,
  borderBottomRightRadius: 34,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
 },
 firstNewsimage: {
  width: '100%',
  height: '100%',
  
 },
 firstNewsdescription: {
  position: 'absolute',
  backgroundColor:'black',
  width: '90%',
  
  overflow: 'hidden',
  opacity:0.7,
  borderTopRightRadius: 25,
  borderBottomRightRadius: 25,
  zIndex: 1,
  bottom: 0,
  marginBottom: '7%',
  padding: '6%'
 },
 secondNewspart: {
  width: '100%',
  height: 450,
  overflow: 'hidden'
 },
 secondsNews: {
  width: 250,
 
  overflow: 'hidden',
  paddingLeft: 20,
  marginLeft: 10
 },
 secondsNewsimage: {
  width: '100%',
  height: '100%',
  borderRadius: 20,
  
 }
});
