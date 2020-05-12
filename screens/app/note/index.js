import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from './ListScreen'
import ListInfoScreen from './ListInfoScreen'
const List  = createStackNavigator()
const ListNavigator = () => {
    return (
        <List.Navigator>
            <List.Screen
                name="List"
                component={ListScreen}
                options={{
                    header:()=> null
                }} />
            <List.Screen
                name="ListInfo"
                component={ListInfoScreen}
                options={{
                    header:()=> null
                }} />
        </List.Navigator>
    );
}

export default ListNavigator;
