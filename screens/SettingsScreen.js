import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Future',
  };

  render() {
    return (
    <ScrollView style={styles.container}>

                   <Image
         style={{width: 250, height: 250, alignSelf: 'center'}}
          source={require('../assets/images/aura-collage-21.jpg')}
        />

          <Image
         style={{width: 250, height: 250, alignSelf: 'center'}}
          source={require('../assets/images/aura-gp4.jpg')}
        />

         <Image
         style={{width: 250, height: 250, alignSelf: 'center'}}
          source={require('../assets/images/chakrachart2.jpg')}
        />
    
    </ScrollView>
  )}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
