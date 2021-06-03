import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CustomSlider from '../components/customSlide';
import Slide from './slide'
const Stack = createStackNavigator();
import {useNavigation} from '@react-navigation/native'

const SliderStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
           
        }}>
            <Stack.Screen name="Slider" component={Slide} options={{
                header: (props) => <CustomSlider {...props}/>,
                headerTransparent:true
                
            }}
            />
        </Stack.Navigator>
    )
}

export default SliderStack;