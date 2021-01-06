import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // this is a middleware
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyAbh_OtImji9-MiL-TtkzZuDrV6yVLtc38",
            authDomain: "manager-8bcc1.firebaseapp.com",
            projectId: "manager-8bcc1",
            storageBucket: "manager-8bcc1.appspot.com",
            messagingSenderId: "1016781450880",
            appId: "1:1016781450880:web:645511aca911a837324065",
            measurementId: "G-HH1NNTR0LN"        
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }
        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
        // firebase.analytics();
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
};

export default App;