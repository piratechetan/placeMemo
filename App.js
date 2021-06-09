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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainStack from './src/mainStack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          width: 70,
          backgroundColor: '#0f4c75',
        }}
        drawerContentOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'grey',
        }}
        sw>
        <Drawer.Screen
          name="Home"
          component={MainStack}
          options={{
            swipeEnabled: false,
            drawerIcon: ({color}) => {
              return <AntDesign name="home" size={30} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 5,
  },
  flatListStyle: {flex: 1},
});

export default App;
