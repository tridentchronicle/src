import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Header from './header';
import Footer from './footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class Interface extends React.Component {
    render() { 
        return(
            <div>
                <Header /> 
<div>BODY
<div> <Footer />
    </div>
	</div>
</div>        
             );
             }
             }


ReactDOM.render(
    <Interface />,
    document.getElementById('app')
);