import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      Place: '',
    }
  }
  toWeather = (City) => {
    return weather;
  }

  handleWeatherChange(Place) {
    this.setState({ weather });
  }

  ComponetShouldUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name || this.state.Place !== nextState.Weather;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initial && nextProps.initialCount > this.state.Place) {
      this.setState({ Weather });
    }
  }

  componentDidUpdate(PreProps, prevState) {
    fetch("https://openweathermap.org/current")
      .then(res => res.json()).then((result) => { this.setState({ isLoaded: true, items: result.items }); },
        //to handle errors 
        (error) => {
          this.setState({
            isLoaded
          })
        }
  }
  
  render() {
    return (
      <CitInput
      Place={'City'}
      onPlaceChange={this.handleCityChange}
      />
    );
  }
}

export default App;
