import {SHOW_LOADER, LOGIN, LOGOUT,RESET_FIELDS, SET_USERNAME, SET_PASSWORD, SHOW_MESSAGE, HIDE_MESSAGE} from '../actions/actionTypes';

const initialState = {authenticated: false, username: '', password: '', messageShown: false}
const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERNAME: {
            return {
                ...state, username : action.username
            }
        }
        case SET_PASSWORD: {
            return {
                ...state, password : action.password
            }
        }
        case RESET_FIELDS: {
            return {
                ...state, username: '', password: ''
            }
        }
        case LOGIN: {
            return {
                ...state, authenticated : true
            }
        }
        case LOGOUT: {
            return {
                ...state,  authenticated : false, messageShown: false
            }
        }
        case SHOW_LOADER: {
            return {
                ...state,   showLoader : !(state.showLoader)
            }
        }
        case SHOW_MESSAGE: {
            return {
                ...state,   messageShown : true
            }
        }
        case HIDE_MESSAGE: {
            return {
                ...state,   messageShown : false
            }
        }
        default:
            return state;
    }
}
export default loginReducer;