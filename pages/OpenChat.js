import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';




const SelfChatList = () => {

  const homeDatas = [
    {
      id: 1,
      title: '대화방 1',
      text: '대화내용1',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
      time: '오전 10:58'
    },
    {
      id: 2,
      title: '대화방 2',
      text: '대화내용2',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
        time: '오전 11:00'
    },
    {
      id: 3,
      title: '대화방 3',
      text: '대화내용3',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
      time: '오전 11:03'
    },
    {
      id: 4,
      title: '대화방 4',
      text: '대화내용4',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
      time: '오전 11:05'
    },
  ];

  


  return (
    <View style={styles.selfChatList}>
      <Text style={{fontSize: 16}}>내가 만든 대화방</Text>
        {homeDatas.map((data, idx) => {
          return (
            <Pressable>
              <View style={styles.selfChat}>
                <Image style={styles.profile}></Image>
                  <View style={styles.chatContainer}>
                    <View style={styles.chatText}>
                      <Text style={styles.chatTitle}>{data.title}</Text>
                      <Text style={styles.chatData}>{data.text}</Text>
                    </View>
                    <View style={styles.timeText}>
                      <Text style={styles.chatTime}>{data.time}</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
                  )
                })}
          </View>
  )
}

const PartChatList = () => {

  const homeDatas = [
    {
      id: 1,
      title: '대화방 1',
      text: '대화내용1',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
      time: '오전 10:58'
    },
    {
      id: 2,
      title: '대화방 2',
      text: '대화내용2',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
        time: '오전 11:00'
    },
    {
      id: 3,
      title: '대화방 3',
      text: '대화내용3',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
      time: '오전 11:03'
    },
    {
      id: 4,
      title: '대화방 4',
      text: '대화내용4',
      image:
        'https://www.google.com/url?sa=i&url=http%3A%2F%2Fluxblock.co.kr%2Farticle%2F%25EC%259E%2591%25ED%2592%2588-%25EB%25BD%2590%25EB%2582%25B4%25EA%25B8%25B0%2F8%2F6%2F&psig=AOvVaw1dewmqjhaWex4TBvzlpBMd&ust=1686473239756000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDk48WouP8CFQAAAAAdAAAAABAE',
      time: '오전 11:05'
    },
  ];

  


  return (
    <View style={styles.selfChatList}>
    <Text style={{fontSize: 16}}>참여하고 있는 채팅</Text>
      {homeDatas.map((data, idx) => {
          return (
            <Pressable>
              <View style={styles.selfChat}>
                <Image style={styles.profile}></Image>
                <View style={styles.chatContainer}>
                  <View style={styles.chatText}>
                    <Text style={styles.chatTitle}>{data.title}</Text>
                    <Text style={styles.chatData}>{data.text}</Text>
                  </View>
                  <View style={styles.timeText}>
                    <Text style={styles.chatTime}>{data.time}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )
        })}
  </View>
  )
}


const OpenChat = () => {

  const [showMade, setShowMade] = useState(false);
  const [showPart, setShowPart] = useState(true);
  
  const toggleMenu = (option) => {
    if (option == 'all') {
      setShowMade(true);
      setShowPart(true);
    } else if (option === 'onlymade') {
      setShowMade(true);
      setShowPart(false);
    } else {
      setShowMade(false);
      setShowPart(true);
    } 
  };
  if (showMade == true && showPart == true) {
    return (
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
          <View style={styles.taglist}>
            <View style={styles.tag}>
              <Text style={styles.tagText} onPress={() => toggleMenu('all')}>전체</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText} onPress={() => toggleMenu('onlymade')}>내가 만든 대화방</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText} onPress={() => toggleMenu('onlypart')}>참여방</Text>
            </View>
          </View>
          <SelfChatList/>
          <View style={{height: 10, backgroundColor: '#F5F5F5', marginTop: 20}}></View>
          <PartChatList/>
        </ScrollView>
        <View style={{height: 68, backgroundColor: 'gray'}}>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  } else if (showMade == true) {
    return (
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
            <View style={styles.taglist}>
              <View style={styles.tag}>
                <Text style={styles.tagText} onPress={() => toggleMenu('all')}>전체</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText} onPress={() => toggleMenu('onlymade')}>내가 만든 대화방</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText} onPress={() => toggleMenu('onlypart')}>참여방</Text>
              </View>
            </View>
            <SelfChatList/>
          </ScrollView>
          <View style={{height: 68, backgroundColor: 'gray'}}>
          </View>
          <StatusBar style="auto" />
        </View>
    )
  } else {
    return (
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
            <View style={styles.taglist}>
              <View style={styles.tag}>
                <Text style={styles.tagText} onPress={() => toggleMenu('all')}>전체</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText} onPress={() => toggleMenu('onlymade')}>내가 만든 대화방</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText} onPress={() => toggleMenu('onlypart')}>참여방</Text>
              </View>
            </View>
            <PartChatList/>
          </ScrollView>
          <View style={{height: 68, backgroundColor: 'gray'}}>
          </View>
          <StatusBar style="auto" />
        </View>
    );
  }
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
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  selectBox2: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
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

export default OpenChat;