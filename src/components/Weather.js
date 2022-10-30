import React from "react";
import Accordion from "react-bootstrap/Accordion";


class Weather extends React.Component {
  render() {
  let items = [];
  console.log(this.props.weatherData);
  for (let i = 0; i < this.props.weatherData.length; i++) {
    items.push(
      <Accordion.Item eventKey={i}>
        <Accordion.Header>Weather - Day {i+1}</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li key="1">{this.props.weatherData[i].time}</li>
            <li key="2">{this.props.weatherData[i].forecast}</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    )
    } 
  return (
    <Accordion defaultActiveKey="0">
      {items}
    </Accordion>
  );
  }
}

export default Weather;