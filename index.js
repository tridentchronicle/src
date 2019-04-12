import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Fetch from './Fetch';
import Post from './Post';
import Header from './header';
import Footer from './footer';
import Home from './home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Router, Route, Link, BrowserRouter} from 'react-router-dom';
import QrReader from 'react-qr-reader'


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
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

class Interface extends React.Component {
    render() { 
        return(
            <div> <Header />
        <div><Post />   
        <div><Fetch /></div>

    <div>
    <BrowserRouter> 
     <Route path="/" exact component={Home} />
         <Route path = "/scan" component = {Scan} />
         <Route path = "/home" component = {Home} />
        

   </BrowserRouter>
    
<div> <Footer />
</div>
</div></div>
    
	</div>
    
   
       
             );
             }
             }


ReactDOM.render(
    <Interface />,
    document.getElementById('app')
);
