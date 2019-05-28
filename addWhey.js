import React from 'react';
import axios from 'axios';
import './addWhey.css';
import { Form,Col,Row,Button } from 'react-bootstrap';

class addWhey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type: 'select',
          flavour: 'select',
          size: 'select',
          number:''
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

handleChange4 = (e) => {
  this.setState({
      number: e.target.value,
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
          url: 'http://35.229.19.138:3000/api/org.authentication.whey.addwhey',
          data: JSON.stringify({"email": this.props.TextBoxValue[0],"type": this.state.type,"flavour": this.state.flavour,"size": this.state.size}),
          headers: {
            'Content-Type': 'application/json'
           },
          json: true
         };
         for(var i=0;i<this.state.number;i++)
         {
      axios(authOptions)
         .then((response) => {
             console.log(response);
             })
         .catch((error) => {
            alert(error)
           })
          }}
    }



  render() {
   console.log(this.props.TextBoxValue[0])
    return (
<div class="main2">
<p className="h5 text-center mb-4">ADD WHEY PROTEIN</p>
<Form>
<Form.Group  controlId="fd">
    <Form.Label >
      Quantity:
    </Form.Label>
    
      <Form.Control type="text" placeholder="Specify number of whey protein(s) to be added"  onChange={this.handleChange4.bind(this)} value={this.state.number} />
    
  </Form.Group>
  
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
      <div className="text-center">
        <Button variant="outline-success" size="lg"   onClick={(e) => this.onSubmit(e)}>
          ADD
        </Button>
        </div>
        </Form>
       </div>
    );
  }
}

export default addWhey;
