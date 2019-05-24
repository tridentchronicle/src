import React from 'react';
import axios from 'axios';
import './transfertoretailer.css';

class transfertoretailer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assetkey: '',
            retailerid: ''
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
        retailerid: this.state.retailerid

       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://localhost:3000/api/org.authentication.whey.transfertoretailer',
          data: JSON.stringify({"whey": "resource:org.authentication.whey.WheyProtein#"+this.state.assetkey,"retailer": "resource:org.authentication.whey.Retailer#"+this.state.retailerid}),
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
            <div class="main6">
            <form>
                <label>
                    Whey id:
                    <input
                        name='assetkey'
                        value={this.state.assetkey}
                        onChange={e => this.handleChange(e)}/>
                </label>
                <label>
                    Retailer id:
                    <input 
                        name='retailerid'
                        value={this.state.retailerid} 
                        onChange={e => this.handleChange(e)}/>
                </label>
                <button onClick={(e) => this.onSubmit(e)}>TRANSFER</button>         
            </form>
            </div>
        );
    }
    }

   export default transfertoretailer;
  
