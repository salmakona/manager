import React, {Component} from 'react';
import Card from './Card';
import CardSection from './CardSection';
import Input from './Input';
import Button from './Button';


class LoginFrom extends Component{

    render(){
        return(
            <Card>
                <CardSection>
                <Input label ="Email" placeholder="email@gmail.com" />
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

export default LoginFrom;