import {UPDATE_USER} from '../actions/userActions'


export default function userReducer(state = '', action) {

    console.log('aa', action)
    switch(action.type) {
        case UPDATE_USER:
            return action.name;
        default:
            return state
    }
}