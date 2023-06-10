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
      {/* {bottomRoutes.map((data: any, idx: number) => {
        return (
          <Tab.Screen
            options={{title: data.title, headerShown: false}}
            name={data.name}
            component={data.component}
          />
        );
      })} */}
      <Tab.Screen
        options={{
          title: '홈',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 68,
          },
          tabBarIcon: ({focused}: any) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/home_act.png')
                    : require('../assets/home_none.png')
                }
                style={styles.bottomImg}
              />
            );
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: '채팅',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 68,
          },
          tabBarIcon: ({focused}: any) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/home_act.png')
                    : require('../assets/chat_none.png')
                }
                style={styles.bottomImg}
              />
            );
          },
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          title: '마이페이지',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 68,
          },
          tabBarIcon: ({focused}: any) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/home_act.png')
                    : require('../assets/mypage_none.png')
                }
                style={styles.bottomImg}
              />
            );
          },
        }}
        name="Mypage"
        component={Mypage}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomImg: {
    width: 52,
    height: 52,
  },
});

// const bottomRoutes = [
//   {
//     title: '홈',
//     name: 'Home',
//     component: Home,
//     act: require(''),
//     none: require(''),
//   },
//   {
//     title: '채팅',
//     name: 'Chat',
//     component: Chat,
//   },
//   {
//     title: '마이페이지',
//     name: 'Mypage',
//     component: Mypage,
//   },
// ];
