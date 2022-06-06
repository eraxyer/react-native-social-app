import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import Message from '../screens/Message';
import AddPost from '../screens/AddPost';
import Fav from '../screens/Fav';
import Profile from '../screens/Profile';
import {Svg, Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 27,
          backgroundColor: '#000',
          transform: [{rotate: '-45deg'}],
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Svg
                width="25"
                height="25"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M1.61087 8.05308L9.88182 1.62012L18.1528 8.05308V18.162C18.1528 18.6495 17.9591 19.117 17.6144 19.4617C17.2697 19.8064 16.8022 20 16.3148 20H3.44886C2.96139 20 2.49389 19.8064 2.1492 19.4617C1.80451 19.117 1.61087 18.6495 1.61087 18.162V8.05308Z"
                  stroke={focused ? '#7db9b3' : '#000000'}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M7.12488 20V10.8101H12.6388V20"
                  stroke={focused ? '#7db9b3' : '#000000'}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Svg
                width="25"
                height="25"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M17.8843 12.3576C17.8843 12.8322 17.6958 13.2874 17.3602 13.623C17.0246 13.9586 16.5694 14.1472 16.0948 14.1472H5.35729L1.77814 17.7263V3.40969C1.77814 2.93507 1.96668 2.47988 2.30229 2.14427C2.6379 1.80866 3.09309 1.62012 3.56771 1.62012H16.0948C16.5694 1.62012 17.0246 1.80866 17.3602 2.14427C17.6958 2.47988 17.8843 2.93507 17.8843 3.40969V12.3576Z"
                  stroke={focused ? '#7db9b3' : '#000000'}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{transform: [{rotate: '-45deg'}]}}>
              <Svg
                width="25"
                height="25"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M11.8982 5.88611H9.89819V9.88611H5.89819V11.8861H9.89819V15.8861H11.8982V11.8861H15.8982V9.88611H11.8982V5.88611ZM10.8982 0.886108C5.37819 0.886108 0.898193 5.36611 0.898193 10.8861C0.898193 16.4061 5.37819 20.8861 10.8982 20.8861C16.4182 20.8861 20.8982 16.4061 20.8982 10.8861C20.8982 5.36611 16.4182 0.886108 10.8982 0.886108ZM10.8982 18.8861C6.48819 18.8861 2.89819 15.2961 2.89819 10.8861C2.89819 6.47611 6.48819 2.88611 10.8982 2.88611C15.3082 2.88611 18.8982 6.47611 18.8982 10.8861C18.8982 15.2961 15.3082 18.8861 10.8982 18.8861Z"
                  fill="white"
                />
              </Svg>
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M14.5 0.885986C12.76 0.885986 11.09 1.69599 10 2.97599C8.91 1.69599 7.24 0.885986 5.5 0.885986C2.42 0.885986 0 3.30599 0 6.38599C0 10.166 3.4 13.246 8.55 17.926L10 19.236L11.45 17.916C16.6 13.246 20 10.166 20 6.38599C20 3.30599 17.58 0.885986 14.5 0.885986ZM10.1 16.436L10 16.536L9.9 16.436C5.14 12.126 2 9.27599 2 6.38599C2 4.38599 3.5 2.88599 5.5 2.88599C7.04 2.88599 8.54 3.87599 9.07 5.24599H10.94C11.46 3.87599 12.96 2.88599 14.5 2.88599C16.5 2.88599 18 4.38599 18 6.38599C18 9.27599 14.86 12.126 10.1 16.436Z"
                  fill={focused ? '#7db9b3' : '#000000'}
                  stroke={focused ? '#7db9b3' : ''}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M4.31561 14.2085L4.31327 14.3637L4.3992 14.4929C5.77791 16.5664 8.14112 17.9361 10.8156 17.9361C13.49 17.9361 15.8532 16.5664 17.2319 14.4929L17.3178 14.3637L17.3155 14.2085C17.3053 13.531 16.9566 12.9696 16.4868 12.5301C16.019 12.0926 15.3976 11.7419 14.7433 11.4685C13.4369 10.9226 11.879 10.6361 10.8156 10.6361C9.74729 10.6361 8.18934 10.9225 6.88387 11.4686C6.23012 11.742 5.60955 12.0928 5.14256 12.5305C4.67346 12.9701 4.32582 13.5314 4.31561 14.2085ZM1.31555 10.2361C1.31555 4.99223 5.57169 0.736084 10.8156 0.736084C16.0594 0.736084 20.3156 4.99223 20.3156 10.2361C20.3156 15.4799 16.0594 19.7361 10.8156 19.7361C5.57169 19.7361 1.31555 15.4799 1.31555 10.2361ZM14.3156 6.23608C14.3156 4.29994 12.7517 2.73608 10.8156 2.73608C8.87941 2.73608 7.31555 4.29994 7.31555 6.23608C7.31555 8.17223 8.87941 9.73608 10.8156 9.73608C12.7517 9.73608 14.3156 8.17223 14.3156 6.23608Z"
                  fill={focused ? '#7db9b3' : '#000000'}
                  stroke={focused ? '#7db9b3' : '#000000'}
                />
              </Svg>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 5,
  },
});

export default Tabs;
