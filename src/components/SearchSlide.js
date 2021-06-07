import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

const SearchSlide = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: route.params.url_s}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    marginVertical: 0,
  },
});

export default SearchSlide;
