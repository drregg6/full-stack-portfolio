import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import {
    CardDeck,
    CardTitle
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { getSubdocument } from '../actions/userActions';

class Portfolio extends Component {
  componentDidMount() {
    this.props.getSubdocument(this.props.username, 'portfolio');
  }

  render() {
    const apps = this.props.portfolio !== undefined ? this.props.portfolio.apps : [];
    const firstThreeApps = apps !== undefined ? apps.slice(0,3) : [];
    const lastThreeApps = apps !== undefined ? apps.slice(3) : [];

    const renderFirstThree = firstThreeApps !== undefined ? (
      firstThreeApps.map(app => <PortfolioItem app={app} key={app._id} />)
    ) : (<h1>Workin on it</h1>)
    const renderLastThree = lastThreeApps !== undefined ? (
      lastThreeApps.map(app => <PortfolioItem app={app} key={app._id} />)
    ) : (
      <h1>Workin on it</h1>
    );

    return (
      <div className="custom-portfolio component-margin header-invasion-margin-top" id="portfolio">
        <CardDeck>
          {renderFirstThree}
        </CardDeck>
        <CardDeck className="inner-margin">
          {renderLastThree}
          <a href="https://github.com/drregg6" className="portfolio-card-link card see-more-card">
            <div className="portfolio-title">
              <i className="far fa-grin-alt fa-5x inner-margin"></i>
              <CardTitle className="inner-margin">Check out more on my Github</CardTitle>
            </div>
          </a>
        </CardDeck>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        portfolio: state.user.portfolio
    }
}

export default connect(
    mapStateToProps,
    { getSubdocument }
)(Portfolio);