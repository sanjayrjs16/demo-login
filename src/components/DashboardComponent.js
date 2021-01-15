import React, { Component } from 'react'
import ButtonComponent from './ButtonComponent';
import MessageComponent from './MessageComponent'
import UserCardComponent from './UserCardComponent';

//This is the dashboard, after login validated
export default class DashboardComponent extends Component {
    constructor(props){
        super(props);
      this.state = {
          userList: []
      }

    }
     async componentDidMount(){
        
           const {fetchUsersAsync} = this.props.props;
           
           this.setState({
               userList: await fetchUsersAsync()
           })
           
    }
    render() {
        const {username, messageShown, hideMessage, logOut} = this.props.props;
        return (
            <div className="dashboard-container">
                <div className="dashboard">
                    <h2>Users dashboard</h2>
                    <ButtonComponent style="-block" text="Sign out" onClick={logOut} />
                </div>
               <hr />
                    {messageShown &&  <MessageComponent type={"-success"} message={`Login Successful. Welcome back, ${username} `} hideMessage={hideMessage}/>}
                <div  className="user-list">

                    {this.state.userList.map((user)=> <UserCardComponent key={user.id} details={user} />)}
                </div>
            </div>
        )
    }
}
