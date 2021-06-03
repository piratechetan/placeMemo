import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const SliderBottom = () => {
    return(
      <Tab.Navigator
      tabBar={(props) => <CustomHeader {...props}/>}
      >
      <Tab.Screen name="Home" component={} 
      
      />
      
    </Tab.Navigator>
    )
}

export default SliderBottom;