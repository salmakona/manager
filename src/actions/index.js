import EMAIL_CHANGED  from './type'

export const emailChange = (text) =>{
    return {
        type:'EMAIL_CHANGED',
        payload: text
    }

}