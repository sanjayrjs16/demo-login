import React, { Component } from 'react';
import {connect} from "react-redux";
import DashboardComponent from '../components/DashboardComponent';
import LoginComponent from '../components/LoginComponent';
import { setUsername, setPassword, checkCredAsync, showMessage, hideMessage, logOut, fetchUsersAsync } from '../redux/actions/actionCreators';


class ProfileContainer extends Component {
    constructor(props){
        super(props);

    }
  
    render() {
        return (
            <div>
               {this.props.authenticated?<DashboardComponent props={this.props}/>:<LoginComponent props={this.props}/>}
            </div>
        )
    }
}

 const mapStateToProps = (state) => {
return {
    authenticated: state.login.authenticated,
    username: state.login.username,
    password: state.login.password,
    showLoader: state.login.showLoader,
    messageShown : state.login.messageShown
    
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(setUsername(username)),
        setPassword: (password) => dispatch(setPassword(password)),
        checkCredAsync: (username, password) => dispatch(checkCredAsync(username, password)),
        showMessage: () => dispatch(showMessage()),
        hideMessage: () => dispatch(hideMessage()),
        logOut: () => dispatch(logOut()),
        fetchUsersAsync: () => dispatch(fetchUsersAsync())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
