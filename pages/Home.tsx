/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {homeDatas} from '../utils/HomeData';

export default function Home({navigation}: any): JSX.Element {
  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <View style={styles.container}>
      <Text style={styles.logo}>App name</Text>
      <Text style={[styles.logoSub, {marginBottom: 8}]}>마법사의 돌님,</Text>
      <Text style={[styles.logoSub, {marginBottom: 20}]}>
        해리포터 월드에 온 것을 환영합니다.
      </Text>
      <View
        style={{
          width: '100%',
          height: 92,
          paddingLeft: 24,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: 30,
            justifyContent: 'center',
            overflow: 'hidden',

            borderRadius: 10,
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', fontSize: 16}}>서비스명</Text>
          <Text style={{color: 'black', fontSize: 16}}>사용법 보러가기!</Text>
          <View
            style={{
              width: 232,
              height: 232,

              position: 'absolute',
              right: -20,

              borderRadius: 232,
              backgroundColor: '#AEB4BF',
            }}
          />
        </View>
      </View>

      <View style={styles.bottomSlider}>
        <View style={styles.sliderTop}>
          <Text style={styles.sliderTopText}>오픈 채팅방</Text>
        </View>
        <View style={styles.sliderMiddle}>
          <Text style={{color: '#818080'}}>총 108개</Text>
        </View>
        <ScrollView
          style={styles.sliderBottom}
          showsVerticalScrollIndicator={false}>
          {homeDatas.map((data: any, idx: number) => {
            return (
              <Pressable
                key={idx}
                style={styles.sliderBottomChatting}
                onPress={() => {
                  navigation.navigate('OpenChat');
                }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 3,
                      color: 'black',
                      fontSize: 14,
                      fontWeight: '700',
                    }}>
                    {data.title}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={{uri: data.image}}
                      style={{
                        width: 16,
                        height: 16,
                        marginRight: 6,

                        borderRadius: 5,
                        backgroundColor: '#D9D9D9',
                      }}
                    />

                    <Text
                      style={{
                        color: '#A3A3A3',
                        fontSize: 12,
                        fontWeight: '400',
                      }}>
                      {data.writer}
                    </Text>
                  </View>
                </View>
                <Image source={{uri: data.image}} style={styles.image} />
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939',
  },
  logo: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 24,

    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
  logoSub: {
    paddingHorizontal: 24,
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  bottomSlider: {
    width: '100%',
    height: '52%',

    position: 'absolute',
    bottom: 0,

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },

  sliderTop: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 24,

    justifyContent: 'center',
  },
  sliderTopText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },

  sliderMiddle: {
    height: 20,
    marginVertical: 20,
    paddingHorizontal: 24,
  },

  sliderBottom: {
    height: '100%',
    backgroundColor: 'white',
  },
  sliderBottomChatting: {
    width: '100%',
    height: 86,
    paddingHorizontal: 24,

    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 67,
    height: 67,

    position: 'absolute',
    right: 24,

    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
});
