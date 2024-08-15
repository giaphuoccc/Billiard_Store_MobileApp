import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BlurView } from '@react-native-community/blur'

import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground:() => (
          <BlurView 
            overlayColor='' 
            blurAmount={15} 
            style={styles.BlurViewStyles} 
          />
        )
    }}>
      <Tab.Screen 
        name = "Home" 
        component= {HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" 
              size={25}
              color={focused? '#D17842' :  '#52555A'}/>
          ),
        }}
      />
      <Tab.Screen 
        name = "Cart" 
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="shopping-basket" 
              size={25}
              color={focused? '#D17842' :  '#52555A'}/>
          ),
        }} 
      />
      <Tab.Screen 
        name = "OrderHistory" 
        component={OrderHistoryScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="file-text-o" 
              size={25}
              color={focused? '#D17842' :  '#52555A'}/>
          ),
        }} 
      />
      <Tab.Screen 
        name = "Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" 
              size={25}
              color={focused? '#D17842' :  '#52555A'}/>
          ),
        }} 
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: 'rgba(12,15,20,0.5)',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparant',
  },

  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export default TabNavigator
