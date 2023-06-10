import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import onboard from '../assets/login.png'
import { Input } from 'react-native-elements';

export default function LoginPage() {
  return (
    <ImageBackground source={onboard} style={styles.container}>
        <View style={styles.textbox}>
          <Text style={{fontSize: 24, fontWeight: 800, color: 'white'}}>PICKCHAT</Text>
          <Text style={{color: 'white', marginTop: 8}}>로그인 하고 나의 유니버스에 입장하세요!</Text>
        </View>
        <View style={styles.inputform}>
          <Input placeholder='이메일 주소' style={{fontSize: 15, color: 'white'}}/>
          <Input placeholder='비밀번호' secureTextEntry={true} style={{fontSize: 15}} inputStyle={{placeholderTextColor: 'white'}}/>
        </View>
        <TouchableOpacity style={styles.loginbutton}><Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>로그인</Text></TouchableOpacity>
        <TouchableOpacity style={styles.signinbutton}><Text style={{fontSize: 20, fontWeight: 'bold'}}>회원가입</Text></TouchableOpacity>
        <View style={{width: 166, flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 12}}>이메일 찾기</Text>
          <View style={{width: 1, height: 14, backgroundColor: '#757575', marginLeft: 15, marginRight: 15}}></View>
          <Text style={{color: 'white', fontSize: 12}}>비밀번호 찾기</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center'
  },
  textbox: {
    marginTop: '40%',
    alignItems: 'center',
    marginBottom: '15%'
  },
  loginbutton: {
    width: 327,
    height: 45,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#6B55F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signinbutton: {
    width: 327,
    height: 45,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputform: {
    width: '90%',
    height: 200,
    marginBottom: 140
  },
})