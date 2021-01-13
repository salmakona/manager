import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';


class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit({ employee: this.props.employee.item });
        console.log(this.props.employee.item)
    }

    render(){
        const { item } = this.props.employee;
        // console.log(item)
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {item.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 5
    }
}

export default ListItem;


// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import { CardSection } from './common';

// class ListItem extends Component {
//     render(){

//         const { item } = this.props.employee;
//         console.log(item)
//         return(
//             <CardSection>
//                 <Text style={styles.titleStyle}>
//                     {item.name}
//                 </Text>
//             </CardSection>
//         )
//     }
// }

// const styles = {
//     titleStyle:{
//         fontSize: 18,
//         paddingLeft: 5
//     }
// }

// export default ListItem;