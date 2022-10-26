import React from "react";
import Accordion from "react-bootstrap/Accordion";


class Weather extends React.Component {
  render() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Weather - Day 1</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li key='1'>{this.props.weatherData[0].date}</li>
            <li key='2'>{this.props.weatherData[0].description}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Weather - Day 2</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li key='3'>{this.props.weatherData[1].date}</li>
            <li key='4'>{this.props.weatherData[1].description}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Weather - Day 3</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li key='5'>{this.props.weatherData[2].date}</li>
            <li key='6'>{this.props.weatherData[2].description}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
  }
}

export default Weather;