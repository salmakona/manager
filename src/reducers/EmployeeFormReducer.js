import { act } from 'react-test-renderer';
import {EMPLOYEE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
    name:'',
    Phone:'',
    shift:''
};

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}
        default:
            return state;
    }
}