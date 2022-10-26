import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class FormComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return(
  
      <Form onSubmit={this.props.getCityData}>
        <Form.Group className="mb-3" controlId="formCitySearch">
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a city name..."
            onInput={this.props.handleInput}
          />
          <Form.Text className="text-muted">
            If it's a word, it's probably a city...
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
);
}
}

export default FormComponent;
