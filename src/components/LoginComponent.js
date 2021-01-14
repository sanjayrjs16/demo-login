import React from "react";
import logo from "../logo.svg";
import { showMessage } from "../redux/actions/actionCreators";
import MessageComponent from './MessageComponent';
import '../App.css';

export default class LoginComponent extends React.Component {
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
 
    handleChange(e, field){
        const {setUsername, setPassword } = this.props.props;
        switch(field){
            case "username":{
                // this.setState({
                //     username: e.target.value
                // });
              setUsername(e.target.value);
                break;
            }
            case "password":{
                // this.setState({
                //     password: e.target.value
                // });
               setPassword(e.target.value);
                break;
            }
            default:{
                break;
            }
        }
       
    }
   
    handleSubmit(e, username, password){
        e.preventDefault();
        const {checkCredAsync} = this.props.props;
        checkCredAsync(username,password);
        // console.log(this.state.username, this.state.password);
    }
    render(){
        const {username, password, showLoader, showMessage } = this.props.props;
        console.log("COmponent rendered", username," ", password);
        return(
            <div>
                <h1>Login</h1>
                {showLoader && <img src={logo} className={"App-logo"}/>}
                {showMessage && <MessageComponent type={"-error"} message="Incorrect Username or password ! Please try again" />}
                <form onSubmit={(e) => this.handleSubmit(e, username, password)}> 
                    <input className="input" placeholder={"Username/Email"} type={"text"} onChange={(e) => this.handleChange(e,"username")} value={username}required/>
                    <input placeholder={"Password"} type={"password"} onChange={(e) => this.handleChange(e,"password")} value={password} required/>
                    <input className="submit" placeholder={"Submit"} type={"submit"} />
                </form>
               
            </div>
        );
    }
}