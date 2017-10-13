import React from 'react';
import{
  StyleSheet,
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScreenOne from './pages/Component/ScreenOne';
import Index from './pages/Main/index';
//import Test from './pages/Main/Test';

class Login extends React.Component{
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style ={styles.logo}
                  source={require('./pages/Images/logo.png')}/>
            <Text style={styles.title}>Personally made App Using React-Native</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              underlineColor="transparent"
              placeholder="Email"
              returnKeyType="next"
              keyboardType="email-address"
              onSubmitEditing={()=> this.passwordInput.focus()}
              style={styles.input}/>
            <TextInput
              underlineColor="transparent"
              placeholder="Password"
              secureTextEntry
              returnKeyType="go"
              ref={(input) => this.passwordInput = input}
              style={styles.input}/>
              <Button
                  style={styles.buttonContainer}
                  onPress={() => navigate("Index")}
                  title="Login"
                />
          </View>
        </KeyboardAvoidingView>
      );
  }
  }

const SimpleApp = StackNavigator({
  Home: { screen: Login },
  Index: { screen: Index},
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#0F5449'
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    alignItems:'center',
    justifyContent:'center',
    flexGrow: 1,
  },
  title: {
    color:'white',
    width: 150,
    textAlign: 'center',
    opacity:0.9
  },
  formContainer: {
  padding:20

  },
  input: {
    height: 40,
    backgroundColor: "rgba(190,236,228,0.2)",
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#10A3D6',
    paddingVertical: 10
  },
  textButton: {
    textAlign:'center',
    color:'#FFF',
    fontWeight: "800"
  }
});
