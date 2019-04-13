
  import React, { Component } from "react";
  import {Redirect} from 'react-router-dom';
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button'
    import Bootstrap from "react-bootstrap";
 // import "./Login.css";
  import GetLoginData from './GetLoginData'


    export default class Login extends Component {
      constructor(){
        super();
        this.state = {
        username: '',
        password: '',
        redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        }
        
        
        login() {
        if(this.state.username && this.state.password){
        GetLoginData().then((result) => {
        let responseJson = result;
        var n = responseJson.length;
        for (var i = 0; i < n; i++) {
        if(this.state.username==responseJson[i].username && this.state.password==responseJson[i].password ){
        this.setState({redirectToReferrer: true});
        break;
        }
       
      }
        });
        
      }
        }
        
        
        onChange(e){
        this.setState({[e.target.name]:e.target.value});
        }

        render() {
        
        
        if (this.state.redirectToReferrer ){
        return (<Redirect to={'/home'}/>)
        }
        
        
        
        return (
        <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password" onChange={this.onChange}/>
        <input type="submit" value="Login" onClick={this.login}/>
        <a href="/signup">Registration</a>
        </div>
        </div>
        );
        }
        }
       