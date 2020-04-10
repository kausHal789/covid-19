import React from 'react';

import { Card, Chart, CountryPiker } from './components'
import { fetchData } from './api'

import Style from './App.module.css';

import image from './images/image.png';

class App extends React.Component {

  state = {
    data:{},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
    // console.log(data);
  }

  handleCountryChange = async (country) => {
    // fetch data
    const data = await fetchData(country);
    // set state
    // console.log(data);
    this.setState({ data: data, country: country });
  }

  render() {

    const { data, country } = this.state;
    // const { data } = this.state.data;
    // console.log(this.state);
    return (
      <div className={ Style.container }>
        <img src={image} alt="COVID_19" className={Style.image} />
        <Card data={data}/>
        <CountryPiker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/> 
      </div>
    );
  }

}

export default App;
