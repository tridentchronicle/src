
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
        name: '',
        country: '',
        redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        }
        
        
        login() {
        if(this.state.name && this.state.country){
        GetLoginData().then((result) => {
        let responseJson = result;
        var n = responseJson.length;
        for (var i = 0; i < n; i++) {
        if(this.state.name==responseJson[i].name && this.state.country==responseJson[i].country ){
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
        <input type="text" name="name" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="country" onChange={this.onChange}/>
        <input type="submit" value="Login" onClick={this.login}/>
        <a href="/signup">Registration</a>
        </div>
        </div>
        );
        }
        }


        
       