import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from './components/customHeader'
import Home from './components/Home';
import Slide from './components/slide';
import CustomSlider from './components/customSlide';

const Stack = createStackNavigator();


const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
           
        }}>
            <Stack.Screen name="Image" component={Home} options={{
                header: (props) => <CustomHeader {...props} />
            }}/>
            <Stack.Screen name="Slide" component={Slide} options={{
                header: (props) => <CustomSlider {...props}/>,
                headerTransparent:true
                
            }}
            />
        </Stack.Navigator>
    )
}

export default MainStack;