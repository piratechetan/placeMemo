import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Body, Input, Title, Header, Left, Right} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
const CustomSearch = () => {
  const navigation = useNavigation();
  return (
    <Header
      androidStatusBarColor="#0f4c75"
      style={{
        backgroundColor: '#0f4c75',
      }}>
      <Left>
        <AntDesign
          name="arrowleft"
          style={{color: '#fff'}}
          size={25}
          onPress={() => navigation.navigate('Image')}
        />
      </Left>
      <Body>
        <Title>Search</Title>
      </Body>
      <Right>
        <Entypo name="dots-three-vertical" style={{color: '#fff'}} size={22} />
      </Right>
    </Header>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    margin: 10,
    borderRadius: 12,
    flexDirection: 'row',
  },
  inputIcon: {
    paddingTop: 15,
    paddingHorizontal: 10,
    color: '#fff',
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
  },
});
export default CustomSearch;
