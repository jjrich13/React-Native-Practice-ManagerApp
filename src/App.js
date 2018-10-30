import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyDru-nqdIjRL_DIB2fqiCgMduEQ_VyIMTI',
            authDomain: 'manager-f2207.firebaseapp.com',
            databaseURL: 'https://manager-f2207.firebaseio.com',
            projectId: 'manager-f2207',
            storageBucket: 'manager-f2207.appspot.com',
            messagingSenderId: '47497737138'
          };
          firebase.initializeApp(config);
    }
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}>
                <View>
                    <Header 
                        headerText="Manager"
                    />
                    <LoginForm />
                </View>
            </Provider>
        )
    }
}

export default App