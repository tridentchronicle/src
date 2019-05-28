import React from 'react';
import AddWhey from './addWhey';
import SellWhey from './sellWhey';
import TransferD from './transfertodistributor';
import TransferR from './transfertoretailer';
import AddDistributor from './addDistributor';
import AddRetailer from './addRetailer';
import Header2 from './header2';
import Footer from './footer';
import Fourth from './fourth';
import Inventory from './inventory';
import Fetch from './Fetch';
import Distributors from './Distributors';
import Retailers from './Retailers';

import './dashboard.css';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

class MainPageComponent extends React.Component {
  render() {
    return (
      
      <div className="main">
        <h2>Fixed Full-height Side Nav</h2>
        <h3>
          Try to scroll this area, and see how the sidenav sticks to the page
        </h3>
        <p>
          Notice that this div element has a left margin of 25%. This is because
          the side navigation is set to 25% width. If you remove the margin, the
          sidenav will overlay/sit on top of this div.
        </p>
        <p>
          Also notice that we have set overflow:auto to sidenav. This will add a
          scrollbar when the sidenav is too long (for example if it has over 50
          links inside of it).
        </p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        
      </div>
     
    );
  }
}

class SideNavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "home",
    TextBoxValue: []
  };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }
  SubmitValue = (e) => {
    this.props.handleData(this.state.TextBoxValue)
 }
   

       onChange=(e)=>{
    this.setState({TextBoxValue: e.target.value})
       } 


  render() {
    const { activeItem } = this.state;
    this.state.TextBoxValue[0]=this.props.location.state.ref;
    this.state.TextBoxValue[1]=this.props.location.state.utype;
    console.log("try"+this.state.TextBoxValue[0]+this.state.TextBoxValue[1])
    return (
      <div>
        <Header2 />
      <div>
      {(() => {
        if(this.props.location.state.utype=="Manufacturer")
        {
          return(
        <Menu vertical id="side-menu">
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Add Whey Protein"
            active={activeItem === "addwhey"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Add Distributor"
            active={activeItem === "adddistributor"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Add Retailer"
            active={activeItem === "addretailer"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Transfer to distributor"
            active={activeItem === "transferd"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Transfer to retailer"
            active={activeItem === "transferr"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Sell Whey Protein"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Whey Protein Inventory"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Distributors"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Retailers"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
        </Menu>)
      }
      else if(this.props.location.state.utype=="Distributor")
        {
          return(
        <Menu vertical id="side-menu">
          <Menu.Item
            name="Home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name="Transfer to retailer"
            active={activeItem === "transferr"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Sell Whey Protein"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Whey Protein Inventory"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name="Retailers"
            active={activeItem === "sell"}
            onClick={this.handleItemClick}
          />
        </Menu>)
      }
      else if(this.props.location.state.utype=="Retailer")
      {
        return(
      <Menu vertical id="side-menu">
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Sell Whey Protein"
          active={activeItem === "sell"}
          onClick={this.handleItemClick}
        />
         <Menu.Item
           name="Whey Protein Inventory"
          active={activeItem === "sell"}
          onClick={this.handleItemClick}
        />
      </Menu>)
    }

        })()}
        {(() => {
             if(this.state.activeItem=="Add Whey Protein")
             { 
                return (
                <AddWhey TextBoxValue={this.state.TextBoxValue}/> )
             }
             else if(this.state.activeItem=="Add Distributor"){
              return( <AddDistributor />)
             }
             else if(this.state.activeItem=="Sell Whey Protein"){
                return( <SellWhey TextBoxValue={this.state.TextBoxValue} />)
               }
               else if(this.state.activeItem=="Transfer to retailer"){
                return( <TransferR />)
               }
               else if(this.state.activeItem=="Transfer to distributor"){
                return( <TransferD />)
               }
               else if(this.state.activeItem=="Add Retailer"){
                return( <AddRetailer />)
               }
               else if(this.state.activeItem=="Distributors"){
                return( <Distributors />)
               }
               else if(this.state.activeItem=="Retailers"){
                return( <Retailers />)
               }
               
               else if(this.state.activeItem=="Whey Protein Inventory"){
                return(  <Inventory TextBoxValue={this.state.TextBoxValue}/>)
               }
               else{
                return( <MainPageComponent />)
               }


      })()}
       
   
        
      </div>
       <Fourth />
       <Footer />
       </div>
    );
  }
}

export default SideNavComponent;