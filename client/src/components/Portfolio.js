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

class Portfolio extends Component {
    render() {
        return (
            <div className="custom-portfolio" id="portfolio">
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://placehold.it/325x400" alt="Placehold it!" />
                        <CardImgOverlay>
                            <div className="portfolio-title">
                                <CardTitle>Card Title</CardTitle>
                                <CardText>Hello world</CardText>
                            </div>
                            <Button outline color="primary">Code on Github &rarr;</Button>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placehold.it/325x400" alt="Placehold it!" />
                        <CardImgOverlay>
                            <div className="portfolio-title">
                                <CardTitle>Card Title</CardTitle>
                                <CardText>Hello world</CardText>
                            </div>
                            <Button outline color="primary">Code on Github &rarr;</Button>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placehold.it/325x400" alt="Placehold it!" />
                        <CardImgOverlay>
                            <div className="portfolio-title">
                                <CardTitle>Card Title</CardTitle>
                                <CardText>Hello world</CardText>
                            </div>
                            <Button outline color="primary">Code on Github &rarr;</Button>
                        </CardImgOverlay>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src="https://placehold.it/325x400" alt="Placehold it!" />
                        <CardImgOverlay>
                            <div className="portfolio-title">
                                <CardTitle>Card Title</CardTitle>
                                <CardText>Hello world</CardText>
                            </div>
                            <Button outline color="primary">Code on Github &rarr;</Button>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placehold.it/325x400" alt="Placehold it!" />
                        <CardImgOverlay>
                            <div className="portfolio-title">
                                <CardTitle>Card Title</CardTitle>
                                <CardText>Hello world</CardText>
                            </div>
                            <Button outline color="primary">Code on Github &rarr;</Button>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="https://placehold.it/325x400" alt="Placehold it!" />
                        <CardImgOverlay>
                            <div className="portfolio-title">
                                <CardTitle>Card Title</CardTitle>
                                <CardText>Hello world</CardText>
                            </div>
                            <Button outline color="primary">Code on Github &rarr;</Button>
                        </CardImgOverlay>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Portfolio;