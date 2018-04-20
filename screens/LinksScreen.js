import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Aura Exploration',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

            <Image
         style={{width: 250, height: 250, alignSelf: 'center'}}
          source={require('../assets/images/chakra.jpg')}
        />

          <Image
         style={{width: 250, height: 250, alignSelf: 'center'}}
          source={require('../assets/images/Throat-Chakra-1.jpg')}
        />
    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});
