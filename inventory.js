import React from "react";
import axios from 'axios';
import { Table,  ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import './inventory.css';


class Inventory extends React.Component {
    constructor(){
        super() 
          this.state = {
            data: [],
            owner:'nil'
          }
        
      }
      componentDidMount() {
        fetch("http://35.229.19.138:3000/api/org.authentication.whey.WheyProtein")
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(data => this.setState({ data }));
        console.log(this.state.data)
      }
    
      render() {
        console.log("test:" + this.props.TextBoxValue[1])
        console.log(this.state.data[0])
        if(this.props.TextBoxValue[1]=="Manufacturer")
        {
          this.state.owner=true;
        }
        else if(this.props.TextBoxValue[1]=="Distributor")
        {
        this.state.owner="resource:org.authentication.whey.Distributor#"+this.props.TextBoxValue[0];
        }
        else if(this.props.TextBoxValue[1]=="Retailer")
        {
          this.state.owner="resource:org.authentication.whey.Retailer#"+this.props.TextBoxValue[0];
        }
        
        return (
          <div class="main11">
          <p className="h5 text-center mb-4">WHEY PROTEIN INVENTORY</p>
            {(() => {
              if(this.props.TextBoxValue[1]=="Manufacturer")
              {
                return(
                            <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>S.No</th>
          <th>Whey Id</th>
          <th>Type</th>
          <th>Size</th>
          <th>Flavour</th>
          <th>Time</th>
          <th>Current Owner</th>
        
        </tr>
      </thead>
      <tbody>{this.state.data.map(function(item, key) {
                 
                 return (
                    <tr key = {key}>
                        <td>{item.assetKey}</td>
                        <td>{item.Type}</td>
                        <td>{item.Size}</td>
                        <td>{item.Flavour}</td>
                        <td>{item.timeoftransaction}</td>
                        <td>{item.owner}</td>
                    </tr>
                  )
               
               })}</tbody>
    </Table>)}
    else{
      return(
        <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>S.No</th>
            <th>Whey Id</th>
            <th>Type</th>
            <th>Size</th>
            <th>Flavour</th>
            <th>Time</th>
            <th>Current Owner</th>
          
          </tr>
        </thead>
        <tbody>{this.state.data.filter((item) => item.owner == this.state.owner).map(function(item, key) {
                   
                   return (
                      <tr key = {key}>
                          <td>{item.assetKey}</td>
                          <td>{item.Type}</td>
                          <td>{item.Size}</td>
                          <td>{item.Flavour}</td>
                          <td>{item.timeoftransaction}</td>
                          <td>{item.owner}</td>
                      </tr>
                    )
                 
                 })}</tbody>
      </Table> )}
      })()}
   
           </div>
        );
      }
    }
    
export default Inventory;