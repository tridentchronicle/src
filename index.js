import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
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
import Fourth from './fourth';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';
import QrReader from 'react-qr-reader';
const divcolor = {backgroundColor: '#49A330'};



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
   <div>
<Fourth />
</div>

   <div>
   
       The entry of a new product in the market gives rise to two consequences – patronage from customers and the development of their counterfeit counterparts. 

As the patronage from customers increases, the chances of counterfeit products seeping into the market increases simultaneously and because of this, both end users and the company involved suffer from the out-turns. 

After the rise of e-commerce platforms, infiltrating counterfeit products has become far simpler, leading the manufacturer to face a domino effect of ramifications in the market. Of all the industries, it is the medical industry, especially the Supplement sector, that suffers most from devastating impacts of counterfeit products.
<br></br>
<br></br> <br></br> <br></br> <br></br>
 </div>
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
