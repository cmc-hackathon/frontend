import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function WelcomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>PICKCHAT</Text>
        <Text>로그인 하고 나의 유니버스에 입장하세요!</Text>
      </View>
      <TouchableOpacity style={styles.loginbutton}><Text style={{fontSize: 15}}>카카오로 로그인하기</Text></TouchableOpacity>
      <TouchableOpacity style={styles.loginbutton}><Text style={{fontSize: 15}}>네이버로 로그인하기</Text></TouchableOpacity>
      <View style={{width: 166, flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={{color: '#757575'}}>회원가입</Text>
        <View style={{width: 1, height: 14, backgroundColor: '#757575', marginLeft: 15, marginRight: 15}}></View>
        <Text style={{color: '#757575'}}>이메일 로그인</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center'
  },
  textbox: {
    marginTop: '60%',
    alignItems: 'center',
    marginBottom: '50%'
  },
  loginbutton: {
    width: 327,
    height: 49,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center'
  }
});