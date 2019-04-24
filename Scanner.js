import React from 'react';
import QrReader from 'react-qr-reader';
import GetLoginData from './GetLoginData'

class Scanner extends React.Component {
  state = {
    result2: 'No_result',
    type:'WheyProtein',
    owner:'nil',
    manufacturer:'',
    distributor:'',
    distributor2:'',
    retailer:'',
    seller:'',
    seller2:'',
    category:'',
    flavour:'',
    size:'',
    dateofcreation:''
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result2: data
      })
      GetLoginData(this.state.type).then((result) => {
        let responseJson = result;
       console.log(responseJson);
        var n = responseJson.length;
        for (var i = 0; i < n; i++) {
        if(this.state.result2==responseJson[i].assetKey ){
            this.state.owner=responseJson[i].owner;
            this.state.manufacturer=responseJson[i].ManufacturerDetails;
            this.state.distributor=responseJson[i].DistributorDetails.distributor;
            this.state.distributor2=responseJson[i].DistributorDetails.timestamp;
            this.state.seller=responseJson[i].SellerDetails.RetailerId;
            this.state.seller2=responseJson[i].SellerDetails.timestamp;
            this.state.category=responseJson[i].Type;
            this.state.flavour=responseJson[i].Flavour;
            this.state.size=responseJson[i].Size;
            this.state.dateofcreation=responseJson[i].timeoftransaction;

        }
    }
        });
    

       
}}

  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%' }}
        />
        <p>{this.state.result2}</p>
       
        <p>DATE OF CREATION : {this.state.dateofcreation}</p>
        <p>TYPE : {this.state.category}</p>
        <p>FLAVOUR : {this.state.flavour}</p>
        <p>SIZE : {this.state.size}</p>
        <p>LAST KNOWN OWNER : {this.state.owner}</p>
        <p>MANUFACTURER : {this.state.manufacturer}</p>
        <p>DISTRIBUTOR DETAILS : {this.state.distributor}</p>
        <p>DATE OF TRANSFER TO DISTRIBUTOR : {this.state.distributor2}</p>
        <p>SELLER DETAILS : {this.state.seller}</p>
        <p>TIME AT WHICH PRODUCT WAS SOLD : {this.state.seller2}</p>
      </div>
    );
  }
}

export default Scanner;
