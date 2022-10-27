import React from "react";
// import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

class Movies extends React.Component {
  render() {
  let items = [];
  for (let i = 0; i < this.props.movieData.length; i++) {
    let img_url ='';
    if (this.props.movieData[i].poster_path) {img_url = this.props.movieData[i].poster_url}
    else img_url = './public/images/action.jpg';

    items.push(
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={img_url}
          alt={this.props.movieData[i].title}
        />
        <Carousel.Caption>
          <h3>{this.props.movieData[i].title}</h3>
          <p>Released on: {this.props.movieData[i].release}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  } 

  return (
    <Carousel>
      {items}  
    </Carousel>
  );
  }
}

export default Movies;


   
  