import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  SectionList,
} from 'react-native';
import EmptyContainer from '../_layout/emptyContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import Snackbar from 'react-native-snackbar';
const STORAGE_KEY = '@storage_data';

const Home = ({navigation}) => {
  let datalist = [];
  const [store, setStore] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  useEffect(() => {
    saveData();
    return () => {};
  }, [currentpage]);
  const saveData = async () => {
    try {
      const {data} = await Axios.get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=true&extras=url_s&page=' +
          currentpage,
      );
      datalist.push(data.photos);
      const details = JSON.stringify(datalist);
      await AsyncStorage.setItem(STORAGE_KEY, details);
      readData();
    } catch (error) {
      Snackbar.show({
        text: 'Something went wrong!',
        textColor: 'red',
        backgroundColor: '#0f4c75',
      });
    }
  };

  const readData = async () => {
    const files = await AsyncStorage.getItem(STORAGE_KEY);
    setStore(JSON.parse(files));
    //   try {
    //     const data = await AsyncStorage.getItem(STORAGE_KEY)
    //     saveData();
    //     const againData = await AsyncStorage.getItem(STORAGE_KEY)
    //     if(data===againData){
    //       setData(JSON.parse(data))
    //     }
    //     else{
    //       setData(JSON.parse(againData))
    //     }

    //   } catch (e) {
    //     console.log('Failed to fetch the data from storage')
    //   }
  };

  const renderItem = ({item}) => (
    <View style={{margin: 2, flexWrap: 'wrap'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Slide', item);
        }}>
        <ImageBackground
          source={{
            uri:
              item.url_s != null || ''
                ? item.url_s
                : 'https://lh3.googleusercontent.com/proxy/QXubC27VsgmBtCn8rGAXRaSe9ssI59djLh4DPgLRADAXI80e8xmclvlbYZ3Ct7o-TIlDDoZw49VNwVF1f0p83CkfD__JAfy-YPQLALKe1o9XhAA',
          }}
          style={styles.image}>
          <Text style={{color: '#fff', backgroundColor: 'black', padding: 5}}>
            {item.title.length <= 15
              ? item.title
              : item.title.slice(0, 15).concat('', '...')}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => {
    return isloading ? (
      <View style={{justifyContent: 'center', alignContent: 'center'}}>
        <EmptyContainer />
      </View>
    ) : null;
  };

  const handleMore = () => {
    setcurrentpage(currentpage + 1);
  };

  const ReturnBack = () => {
    setcurrentpage(currentpage - 1);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={store}
        horizontal
        style={{flex: 1}}
        renderItem={({item}) => (
          <View style={{elevation: 1}}>
            <View style={{backgroundColor: '#0f4c75', elevation: 1}}>
              <Text style={{color: '#fff', alignSelf: 'center', fontSize: 25}}>
                Page {item.page}
              </Text>
            </View>

            <FlatList
              data={item.photo}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        )}
        onScrollEndDrag={handleMore}
      />
    </SafeAreaView>
    // />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 5,
    justifyContent: 'flex-end',
  },
  flatListStyle: {flex: 1},
});

export default Home;
