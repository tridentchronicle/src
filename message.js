import React from "react";
import axios from 'axios';
import { Table,  Button, DropdownButton, MenuItem } from 'react-bootstrap';
import './message.css';
import Card4 from './card4';


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
            owner:'nil'
          }
          this.mapper=this.mapper.bind(this);
          this.mess=this.mess.bind(this);
          this.send=this.send.bind(this);
          this.getmessages=this.getmessages.bind(this);
          this.arrayUnique=this.arrayUnique.bind(this);
        
      }
   
      componentDidMount() {
        
        this.getmessages();
        this.interval = setInterval(() => this.getmessages(), 500);
        
        
  
      }
      scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      componentDidUpdate () {
        this.scrollToBottom()
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
        this.setState({beta2: val2});
        this.interval = setInterval(() => this.mess(), 1000);
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

      mess()
      {
        if(this.state.beta==1)
        {

        return(
          <div class="lay2">
          default
          </div>
        );
        }
        else if(this.state.beta!=1)
        {
          return(
            <div>
              
          {  this.state.data3.filter((item) => (item.user_id_from ==  this.state.beta2 || item.user_id_from ==  this.state.beta ) && (item.user_id_to == this.state.beta || item.user_id_to ==  this.state.beta2) ).map((item, index) => {

 if(item.user_id_from == this.state.beta)
 {
 return (
    <div class="lay2">
       <br></br>
     
     {item.user_id_from} :{item.content}
     <br></br>
    </div>
  );
 }
 else  if(item.user_id_from == this.state.beta2)
 {
 return (
    <div class="lay1">
       <br></br>
       {item.user_id_from} :{item.content}
      <br></br>
    </div>
  );
 }
}) }
            </div>
          );

        }

      }
     
      handleChange = (e) => {
        this.setState({
            mymsg: e.target.value,
        })
    }


      
    async send(from,to,cont,dated)
      {
        axios.post('http://35.229.19.138:3005/sendmessages/', {
          user_id_from: from,
          user_id_to:to,
          content: cont,
          date_created:dated
        })
        .then((response) => {
         console.log(response)
      })
      }
    
      render() { 

        var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd ;


        return (
          <div class="main14">
          <p className="h5 text-center mb-4">My messages</p>
            {
this.state.unique3.filter((item) => item != this.props.TextBoxValue[0] ).map((item, index) => {
  return (
    <div>
      {item} 
      <button onClick={(e) => this.mapper(this.props.TextBoxValue[0],item)}>View Message</button>
    </div>
  );
})
            }
            <div class="main15" id="main15">
            {this.mess()}
            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
            </div>
            <label>Your Message : </label>
            
<input type="text" name="mymsg" onChange={this.handleChange}/>
<input type="submit" placeholder="Enter something..."  value="Send" onClick={(e) => this.send(this.state.beta,this.state.beta2,this.state.mymsg,today)}/>
            
           </div>
        );
      }
    }
    
export default Message;