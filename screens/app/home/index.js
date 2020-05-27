import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import FilmInfoScreen from './FilmInfoScreen'
const Home  = createStackNavigator()
const HomeNavigator = () => {
    return (
        <Home.Navigator>
            <Home.Screen
                name="Home"
                component={HomeScreen}
                options={{

                }} />
            <Home.Screen
                name="FilmInfo"
                component={FilmInfoScreen}
                options={{

                }} />
        </Home.Navigator>
    );
}

export default HomeNavigator;