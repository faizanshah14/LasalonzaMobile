import React , {useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { login } from '../services/AuthApis';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {value}  = useContext(AuthContext);
  console.log(value);
  async function loginHandler(e){
    e.preventDefault();
    const res = await login(email, password);
    console.log(res);
    if(res.result === 'ok'){
      navigation.navigate('Home')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
          <Text>{value}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={e => {
            setEmail(e);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={e => {
            setPassword(e);
          }}
        />
        <Button title="Login" onPress={loginHandler} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});
export default LoginScreen;
