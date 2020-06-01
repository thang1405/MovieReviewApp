import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ItemNoti from './ItemNoti'
import NotificationScreen from './NotificationScreen'

const Noti  = createStackNavigator()

const NotiNavigator = () => {
    return (
        <Noti.Navigator>
            <Noti.Screen
                name="Noti"
                component={NotificationScreen}
                options={{
                    // header:()=> null
                }} />
            <Noti.Screen
                name="Item"
                component={ItemNoti}
                options={{
                    // header:()=> null
                }} />
        </Noti.Navigator>
    );
}

export default NotiNavigator;
