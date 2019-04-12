import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";


function Contact(props) {
  return (
    <div className="contact">
      <span>{props.name}</span>
      <span>{props.timestamp}</span>
      <span>{props.country}</span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};


function ContactList(props) {
  return (
    <div>{props.contacts.map(c => <Contact key={c.id} country={c.country} timestamp={c.timestamp} name={c.name} />)}</div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};



class Fetch extends Component {
  // default state object
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/org.example.empty.addDistributor")
      .then(response => {
        // create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            country: c.country,
            name: c.name,
            timestamp: c.timestamp
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Fetching from rest server..</h1>
        </header>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Fetch;
