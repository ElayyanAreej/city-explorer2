import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import Form from 'react-bootstrap/Form'
// import {Button} from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      citySearch: '',
      cityImg: '',
      showData: false
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    console.log('inside getlocation function');
    await this.setState({ showData: true })
    await this.setState({ citySearch: e.target.city.value })

    console.log('citySearch', this.state.citySearch);
    console.log(process.env.REACT_APP_LOCKEY);
    let loc = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCKEY}&q=${this.state.citySearch}&format=json`;
    let result = await axios.get(loc);

    await this.setState({ cityData: result.data[0] })
    // console.log('data',this.state.cityData.data);
    console.log('data', this.state.cityData);

    let locImg = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCKEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=18`;
    let result2 = await axios.get(locImg);
    console.log('url', result2);

    await this.setState({ cityImg: result2.config.url })
    console.log('url', this.state.cityImg);


  }


  render() {
    return (
      <>
        <h1>City Explorer</h1>
        {/* <input type="text"  placeholder="City Name"/> */}
        {/* <button onSubmit={this.getLocation}>Get The Map</button> */}
        <form onSubmit={this.getLocation}>
          <label>City Name</label>
          <input type="text" placeholder="Enter City Name" name='city' />


          <button> Get The Map </button>

        </form>
        {this.state.showData &&
        <p>{this.state.citySearch} Lat:{this.state.cityData.lat} /Lon:{this.state.cityData.lon} </p>}
        {this.state.showData &&
<img src={`${this.state.cityImg}`} />
        }






      </>
    )
  }


}
export default App;



