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
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Chatting({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={[
          {
            paddingVertical: 20,
            paddingHorizontal: 24,

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
          },
        ]}>
        <Pressable
          style={styles.backImg}
          onPress={() => {
            navigation.pop();
          }}>
          <Image
            style={styles.iconImg}
            source={{uri: 'https://i.ibb.co/4SPqhpg/Rectangle-281.png'}}
          />
        </Pressable>
        <Text style={{lineHeight: 30, color: 'black', fontSize: 18}}>
          오픈채팅방
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable>
            <Image
              style={[styles.iconImg, {marginRight: 20}]}
              source={{uri: 'https://i.ibb.co/FqbJg3z/Union.png'}}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.iconImg}
              source={{uri: 'https://i.ibb.co/WB4ZTJQ/Union-1.png'}}
            />
          </Pressable>
        </View>
      </View>
      <View style={{flex: 1}}></View>
      <View style={styles.chatting}>
        <Pressable>
          <Image
            style={styles.iconImg}
            source={{uri: 'https://i.ibb.co/yXj2KJj/Group-2351.png'}}
          />
        </Pressable>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TextInput style={styles.chattingInput} />
          <Pressable>
            <Image
              style={styles.iconImg}
              source={{uri: 'https://i.ibb.co/yXj2KJj/Group-2351.png'}}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backImg: {
    width: 18,
    height: 18,
    marginRight: 24,
  },

  iconImg: {
    marginTop: 5,
    width: 18,
    height: 18,
  },

  chatting: {
    width: '100%',
    height: 68,

    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
    backgroundColor: 'white',
  },
  chattingInput: {
    width: '90%',
    height: 42,

    borderColor: '#F4F5F7',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F4F5F7',
  },
});
