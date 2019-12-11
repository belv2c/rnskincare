import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'

class Profile extends React.Component {
    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello {this.props.user.email}</Text>
                <Image style={styles.profilePic} source={require('../assets/brooke.jpg')} />
                <Button title='Edit Profile' />
                <Button title='Logout' onPress={this.handleSignout} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginBottom: 250
      },
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)