import React from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Header from "./components/Nav";
import Alert from "react-bootstrap/Alert";
import FormComponent from "./components/Form";
import Weather from './components/Weather';
import Movies from "./components/Movies";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      city: "",
      display_name: "",
      lat: "",
      lon: "",
      map_src: "",
      error: false,
      errorMessage: "",
      weatherData: [],
      weather_error: false,
      weatherMessage: "",
      movieData: [],
      movie_error: false,
      movieMessage: "",
    };
  }

  // handlers

  handleInput = async (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value,
    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    console.log(this.state.city);

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;

      let cityData = await axios.get(url);
      console.log(cityData.data[0]);
      this.setState(
        {
          cityData: cityData.data,
          error: false,
        },
        this.getSecondaryData
      );

      console.log(this.state.cityData);
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,
      });
    }
  };

  getWeather = async () => {
    try {
      let weather_url = `${process.env.REACT_APP_SERVER}weather?lat=${this.state.cityData[0].lat}&lon=${this.state.cityData[0].lon}`;
      let weather_data = await axios.get(weather_url);
      this.setState({
        weatherData: weather_data.data,
      });
    } catch (error) {
      this.setState({
        weather_error: true,
        weatherMessage: error.message,
      });
    }
  };

  getMovies = async () => {
    try {
      let movie_url = `${process.env.REACT_APP_SERVER}movies?searchQuery=${this.state.city}`;
      let movie_data = await axios.get(movie_url);
      console.log(movie_data);
      this.setState({
        movieData: movie_data.data.data,
      });
    } catch (error) {
      this.setState({
        movie_error: true,
        movieMessage: error.message,
      });
    }
  };

  getSecondaryData = () => {
    this.getWeather();
    this.getMovies();
  }

  cityCards = () => {
    let cityList = [];
    for (let i = 0; i < this.state.cityData.length; i++) {
      cityList.push(
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData[i].lat},${this.state.cityData[i].lon}&zoom=13`}
          />
          <Card.Body>
            <Card.Title>
              Result {i + 1}: {this.state.cityData[i].display_name}
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Latitude: {this.state.cityData[i].lat}</li>
                <li>Longitude: {this.state.cityData[i].lon}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    return cityList;
  };



  render() {
    let display_cities = this.cityCards();
    console.log(this.state.weatherData);
    return (
      <>
        <Header></Header>
        <div className="formContainer">
          <FormComponent
            getCityData={this.getCityData}
            handleInput={this.handleInput}
          ></FormComponent>
        </div>

        {this.state.weatherData.length && (
          <Weather weatherData={this.state.weatherData}></Weather>
        )}

        
        {this.state.movieData.length && (
          <Movies movieData={this.state.movieData}></Movies>
        )}

        {this.state.error ? (
          <Alert variant="warning">{this.state.errorMessage}</Alert>
        ) : (
          <div className="cityCards">{display_cities}</div>
        )}
      </>
    );
  }
}

export default App;
