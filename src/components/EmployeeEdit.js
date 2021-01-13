import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeFrom from './EmployeeFrom';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import {Text} from 'react-native';

class EmployeeEdit extends Component {
    state = {showModal: false};


    componentWillMount(){
        _.each(this.props.employee, (value, prop)=>{
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;
        console.log(name, phone, shift);
        this.props.employeeSave({ name, phone, shift, uid:this.props.employee.uid });
    }


    onTextPress(){
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcomming shift is on ${shift}`);
    }

    onAccept(){
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline(){
        this.setState({ showModal: false })
    }


   
    render() {
        console.log("Salma-emp-edit")
        console.log(this.props.employee)
        return(
            <Card>
                <EmployeeFrom />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    <Text>
                        Are you shore you want to delet this?
                    </Text>
                </Confirm>
                
            </Card>
            
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeFrom;
    return {name, phone, shift}
}

export default connect(mapStateToProps, { 
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);

