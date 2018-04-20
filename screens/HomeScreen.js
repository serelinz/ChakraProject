import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Chakra',
  };

  
  

  randomChakra() {
    chakras = ['crown', 'third-eye', 'throat', 'heart', 'solar', 'sacral', 'root'] 
    random = Math.floor(Math.random()* 7);
    Alert.alert("Your daily chakra is: " + chakras[random]);
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Welcome to the chakra app</Text>
        
        <Image
         style={{width: 250, height: 250}}
          source={require('../assets/images/Chakra_map.jpg')}
        />

        <TouchableOpacity  onPress={this.randomChakra}>
            <Text>Learn your daily chakra</Text>
          </TouchableOpacity>

         <Image
         style={{width: 250, height: 250}}
          source={require('../assets/images/chakravector.jpg')}
        />

       


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 80,
  }
});
