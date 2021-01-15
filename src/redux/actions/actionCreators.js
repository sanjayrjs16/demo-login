import {LOGIN, LOGOUT, SET_USERNAME, SET_PASSWORD, SHOW_LOADER, SHOW_MESSAGE, HIDE_MESSAGE,  RESET_FIELDS} from './actionTypes';


export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        username
    }
}

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password
    }
}
export const resetFields = () => {
    return {
        type: RESET_FIELDS,
       }
}

export const loggedIn = () => {
    return {
        type: LOGIN
    }
}

export const logOut = () => {
    return {
        type: LOGOUT
            }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
};
export const showMessage = () => {
    return {
        type: SHOW_MESSAGE
    }
};
export const hideMessage = () => {
    return {
        type: HIDE_MESSAGE
    }
};
    
    
export const checkCredAsync = (username, password) => {
    return async (dispatch) => {
        dispatch(showLoader());
        console.log("inside checkCredAsync",username, password);
        let res = await fetch("https://sanjayrjs16.github.io/mock-rest-api/valid-cred.json");
        if(res.ok){
            
            let {username: validUsername, password: validPassword} = await res.json();
            console.log(validUsername, validPassword);
            if(username===validUsername && password ==validPassword){
                console.log("Now logged in my friend");
               setTimeout(() => {
                dispatch(showLoader());
                dispatch(loggedIn());
                dispatch(showMessage());
               }, 2000);
            }
            else{
                setTimeout(() => {
                    dispatch(showLoader());
                    dispatch(showMessage());
                    dispatch(resetFields())
                   }, 2000);
               
            }
            
        }
        
    }
};
export const fetchUsersAsync = () => {
    return async (dispatch) => {
        let res = await fetch("https://sanjayrjs16.github.io/mock-rest-api/users.json");
        if(res.ok){
            let {user: users} = await res.json();
            console.log(users);
            return users
        }  

    }
}
    