 import { EMPLOYEE_UPDATE } from './types';
 import { EMPLOYEE_CREATE } from './types';
 import firebase from 'firebase';
 import { Actions } from 'react-native-router-flux';


 export const employeeUpdate = ({ prop, value }) => {
   console.log(prop)

  return {
      type: EMPLOYEE_UPDATE,
      payload: { prop, value }
    };
    
  };


export const employeeCreate = ({ name, phone, shift }) => {

  const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(()=> {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.pop({ type: 'reset' });
            });
    }

}

// export const employeeCreate = ({ prop, value }) => {
//   return {
//     type: EMPLOYEE_CREATE,
//     payload: { prop, value }
//   };
//   // console.log(name)
//   // console.log(phone)
//   // console.log(shift)
// }