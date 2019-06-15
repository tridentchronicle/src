import React from "react";
import axios from 'axios';
import { Table,  Button, DropdownButton, MenuItem } from 'react-bootstrap';
import './message.css';
import Card4 from './card4';
import {Redirect,BrowserRouter} from 'react-router-dom';


class Message extends React.Component {
    constructor(){
        super() 
          this.state = {
            data2: [],
            data3:[],
            beta:'1',
            beta2:'1',
            mymsg:'',
            unique:[],
            unique2:[],
            unique3:[],
            counter:0,
            message2:false,
            owner:'nil'
          }
          this.mapper=this.mapper.bind(this);
          this.getmessages=this.getmessages.bind(this);
          this.arrayUnique=this.arrayUnique.bind(this);
        
      }
   
      componentDidMount() {
        
        this.getmessages();
        this.interval = setInterval(() => this.getmessages(), 500);
      }
      
     
      getmessages()
      {

        axios.post('http://35.229.19.138:3005/mymessages/', {
          email: this.props.TextBoxValue[0]
        })
        .then((response) => {
          this.setState({ data2 : response.data.output });      
          var obj = this.state.data2.sort((a,b) => (a.message_id > b.message_id) ? 1 : ((b.message_id > a.message_id) ? -1 : 0)); 
          this.setState({ data3 : obj }); 
          
        

         
          for(var i=0;i<this.state.data3.length;i++)
          {

            let b = this.state.unique.slice(); //creates the clone of the state
            
              b[i] = this.state.data3[i].user_id_to;
            for(var j=0;j<i+1;j++)
            {
              
            if(this.state.unique[j] == b[i] )
            {
              this.setState({counter:1});
            }
          }
          
          if(this.state.counter==0){
            this.setState({unique: b});
          }
          
          this.setState({counter:0});
          }


          for(var i=0;i<this.state.data3.length;i++)
          {

            let a = this.state.unique2.slice(); //creates the clone of the state
            
              a[i] = this.state.data3[i].user_id_from;
            for(var j=0;j<i+1;j++)
            {
              
            if(this.state.unique2[j] == a[i] )
            {
              this.setState({counter:1});
            }
          }
          
          if(this.state.counter==0){
            this.setState({unique2: a});
          }
          
          this.setState({counter:0});
          }

        this.state.unique3 = this.arrayUnique(this.state.unique.concat(this.state.unique2));

        
        
      })

      }


      mapper(val,val2)
      {
        this.setState({beta: val});
        this.setState({message2: true});
        this.setState({beta2: val2});
       
      }

      arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    
        return a;
    }


      render() { 
if(this.state.message2)
{
  return (


    <Redirect to={{
      pathname: '/chat',
      state: { uid: this.props.TextBoxValue[0],ref:this.state.beta2,utype:this.props.TextBoxValue[1]}
  }} />

    )
}


        return (
          <div class="main14">
          <p className="h5 text-center mb-4">My messages</p>
            {
this.state.unique3.filter((item) => item != this.props.TextBoxValue[0] ).map((item, index) => {
  return (
    
      <div class="lab">

<div class="row">
    <button class="tablinks" onClick={(e) => this.mapper(this.props.TextBoxValue[0],item)}>
     <div class="columnx2" >
    <img src="https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png" width="30px" height="30px"/> 
     </div>
    <div class="columnx">
    {item}
    </div>
 
  <div class="columnx3">
   2019
     </div>
    </button>

</div>

</div>
     
  );
})
}
           </div>
        );
      }
    }
    
export default Message;