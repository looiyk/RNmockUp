import React from 'react';
import {
  Text,
  Button,
  Platform,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation'

class Screen extends React.Component {
  static navigationOptions = {
    title: "Screen Four",
  }

  render() {
    return (
      <Container
        backgroundColor="#9e0f12"
      >
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

const Container = ({ backgroundColor, onPress, children }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{backgroundColor}</Text>
    </TouchableOpacity>
    {children}
  </View>
);

export default Screen;
