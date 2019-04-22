import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Fetch from './Fetch';
import Post from './Post';
import Header from './header';
import Login2 from './Login2';
import Footer from './footer';
import Home from './home';
import addWhey from './addWhey';
import sellWhey from './sellWhey';
import addDistributor from './addDistributor';
import addRetailer from './addRetailer';
import transfertoretailer from './transfertoretailer';
import transfertodistributor from './transfertodistributor';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';
import QrReader from 'react-qr-reader';
const divcolor = {backgroundColor: '#E1C683'};

class Scan extends React.Component {
  state = {
    result: 'No result'
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
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '40%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

class Interface extends React.Component {
    render() { 
        return(
         <div>
            <div>
 <Header /> </div>

   
<div>
    <BrowserRouter> 
     <Route path="/" exact component={Home} />
         <Route path = "/scan" component = {Scan} />
         <Route path = "/home" component = {Home} />
         <Route path = "/account" component = {Login2} />
         <Route path = "/addWhey" component = {addWhey} />
         <Route path = "/transfer1" component = {transfertodistributor} />
         <Route path = "/transfer2" component = {transfertoretailer} />
         <Route path = "/addDistributor" component = {addDistributor} />
         <Route path = "/addRetailer" component = {addRetailer} />
         <Route path = "/sellWhey" component = {sellWhey} />
        </BrowserRouter>
   </div>
   <div>Another div </div>
   <div style={divcolor}>Another div </div>
<div>
<Footer />
</div>
   </div> 
   
       
             );
             }
             }


ReactDOM.render(
    <Interface />,
    document.getElementById('app')
);
