import React from 'react';
import axios from 'axios';
import './addWhey.css';
import { Form,Col,Button } from 'react-bootstrap';

class addWhey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type: 'select',
          flavour: 'select',
          size: 'select'
        };
    }
    
    handleChange1 = (e) => {
        this.setState({
            type: e.target.value,
        })
    }
    handleChange2 = (e) => {
      this.setState({
          flavour: e.target.value,
      })
  }
  handleChange3 = (e) => {
    this.setState({
        size: e.target.value,
    })
}
    onSubmit = (e) => {
      if(this.state.type=="select" || this.state.flavour=="select" || this.state.size=="select")
      {
        window.confirm("Please select all options"); 
      }
      else
      {
       e.preventDefault();
       const form = {
      
        manufacturerid: "string",
  type: "ISOLATE",
  flavour: "VANILLA",
  size: "small"
       }
         {/* Send data to API*/}
         var authOptions = {
          method: 'post',
          url: 'http://localhost:3000/api/org.authentication.whey.addwhey',
          data: JSON.stringify({"manufacturerid": this.props.location.state.id,"type": this.state.type,"flavour": this.state.flavour,"size": this.state.size}),
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
    }



  render() {
   
    return (
<div class="main2">
<Form>
  
  <Form.Group controlId="type">

    <Form.Label>Type :</Form.Label>
    <Form.Control as="select" id="labs" onChange={this.handleChange1.bind(this)} value={this.state.type}>
    <option value="select">Select the type</option>
      <option value="CONCENTRATE">CONCENTRATE</option>
      <option value="ISOLATE">ISOLATE</option>
      <option value="HYDROLYZED">HYDROLYZED</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="flavour">
    <Form.Label>Flavour :</Form.Label>
    <Form.Control as="select" id="abs" onChange={this.handleChange2.bind(this)} value={this.state.flavour}>
    <option value="select">Select the flavour</option>
      <option value="BANANA_CREAM">BANANA CREAM</option>
      <option value="CAFE_MOCHA">CAFE MOCHA</option>
      <option value="COOKIES_AND_CREAM">COOKIES AND CREAM</option>
      <option value="RICH_MILK_CHOCOLATE">RICH MILK CHOCOLATE</option>
      <option value="VANILLA">VANILLA	</option>
      <option value="STRAWBERRY">STRAWBERRY</option>
      <option value="LIGHT">LIGHT</option>
      <option value="MEDIUM">MEDIUM</option>
      <option value="DARK">DARK</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="size">
    <Form.Label>Size :</Form.Label>
    <Form.Control as="select"  id="lang" onChange={this.handleChange3.bind(this)} value={this.state.size}>
  
          <option value="select">Select the size</option>
          <option value="small">SMALL</option>
          <option value="medium">MEDIUM</option>
          <option value="large">LARGE</option>
      
        </Form.Control>
        </Form.Group>
      
        <Button variant="primary"  onClick={(e) => this.onSubmit(e)}>
          Submit
        </Button>
        </Form>
       </div>
    );
  }
}

export default addWhey;
