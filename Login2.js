import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './login2.css';
import './popup.css';
import {Redirect,BrowserRouter} from 'react-router-dom';
import GetLoginData from './GetLoginData'
import addWhey from './addWhey';
import Home from './home';
import { Form,Col,Button } from 'react-bootstrap';


export default class Login2 extends React.Component {
	constructor(){
        super();
        this.state = {
          id: '',
          type: 'select',
        email: '',
        password: '',
        redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange3  = this.handleChange3 .bind(this);
        }

        handleClose = () => {
          <Redirect to={'/home'}/>
        }

      
        
        
        login() {
        
          if(this.state.type=="select")
          {
            window.confirm("Please select login type"); 
          }else{
        if(this.state.email && this.state.password){
        GetLoginData(this.state.type).then((result) => {
        let responseJson = result;
        
        var n = responseJson.length;
        for (var i = 0; i < n; i++) {
        if(this.state.email==responseJson[i].email && this.state.password==responseJson[i].name ){
         
          
          if(this.state.type=="Manufacturer"){
            this.state.id=responseJson[i].manufacturerId;
        }

        if(this.state.type=="Distributor"){
           this.state.id=responseJson[i].distributorId; 
      }

      if(this.state.type=="Retailer"){
         this.state.id=responseJson[i].retailerId;    
    }
        this.setState({redirectToReferrer: true});
             break;
        }
        
       
      }
      if (this.state.redirectToReferrer ){
        
    }
       else{
        window.confirm("INVALID CREDENTIALS"); 
      }
      
        });
        
      }}
        }
        
        
        onChange(e){
        this.setState({[e.target.name]:e.target.value});
        }

        handleChange3 = (e) => {
          this.setState({
              type: e.target.value,
          })
      }

        render() {  
         
          if (this.state.redirectToReferrer ){
          

            if(this.state.type=="Manufacturer"){
            return (
        
       
        <Redirect to={{
          pathname: '/dashboard',
          state: { uid: this.state.id, ref:this.state.email , utype:this.state.type}
      }} />

        )
        }

        if(this.state.type=="Distributor"){
          return (
      
            <Redirect to={{
              pathname: '/dashboard',
              state: { uid: this.state.id, ref:this.state.email, utype:this.state.type}
          }} />

      )
      }

      if(this.state.type=="Retailer"){
        return (
    
    <Redirect to={{
          pathname: '/dashboard',
          state: { uid: this.state.id, ref:this.state.email, utype:this.state.type}
      }} />
    )
    }
      }
		
  return (
    <div>
      <Home/>
    <div className='popup'>
        <div className='popup_inner'>

    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>

              <Form.Group controlId="type">
    <Form.Control as="select"  id="lang" onChange={this.handleChange3.bind(this)} value={this.state.type}>
  
          <option value="select">Select the login type</option>
          <option value="Manufacturer">Manufacturer Login</option>
          <option value="Distributor">Distributor Login</option>
          <option value="Retailer">Retailer Login</option>
      
        </Form.Control>
        </Form.Group>
              <MDBInput
                label="Your email"
                validate
                error="wrong"
				success="right"
				name="email" onChange={this.onChange}
              />
              <MDBInput
                label="Your password"
                type="password"
                validate
				containerClass="mb-0"
				name="password" onChange={this.onChange}
              />
             
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
				  className="btn-block z-depth-1a"
				  value="Login" onClick={this.login}
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
            <p className="font-small grey-text d-flex justify-content-end">
                
                <a href="#!" className="blue-text ml-1">

                Forgot Password?
                </a>
              </p>
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div></div>
  );
}
}
