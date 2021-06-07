import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from './components/customHeader';
import Home from './components/Home';
import Slide from './components/slide';
import CustomSlider from './components/customSlide';
import Search from './components/Search';
import CustomSearch from './components/CustomSearch';
import Searchbar from './components/Search';
import CustomSearchSlider from './components/customSearchSlide';
import SearchSlide from './components/SearchSlide';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Image"
        component={Home}
        options={{
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="Slide"
        component={Slide}
        options={{
          header: props => <CustomSlider {...props} />,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: props => <CustomSearch {...props} />,
        }}
      />
      <Stack.Screen
        name="SearchSlide"
        component={SearchSlide}
        options={{
          header: props => <CustomSearchSlider {...props} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
