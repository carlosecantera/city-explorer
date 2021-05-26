import React from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {

  constructor() {
    super();
    this.textInput=React.createRef();

    this.state = {
      location: null,
      map: null,
      searchQuery: '',
    };
  }

    setQuery = (e) => {
      e.preventDefault();
      // const query = e.target.value;
      // console.log('This is the query', query);
      // this.setState({ searchQuery: query });
      this.handleLocation(this.textInput.current.value);
    }

    handleLocation = async (searchQuery) => {
      console.log('City we search for', searchQuery);
      let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`);
      console.log(locationResponseData);
      this.setState( { location: locationResponseData.data[0] });
    }

    render() {
      return (
        <div className="App">
          <h1>Search City</h1>
          <form onSubmit={this.setQuery}>

            <input type="text" ref={this.textInput} />
            <button type="submit">Get Data</button>
          </form>
          {this.state.location ? this.state.location.display_name : 'Location'}
        </div>
      );
    }
}



export default App;
