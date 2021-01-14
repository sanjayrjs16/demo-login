import React, { Component } from 'react';
import {connect} from "react-redux";
import DashboardComponent from '../components/DashboardComponent';
import LoginComponent from '../components/LoginComponent';
import { setUsername, setPassword, checkCredAsync, showMessage } from '../redux/actions/actionCreators';


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
    loginError : state.login.loginError
    
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(setUsername(username)),
        setPassword: (password) => dispatch(setPassword(password)),
        checkCredAsync: (username, password) => dispatch(checkCredAsync(username, password)),
        showMessage: () => dispatch(showMessage())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
