import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import { ListView } from 'react-native';



class EmployeeList extends Component {

    UNSAFE_componentWillMount(){
        this.props.employeesFetch();
        //this.createDataSoruce(this.props);
    }

   // UNSAFE_componentWillReceiveProps(nextProps){
        // nextprops are next set of props that this component
        // will be rendered with 
        // this props is still the old set of props
       // this.createDataSoruce(nextProps);
    //}

    // createDataSoruce({ employees }){
      
        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // })
        // this.dataSource = ds.cloneWithRows(employees);
       // return employees
    //}

    renderRow(employees) {
        return <ListItem employee={employees}/>;
    }

    render(){
        //console.log(this.props)
        return(
            <FlatList 
                enableEmptySections
                data={this.props.employees}
                renderItem={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state =>{
    const employees = _.map(state.employees, (val, uid) =>{
        return {...val, uid};
    });
    return { employees }
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);