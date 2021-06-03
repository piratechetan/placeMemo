import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,FlatList,Dimensions,TouchableOpacity,Image,ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'
const STORAGE_KEY = '@storage_data'

const Home = ({navigation}) => {
    const [data, setData] = useState("");
  const saveData = async () => {
    const {data} = await Axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=100&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s');
    const details = JSON.stringify(data.photos.photo);
     await AsyncStorage.setItem(STORAGE_KEY, details)
    console.log('Data successfully saved')
  } 

const readData = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY)
    if (data !== null) {
      setData(JSON.parse(data))
    }
  } catch (e) {
    console.log('Failed to fetch the data from storage')
  }
}
    
useEffect(() => {
  readData()
}, [])

const renderItem = ({ item }) => (

    <View style={{margin:2,flexWrap:'wrap'}}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Slide',item)}}>
        <ImageBackground source={{uri:item.url_s!=null || "" ? item.url_s : 'https://lh3.googleusercontent.com/proxy/QXubC27VsgmBtCn8rGAXRaSe9ssI59djLh4DPgLRADAXI80e8xmclvlbYZ3Ct7o-TIlDDoZw49VNwVF1f0p83CkfD__JAfy-YPQLALKe1o9XhAA'}} style={styles.image}>
      <Text style={{color:'#fff',backgroundColor:'black',padding:5}}>{item.title.length <= 15? item.title : item.title.slice(0,15).concat('','...')}</Text>
    </ImageBackground>
      </TouchableOpacity>
       
     </View>
  );

  return (
    <SafeAreaView>
      <View>
      <FlatList
     data={data}
     numColumns={2}
     showsVerticalScrollIndicator={false}
     style={{margin:2}}
     renderItem={renderItem}
     />
      </View>
    </SafeAreaView>
      
      

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width:Dimensions.get('screen').width/2,
    height:Dimensions.get('screen').height/5,
    justifyContent:'flex-end'



},
flatListStyle: { flex: 1,
},
});

export default Home;