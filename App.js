import React from 'react'
import Login from './screens/Login'
import Signup from './screens/Signup'
import SwitchNavigator from './navigation/SwitchNavigator'


export default class App extends React.Component {
    render() {
        return <SwitchNavigator />
    }
}