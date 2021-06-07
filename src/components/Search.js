import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import {Text, Input} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Axios from 'axios';
import Snackbar from 'react-native-snackbar';
const Search = ({navigation}) => {
  let cancelToken;
  const [finditem, setfinditem] = useState('');
  const [data, setdata] = useState([]);
  const getSearch = async () => {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel('Canceling the previous req');
      }
      cancelToken = Axios.CancelToken.source();
      const {data} = await Axios.get(
        `https://api.flickr.com/services/rest/?%20method=flickr.photos.search&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&text=${
          finditem == '' ? 'any' : finditem
        }&nojsoncallback=true&extras=url_s`,
        {cancelToken: cancelToken.token},
      );
      setdata(data.photos.photo);
    } catch (error) {
      Snackbar.show({
        text: 'Something went wrong!',
        textColor: 'red',
        backgroundColor: '#0f4c75',
      });
    }
  };

  useEffect(() => {
    getSearch();
    return () => {};
  }, [finditem]);

  const renderItem = ({item}) => (
    <View style={{margin: 2, flexWrap: 'wrap'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchSlide', item);
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

  return (
    <View>
      <View
        style={{
          backgroundColor: '#0f4c75',
          elevation: 1,
        }}>
        <View style={styles.input}>
          <TouchableOpacity onPress={() => getSearch()}>
            <Feather name="search" size={25} style={styles.inputIcon} />
          </TouchableOpacity>

          <Input
            placeholder="What You want to search"
            placeholderTextColor="grey"
            style={{
              color: 'black',
              backgroundColor: '#CAD5E2',
              borderTopRightRadius: 11,
              borderBottomRightRadius: 11,
            }}
            value={finditem}
            onChangeText={text => setfinditem(text)}
          />
        </View>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{margin: 2}}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'row',
    backgroundColor: '#CAD5E2',
  },
  inputbar: {},
  inputIcon: {
    paddingTop: 13,
    paddingHorizontal: 10,
  },
  image: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 5,
    justifyContent: 'flex-end',
  },
  flatListStyle: {flex: 1},
});

export default Search;
