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

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function OpenChat({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <Image
        source={{
          uri: 'https://i.ibb.co/q5MTFMN/serafima-lazarenko-x-Jbh8m-ZP5tc-unsplash-1.png',
        }}
        style={styles.background}
      />
      <View style={{flex: 1}}>
        <Text
          onPress={() => {
            navigation.pop();
          }}>
          뒤로가기
        </Text>
        <View style={styles.mainBox}>
          <Text style={[styles.fontColor]}>오픈채팅</Text>
          <Text style={[styles.fontColor, {fontSize: 20}]}>
            호그와트 2023 신입생 모임
          </Text>
          <Text style={[styles.fontColor, {marginBottom: 25}]}>
            #신입생 #마법사 #마녀 #호그와트
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.profileImg}
              source={{
                uri: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
              }}
            />
            <View>
              <Text style={[styles.fontColor, {marginBottom: 0}]}>
                헤르미온느
              </Text>
              <Text style={[styles.fontColor, {fontSize: 12}]}>
                204명 참여 | 2023.01.01 개설
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.bottomBtn}
        onPress={() => {
          navigation.navigate('Chatting');
        }}>
        <Text style={styles.bottomBtnText}>채팅 참여하기</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
  },

  mainBox: {
    marginBottom: 45,
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 0,
  },
  profileImg: {
    width: 32,
    height: 32,
    marginRight: 8,

    borderRadius: 8,
    backgroundColor: '#D9D9D9',
  },
  fontColor: {
    marginBottom: 8,
    color: 'white',
    fontSize: 14,
  },

  bottomBtn: {
    width: '100%',
    height: 60,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  bottomBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
