import React, {Component} from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged} from '../actions';



class LoginFrom extends Component{

    onEmailChange(text){
        console.log( this.props.emailChanged(text))
            this.props.emailChanged(text);
   
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                <Input label ="Email" placeholder="email@gmail.com" 
                onChangeText={this.onEmailChange.bind(this)}
                value = {this.props}
                />
                </CardSection>

                <CardSection>
                    <Input 
                    SecureTextEntry 
                    label ="Password" 
                    placeholder="password" 
                    onChangeText = {this.onPasswordChange.bind(this)}
                    value = {this.props}
                    />
                    </CardSection>
                    <CardSection>
                        <Button>
                            Login
                        </Button>
                    </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        email:state.auth.email,
        password:state.auth.password
    }
}

export default connect(mapStateToProps, {emailChanged,passwordChanged})(LoginFrom);