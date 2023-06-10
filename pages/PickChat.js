import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

const PickChat = () => {
    <View style={styles.container}>
        <View style={styles.topbox}>
            <View style={styles.navigation}>
              <Text style={styles.titleText}>대화</Text>
            </View>
            <View style={styles.selectBar}>
              <View style={styles.selectBox1}>
                <Text>오픈 채팅</Text>
              </View>
              <View style={styles.selectBox2}>
                <Text>픽챗</Text>
              </View>
            </View>
          </View>
          <ScrollView style={styles.scrollContainer}>
            <SelfChatList/>
          </ScrollView>
          <View style={{height: 68, backgroundColor: 'gray'}}>
          </View>
          <StatusBar style="auto" />
    </View>
}


const styles = StyleSheet.create({
    scrollContainer: {
      height: 800,
      overflow: 'hidden'
    },
    chatTime: {
      paddingTop: 5,
      fontSize: 12,
      color: '#9F9F9F'
    },
    chatData: {
      paddingTop: 5,
      fontSize: 12,
      color: '#9F9F9F'
    },
    chatTitle: {
      fontSize: 14,
      paddingTop: 5,
      fontWeight: 'bold'
    },
    timeText: {
      width: '25%',
      height: '100%',
      alignItems: 'center'
    },
    chatText: {
      width: '25%',
      height: '100%',
    }, 
    chatContainer: {
      width: '80%',
      height: '100%',
      marginLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    profile: {
      width: 50,
      height: 50,
      backgroundColor: '#D9D9D9',
      borderRadius: 8
    },
    selfChat: {
      height: 50,
      marginTop: 20,
      flexDirection: 'row'
    },
    selfChatList: {
      paddingTop: 10,
      paddingLeft: 25,
      paddingRight: 25,
    },
    hideSelfChatList: {
      paddingTop: 10,
      paddingLeft: 25,
      paddingRight: 25,
    },
    taglist: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 50,
      marginTop: 10,
      justifyContent: 'flex-start',
      paddingLeft: 15
    },
    tag: {
      height: 30,
      justifyContent: 'center',
      borderRadius: 30,
      paddingLeft: 15,
      paddingRight: 15,
      marginLeft: 10,
      backgroundColor: '#EEEEEE'
    },
    tagText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#CCCCCC'
    },
    topbox: {
      width: '100%',
      height: 170,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    navigation: {
        flexDirection: 'row',
        width: '100%',
        height: 64,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    selectBox1: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectBox2: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    selectBar: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      marginTop: 10
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      width: '10%'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
    }
  });

export default PickChat;