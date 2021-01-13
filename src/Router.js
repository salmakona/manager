import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
    return (
        <Router sceneStyle ={{paddingTop:65}}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} 
                    title="please login" 
                    initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList} 
                        title="Employees" 
                    />
                </Scene>
                <Scene key="employeeCreate">
                    <Scene  Key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
                </Scene>

                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />

                </Scene>


                
        </Router>
    )
}

export default RouterComponent; 



// const RouterComponent = () => {
//     return (
//         <Router>
//             <Scene key="root">
//                 <Scene 
//                     key="login" 
//                     component={LoginForm} 
//                     title="Please Login" 
//                     initial
//                 />
//                 <Scene 
//                     key="employeelist" 
//                     component={EmployeeList} 
//                     title="Employees"
//                 />
//             </Scene>
//         </Router>
//     );
// };

// export default RouterComponent;


 