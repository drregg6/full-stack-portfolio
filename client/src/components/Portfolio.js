import React, { Component } from 'react';
import {
    Container,
    CardDeck,
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import Image1 from '../img/image1.jpg';
import Image2 from '../img/image2.jpg';
import Image3 from '../img/image3.jpg';
import Image4 from '../img/image4.jpg';
import Image5 from '../img/image5.jpg';

class Portfolio extends Component {
  render() {
    return (
      <div className="custom-portfolio component-margin" id="portfolio">
        <CardDeck>
          <a href="#" className="portfolio-card-link">
            <Card>
              <CardImg top width="100%" src={Image1} alt="Placehold it!" />
              <CardImgOverlay>
                <div className="portfolio-title portfolio-font-color">
                  <CardTitle>Museum App</CardTitle>
                  <CardText>React, APIs, React Router</CardText>
                </div>
              </CardImgOverlay>
            </Card>
          </a>
          <a href="#" className="portfolio-card-link">
            <Card>
              <CardImg top width="100%" src={Image2} alt="Placehold it!" />
              <CardImgOverlay>
                <div className="portfolio-title portfolio-font-color">
                  <CardTitle>Weather App</CardTitle>
                  <CardText>React, APIs</CardText>
                </div>
              </CardImgOverlay>
            </Card>
          </a>
          <a href="#" className="portfolio-card-link">
            <Card>
              <CardImg top width="100%" src={Image3} alt="Placehold it!" />
              <CardImgOverlay>
                <div className="portfolio-title portfolio-font-color">
                  <CardTitle>Drumkit</CardTitle>
                  <CardText>React, Audio</CardText>
                </div>
              </CardImgOverlay>
            </Card>
          </a>
        </CardDeck>
        <CardDeck>
          <a href="#" className="portfolio-card-link">
            <Card>
              <CardImg top width="100%" src={Image4} alt="Placehold it!" />
              <CardImgOverlay>
                <div className="portfolio-title portfolio-font-color">
                  <CardTitle>Portfolio</CardTitle>
                  <CardText>React, Redux, MongoDB, Mongoose</CardText>
                </div>
              </CardImgOverlay>
            </Card>
          </a>
          <a href="#" className="portfolio-card-link">
            <Card>
              <CardImg top width="100%" src={Image5} alt="Placehold it!" />
              <CardImgOverlay>
                <div className="portfolio-title portfolio-font-color">
                  <CardTitle>US GDP</CardTitle>
                  <CardText>D3.js</CardText>
                </div>
              </CardImgOverlay>
            </Card>
          </a>
          <a href="#" className="portfolio-card-link">
            <Card className="see-more-card">
              <div className="portfolio-title">
                <i className="far fa-grin-alt fa-5x"></i>
                <CardTitle>Check out more on my Github</CardTitle>
              </div>
            </Card>
          </a>
        </CardDeck>
      </div>
    )
  }
}

export default Portfolio;