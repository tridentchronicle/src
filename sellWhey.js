import React from 'react';
import axios from 'axios';
import QrReader from 'react-qr-reader';

export default class sellWhey extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      result: 'No_result',
      id:''
    }
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit = (e) => {
  if(this.state.result=="No_result")
  {
    window.confirm("Please scan qr code first"); 
  }
  else
  {
   e.preventDefault();
   const form = {
    assetkey: this.state.assetkey,
    retailerid: this.state.retailerid,
    

   }
     {/* Send data to API*/}
     var authOptions = {
      method: 'post',
      url: 'http://localhost:3000/api/org.authentication.whey.sellWhey',
      data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.result, "RetailerId": "resource:org.authentication.whey.Retailer#"+this.state.id}),
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
  
}}


  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%' }}
        />
     
        <button onClick={(e) => this.onSubmit(e)}>POST</button>   
      </div>
    );
  }
}




