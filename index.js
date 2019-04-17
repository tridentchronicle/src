import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Fetch from './Fetch';
import Post from './Post';
import Header from './header';
import Login2 from './Login2';
import Footer from './footer';
import Home from './home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';
import QrReader from 'react-qr-reader';
import BackgroundHeader from "./bgr.jpg";

const BackgroundHead = {
  backgroundImage: 'url('+ BackgroundHeader+')',
  width: '100%',
  height: '600px',
  backgroundSize: 'cover'
  }
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

   
<div  style={BackgroundHead}>
    <BrowserRouter> 
     <Route path="/" exact component={Home} />
         <Route path = "/scan" component = {Scan} />
         <Route path = "/home" component = {Home} />
         <Route path = "/account" component = {Login2} />
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
