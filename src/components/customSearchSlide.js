import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {
  Header,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  Input,
  Container,
  Left,
} from 'native-base';

const CustomSearchSlider = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header translucent transparent>
        <Left>
          <TouchableOpacity
            style={{marginLeft: 15, marginTop: 20}}
            onPress={() => navigation.navigate('Search')}>
            <AntDesign name="arrowleft" style={{color: '#fff'}} size={25} />
          </TouchableOpacity>
        </Left>
        <Right>
          <TouchableOpacity
            style={{marginRight: 15, marginBottom: 1}}
            onPress={() => navigation.navigate('Image')}>
            <EvilIcons name="star" style={{color: '#fff'}} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}>
            <Entypo
              name="dots-three-vertical"
              style={{color: '#fff'}}
              size={25}
            />
          </TouchableOpacity>
        </Right>
      </Header>
    </>
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
export default CustomSearchSlider;
