import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './login2.css';
import {Redirect,BrowserRouter} from 'react-router-dom';
import GetLoginData from './GetLoginData'



export default class Login2 extends React.Component {
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

        handleClose = () => {
          <Redirect to={'/home'}/>
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
        return (
		
		<Redirect to={'/home'}/>
		)
		}
		
  return (
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
              <MDBInput
                label="Your email"
                validate
                error="wrong"
				success="right"
				name="name" onChange={this.onChange}
              />
              <MDBInput
                label="Your password"
                type="password"
                validate
				containerClass="mb-0"
				name="country" onChange={this.onChange}
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
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
      </div>
  );
}
}
