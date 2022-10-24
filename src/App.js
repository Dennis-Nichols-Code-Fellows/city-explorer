import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      display_name: '',
      lat: '',
      lon: ''
    }
  }

  // handlers

  handleInput = async (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    });
  }

  getCityData = async (e) => {
    e.preventDefault();
    console.log(this.state.city);

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;

      let cityData = await axios.get(url);
      console.log(cityData.data[0]);
      this.setState({
        display_name: cityData.data[0].display_name,
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon
      });
    } catch(error) {
      console.log(error);
    }
  }




  render() {
    return (
      <>
        <Form onSubmit={this.getCityData}>
          <Form.Group className="mb-3" controlId="formCitySearch">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a city name..."
              onInput={this.handleInput}
            />
            <Form.Text className="text-muted">
              If it's a word, it's probably a city...
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

        <Card style={{ width: "20rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Best Result:{this.state.display_name}</Card.Title>
            <Card.Text>
              <ul>
                <li>Latitude: {this.state.lat}</li>
                <li>Longitude: {this.state.lon}</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default App;
