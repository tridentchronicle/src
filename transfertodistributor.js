import React from 'react';
import axios from 'axios';
import './transfertodistributor.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

class transfertodistributor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assetkey: '',
            distributorid: ''
        };
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
       
       e.preventDefault();
       const form = {
        assetkey: this.state.assetkey,
        distributorid: this.state.distributorid
       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://35.229.19.138:3000/api/org.authentication.whey.transfertodistributor',
          data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.assetkey,"distributor": "resource:org.authentication.whey.Distributor#"+this.state.distributorid,"DistributorId":this.state.distributorid}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
      axios(authOptions)
         .then((response) => {
             console.log(response);
             })
         .catch((error) => {
            alert(error)
           })
      
    }
    
    render() {
        return (
            <div class="main5">
             <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">TRANSFER TO DISTRIBUTOR</p>
            <div className="grey-text">
              <MDBInput
                label="Whey Id"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name='assetkey'
                        value={this.state.assetkey}
                        onChange={e => this.handleChange(e)}
              />
              <MDBInput
                label="Distributor's email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name='distributorid'
                        value={this.state.distributorid}
                        onChange={e => this.handleChange(e)}
              />
         
            </div>
            <div className="text-center">
              <MDBBtn outline color="success" onClick={(e) => this.onSubmit(e)}>
                TRANSFER <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </div>
        );
    }
    }

   export default transfertodistributor;
  
