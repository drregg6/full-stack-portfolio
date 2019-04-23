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

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, url, technologies } = this.props.app;
    const renderTech = technologies.join(', ')

    return (
      <React.Fragment>
        <a href={url} className="portfolio-card-link card">
          <CardImg top width="100%" src={Image1} alt="Placehold it!" />
          <CardImgOverlay className="flex-column">
            <div className="portfolio-title portfolio-font-color">
              <CardTitle>{name}</CardTitle>
              <CardText>{renderTech}</CardText>
            </div>
          </CardImgOverlay>
        </a>
      </React.Fragment>
    )
  }
}

export default PortfolioItem;