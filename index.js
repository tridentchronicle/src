import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Header from './header';

class Interface extends React.Component {
    render() { 
        return(
            <div>
                <Header /> 
<div>First div 
    </div>
</div>        
             );
             }
             }


ReactDOM.render(
    <Interface />,
    document.getElementById('app')
);