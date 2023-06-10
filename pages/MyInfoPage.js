import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import onboard from '../assets/images/picture.png';
import profile from '../assets/images/profile.png';
import harryPotter from '../assets/images/harryPotter.jpeg';
const MyInfoPage = () => {
  const handlePress = () => {
    console.log('버튼이 클릭되었습니다.');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={onboard} style={styles.backgroundpicture}>
        <View style={styles.profile_wrap}>
          <Image source={harryPotter} style={styles.profile} />
          <Text style={styles.profile_character}>해리포터</Text>
          <Text style={styles.username}>김덕배</Text>
        </View>
        <TouchableOpacity style={styles.universe_button} onPress={handlePress}>
          <Text>유니버스변경하기</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.components}>
        <View style={styles.invite_friend_component}>
          <View style={styles.invite_friend_wrap1}>
            <Text style={styles.invite_friend_text}>친구 초대하기</Text>
            <Text style={styles.invite_friend_n_enjoy}>
              친구를 초대해서 채팅을 즐겨보세요!
            </Text>
          </View>
          <View style={styles.invite_friend_wrap2}>
            <View style={styles.invite_friend_img_wrap}>
              <Image source={profile} style={styles.invite_friend_img} />
            </View>
            <View style={styles.invite_friend_img_wrap}>
              <Image source={profile} style={styles.invite_friend_img} />
            </View>
            <View style={styles.invite_friend_img_wrap}>
              <Image source={profile} style={styles.invite_friend_img} />
            </View>
            <View style={styles.invite_friend_img_wrap}>
              <Image source={profile} style={styles.invite_friend_img} />
            </View>
            <View style={styles.invite_friend_img_wrap}>
              <Image source={profile} style={styles.invite_friend_img} />
            </View>
          </View>
        </View>
        <View style={styles.service_name_component}>
          <Text style={styles.service_name}>서비스명</Text>
          <Text style={styles.service_name}>사용법 보러가기!</Text>
          <View style={styles.service_name_design} />
        </View>
      </View>
      <View style={styles.bottom_box}></View>
    </View>
  );
};

export default MyInfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundpicture: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 410,
    height: 300,
    borderWidth: 1,
    borderColor: 'red',
  },
  profile_wrap: {
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profile_character: {
    color: '#ffffff',
  },
  username: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 600,
  },

  statusbar: {
    backgroundColor: 'blue',
    barStyle: 'light-content',
  },
  universe_button: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 300,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 270,
    borderRadius: 40,
  },

  components: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  invite_friend_component: {
    width: 340,
    height: 200,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    gap: 20,
  },
  invite_friend_wrap1: {
    borderWidth: 1,
    borderColor: 'red',
  },
  invite_friend_text: {
    fontWeight: 600,
    fontSize: 20,
  },

  invite_friend_n_enjoy: {},

  invite_friend_wrap2: {
    borderWidth: 1,
    borderColor: 'red',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  invite_friend_img_wrap: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
  invite_friend_img: {
    width: 50,
    height: 50,
  },
  service_name_component: {
    width: 340,
    height: 120,
    paddingLeft: 30,
    justifyContent: 'center',
    overflow: 'hidden',

    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  },
  service_name: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  service_name_design: {
    width: 180,
    height: 180,

    position: 'absolute',
    right: -20,

    borderRadius: 232,
    backgroundColor: '#AEB4BF',
  },

  bottom_box: {
    width: '100%',
    height: 68,
    backgroundColor: '#AEB4BF',
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
