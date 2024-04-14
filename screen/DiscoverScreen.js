import React, { useEffect, useState } from 'react'
import { View,Text, SafeAreaView, StatusBar, Pressable, StyleSheet, ScrollView, Image, Modal, TouchableOpacity, Linking, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';


const API_KEY = 'YOUR-API-KEY'; 
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR-API-KEY';
const API_URL2 = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR-API-KEY';
const API_URL3 = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=YOUR-API-KEY';
const API_URL4 = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=YOUR-API-KEY';
const API_URL5 = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR-API-KEY';

const DEFAULT_COUNTRY = 'tr';


export default function DiscoverScreen () {
  const [topleft,settopleft] = useState(false);
  const [News, setNews] = useState([]);
  const [tecnews,settecnews] = useState([]);
  const [spornews,setspornews] = useState([]);
  const [busnews,setbusnews] = useState([])
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
          const response5 = await axios.get(API_URL5, {
            params: {
              "X-Api-Key": API_KEY,
              country: DEFAULT_COUNTRY,
              
            },
          });
        setbusnews(response5.data.articles.slice(0,5))
        setspornews(response4.data.articles.slice(0, 5))
        settecnews(response3.data.articles.slice(0, 5))
        setNews(response2.data.articles.slice(0,5))
        sethomefirstnews(response.data.articles[5])
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
    return (
      <SafeAreaView style={{backgroundColor: 'white',flex: 1}}>
      <View style={{flexDirection: 'column'}}>
      <View style={styles.topleftbut}>
          <Pressable onPress={() => settopleft(true)}>
      <Text><AntDesign name="menuunfold" size={30} color="black" /></Text>
      </Pressable>
        </View>


        <Modal visible={topleft}>
       <View style={styles.topleftbut}>
       <Pressable onPress={() => settopleft(false)} style={{width: 50,height: 50,borderRadius: 100,backgroundColor: 'black',opacity: 0.6,alignItems: 'center',justifyContent:'center'}}>
      <Text><AntDesign name="menuunfold" size={28} color="white" /></Text>
      </Pressable>
        </View>
       
       </Modal>

       <View style={{marginTop: 120,marginLeft: '4%'}}>
        <Text style={{fontSize: 40,fontWeight: 700}}>Discover</Text>
        <Text style={{fontWeight: 600,opacity: 0.7}}>News from all over the world</Text>
    
       </View>

      </View>
      
      <View>
        <View style={{width: '100%',height: 30}}>
          
        </View>
       
       <View style={{alignItems: 'center'}}>
          <View style={{borderBottomColor: 'black',borderBottomWidth: 2,width: '90%',height:30,opacity: 0.4}}>
            <Text style={{textAlign: 'center',fontSize: 20,fontWeight: 600}}>Discover</Text>
          </View>
           </View>



        <ScrollView >

          <View style={{marginLeft: 20}}>
            <Text style={{marginTop: 10,fontSize: 20,fontWeight: 700}}>Spor</Text>
           
           {spornews.map(item => 
             <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
             <View style={{flexDirection: 'row',marginTop:20,overflow: 'hidden',width: '95%'}} key={item.id}>
               
                   
              
             <View style={{width: 80,borderRadius:10,backgroundColor:'black',height: 80,overflow:'hidden',}}>
                <Image
             source={{ uri: item.urlToImage}}
             style={{width: '100%',height:'100%'}}
             resizeMode="cover" 
             />
             </View>
             <View >
              
             <Text style={{paddingLeft: 10,fontWeight: 600}}>{item.title.slice(0,-8)}. . .</Text>
             <Text style={{paddingLeft: 10,fontWeight: 600,opacity: 0.4,marginTop: 5}}>{item.author}</Text>
             <Text style={{paddingLeft: 10,opacity: 0.4}}>{item.publishedAt.slice(0,10)}</Text>
             </View>
           
            </View>
            </TouchableOpacity>
           )}
          </View>





          <View style={{marginLeft: 20}}>
            <Text style={{marginTop: 10,fontSize: 20,fontWeight: 700}}>Technology</Text>
           
           {tecnews.map(item => 
              <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
              <View style={{flexDirection: 'row',marginTop:20,overflow: 'hidden',width: '95%'}} key={item.id}>
                
                    
               
              <View style={{width: 80,borderRadius:10,backgroundColor:'black',height: 80,overflow:'hidden',}}>
                 <Image
              source={{ uri: item.urlToImage}}
              style={{width: '100%',height:'100%'}}
              resizeMode="cover" 
              />
              </View>
              <View >
               
              <Text style={{paddingLeft: 10,fontWeight: 600}}>{item.title.slice(0,-8)}. . .</Text>
              <Text style={{paddingLeft: 10,fontWeight: 600,opacity: 0.4,marginTop: 5}}>{item.author}</Text>
              <Text style={{paddingLeft: 10,opacity: 0.4}}>{item.publishedAt.slice(0,10)}</Text>
              </View>
            
             </View>
             </TouchableOpacity>
           )}
          </View>


          <View style={{marginLeft: 20}}>
            <Text style={{marginTop: 10,fontSize: 20,fontWeight: 700}}>General</Text>
           
           {News.map(item => 
             <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
             <View style={{flexDirection: 'row',marginTop:20,overflow: 'hidden',width: '95%'}} key={item.id}>
               
                   
              
             <View style={{width: 80,borderRadius:10,backgroundColor:'black',height: 80,overflow:'hidden',}}>
                <Image
             source={{ uri: item.urlToImage}}
             style={{width: '100%',height:'100%'}}
             resizeMode="cover" 
             />
             </View>
             <View >
              
             <Text style={{paddingLeft: 10,fontWeight: 600}}>{item.title.slice(0,-8)}. . .</Text>
             <Text style={{paddingLeft: 10,fontWeight: 600,opacity: 0.4,marginTop: 5}}>{item.author}</Text>
             <Text style={{paddingLeft: 10,opacity: 0.4}}>{item.publishedAt.slice(0,10)}</Text>
             </View>
           
            </View>
            </TouchableOpacity>
           )}
          </View>
            
          <View style={{marginLeft: 20}}>
            <Text style={{marginTop: 10,fontSize: 20,fontWeight: 700}}>business</Text>
           
           {busnews.map(item => 
           <TouchableOpacity onPress={() => navigation.navigate('Webview',{ url: item.url })}>
              <View style={{flexDirection: 'row',marginTop:20,overflow: 'hidden',width: '95%'}} key={item.id}>
                
                    
               
              <View style={{width: 80,borderRadius:10,backgroundColor:'black',height: 80,overflow:'hidden',}}>
                 <Image
              source={{ uri: item.urlToImage}}
              style={{width: '100%',height:'100%'}}
              resizeMode="cover" 
              />
              </View>
              <View >
               
              <Text style={{paddingLeft: 10,fontWeight: 600}}>{item.title.slice(0,-8)}. . .</Text>
              <Text style={{paddingLeft: 10,fontWeight: 600,opacity: 0.4,marginTop: 5}}>{item.author}</Text>
              <Text style={{paddingLeft: 10,opacity: 0.4}}>{item.publishedAt.slice(0,10)}</Text>
              </View>
            
             </View>
             </TouchableOpacity>
           )}
          </View>
          <View style={{height: 500}}></View>
        </ScrollView>


      </View>
      

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
   marginLeft: '4%'
  }
});
