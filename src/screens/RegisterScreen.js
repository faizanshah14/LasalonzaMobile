import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

import { signup } from '../services/AuthApis';

const RegisterScreen = ({navigation}) => {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {value} = useContext(AuthContext);
  async function signupHandler(e){
    console.log('heehe');
      e.preventDefault();
      const res = await signup(email, password,firstName, lastName);
      if(res.status === 200){
        navigation.navigate('Login')
      }
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.wrapper}>
          <Text>{value}</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder="Enter First Name"
          onChangeText={text => setfirstName(text)}
        />
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Enter Last Name"
          onChangeText={text => setlastName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Register"
          onPress={signupHandler}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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
});

export default RegisterScreen;
