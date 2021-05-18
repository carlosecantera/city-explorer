import React from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  fetchData = () => {
    axios.get('https://us1.locationiq.com/v1/search.php')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }

  fetchDataCityExplorer = CityExplorer () => {
    let response = await axios.get('https://us1.locationiq.com/v1/search.php');
    console.log(response);
  }


  render(); {
    return (
      <div className="App">
        <button onClick={this.fetchData}>Get Data</button>
      </div>
    );
  }
}



export default App;
