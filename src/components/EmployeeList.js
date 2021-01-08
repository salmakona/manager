import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';


class EmployeeList extends Component {
    componentWillUnmount(){
        this.props.employeeFetch();
        this.createDataSoruce(this.props);
      
    }
    componentWillReceiveProps(nextProps){
        // nextprops are next set of props that this component
        // will be rendered with 
        // this props is still the old set of props
        this.createDataSoruce(nextProps);
    }

    createDataSoruce({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !==r2
        });
        this.dataSource = ds.cloneWithRows(this.props.employees);
    }

    render(){
        console.log(this.props)
        return(
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        )
    }
}

const mapStateToProps = state =>{
    const employees = _.map(state.employees, (val, uid) =>{
        return {...val, uid};

    });

    return { employees }

}

export default connect(null, employeeFetch)(EmployeeList);