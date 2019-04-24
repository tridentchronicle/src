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
import ManfWelcome from './ManfWelcome';
import DistWelcome from './DistWelcome';
import RetWelcome from './RetWelcome';
import Scanner from './Scanner';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';
import QrReader from 'react-qr-reader';
const divcolor = {backgroundColor: '#E1C683'};



class Interface extends React.Component {
    render() { 
        return(
         <div>
            <div>
 <Header /> </div>

   
<div>
    <BrowserRouter> 
     <Route path="/" exact component={Home} />
         <Route path = "/scan" component = {Scanner} />
         <Route path = "/home" component = {Home} />
         <Route path = "/account" component = {Login2} />
         <Route path = "/ManfWelcome" component = {ManfWelcome} />
         <Route path = "/DistWelcome" component = {DistWelcome} />
         <Route path = "/RetWelcome" component = {RetWelcome} />
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
