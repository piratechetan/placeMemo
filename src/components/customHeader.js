import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
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
} from 'native-base';

const CustomHeader = () => {
  const buttonHandler = () => {
    setSearch(current => !current);
  };
  const navigation = useNavigation();
  return (
    <>
      <Header
        androidStatusBarColor="#0f4c75"
        style={{
          backgroundColor: '#0f4c75',
        }}>
        <Body>
          <Title>PlaceMemo</Title>
        </Body>
        <Right>
          <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => navigation.navigate('Search')}>
            <Feather name="search" style={{color: '#fff'}} size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => navigation.openDrawer()}>
            <Entypo
              name="dots-three-vertical"
              style={{color: '#fff'}}
              size={20}
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
export default CustomHeader;
