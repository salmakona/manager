import React, {Component} from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';
import {connect} from 'react-redux';
import {emailChange} from '../../actions';



class LoginFrom extends Component{

    onEmailChange(text){
            this.props.emailChange(text)
   
    }

    render(){
        return(
            <Card>
                <CardSection>
                <Input label ="Email" placeholder="email@gmail.com" onEmailChange={this.onEmailChange.bind(this)}/>
                </CardSection>

                <CardSection>
                    <Input SecureTextEntry label ="Password" placeholder="password" />
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

export default connect(null, {emailChange})(LoginFrom);