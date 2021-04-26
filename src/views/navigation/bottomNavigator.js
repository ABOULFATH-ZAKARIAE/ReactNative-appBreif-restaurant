import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View,Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{padding:5}}>
              <View style={{position:'absolute', height:30, width:30,borderRadius:15,backgroundColor: COLORS.secondary,right:15,bottom:15,alignItems:'center',
              justifyContent:'center', zIndex:2000
              }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>4</Text>
              </View>
              <Icon name="shopping-cart" color={color} size={28} />
            </View>
            
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;