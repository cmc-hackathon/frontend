import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import Home from './Home';
import Mypage from './Mypage';
import Chat from './Chat';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(): JSX.Element {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{title: '홈', headerShown: false}}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{title: '채팅', headerShown: false}}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{title: '마이페이지', headerShown: false}}
        name="Mypage"
        component={Mypage}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomImg: {
    width: 72,
    height: 62,
  },
});
