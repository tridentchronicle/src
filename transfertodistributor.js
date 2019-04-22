import React from 'react';
import axios from 'axios';

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
          url: 'http://localhost:3000/api/org.authentication.whey.transfertodistributor',
          data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.assetkey,"distributor": "resource:org.authentication.whey.Distributor#"+this.state.distributorid}),
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
            <div>
            <form>
                <label>
                    Whey id:
                    <input
                        name='assetkey'
                        value={this.state.assetkey}
                        onChange={e => this.handleChange(e)}/>
                </label>
                <label>
                    Distributor id:
                    <input 
                        name='distributorid'
                        value={this.state.distributorid} 
                        onChange={e => this.handleChange(e)}/>
                </label>
                <button onClick={(e) => this.onSubmit(e)}>TRANSFER</button>         
            </form>
            </div>
        );
    }
    }

   export default transfertodistributor;
  
