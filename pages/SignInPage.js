import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import onboard from './assets/login.png'

export default function SignInPage() {

  return (
    <ImageBackground source={onboard} style={styles.container}>
        <View style={styles.textbox}>
          <Text style={{fontSize: 24, fontWeight: 800, color: 'white'}}>PICKCHAT</Text>
          <Text style={{color: 'white', marginTop: 8}}>로그인 하고 나의 유니버스에 입장하세요!</Text>
        </View>
        <View style={styles.inputform}>
          <Text style={{fontSize: 16, color: 'white', paddingLeft: 10}}>이메일</Text>
          <View style={{paddingVertical: 10}}>
            <TextInput placeholder='이메일 주소' style={{fontSize: 16, color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 5, marginBottom: 10, width:'95%', marginLeft: 10}} placeholderTextColor='#797F8E' />
          </View>
          <Text style={{fontSize: 16, color: 'white', paddingLeft: 10}}>비밀번호</Text>
          <View style={{paddingVertical: 10}}>  
            <TextInput placeholder={`10~16자리 영문, 숫자, 특수문자 조합(()<>'";제외)`} secureTextEntry={true} style={{fontSize: 16, color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 5, marginBottom: 10, width:'95%', marginLeft: 10}} inputStyle={{placeholderTextColor: 'white'}} placeholderTextColor='#797F8E' />
          </View>
          <Text style={{fontSize: 16, color: 'white', paddingLeft: 10}}>닉네임</Text>
          <View style={{paddingVertical: 10}}>
            <TextInput placeholder='닉네임 입력' style={{fontSize: 16, color: 'white', borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 5, marginBottom: 10, width:'95%', marginLeft: 10}} inputStyle={{placeholderTextColor: 'white'}} placeholderTextColor='#797F8E'/>
          </View>
        </View>
          
          <TouchableOpacity style={styles.unvalidsignbutton}><Text style={{fontSize: 20, fontWeight: 'bold'}}>가입 완료</Text></TouchableOpacity>
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
  validsignbutton: {
    width: 327,
    height: 45,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#6B55F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  unvalidsignbutton: {
    width: 327,
    height: 45,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#797F8E',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  inputform: {
    width: '90%',
    height: 200,
    marginBottom: 140
  },
})