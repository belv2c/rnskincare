import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import Firebase from '../config/Firebase'

export default class Loading extends React.Component {

    componentDidMount() {
        Firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Profile' : 'SignUp')
        })
      }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})