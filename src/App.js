import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class App extends Component {
    // state = {loggedIn:null}
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBLT4JL1QMDChUezvRBj7n_lhfE6EE9T1Q",
            authDomain: "auth-d7ac6.firebaseapp.com",
            projectId: "auth-d7ac6",
            storageBucket: "auth-d7ac6.appspot.com",
            messagingSenderId: "321300534674",
            appId: "1:321300534674:web:69aad978b4bdcf864add4b",
            measurementId: "G-S6D9QKQ9GV"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // firebase.auth().onAuthStateChanged((user)=>{
        //     if(user){
        //         this.setState({loggedIn:true});
        //     }else{
        //         this.setState({loggedIn:false});
        //     }

        // });

    }
    render(){
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello 
                    </Text>
                </View>
            </Provider>
        )
    }

}

export default App;
