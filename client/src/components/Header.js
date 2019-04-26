import React, { Component } from 'react';
import {
    Button
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { fetchUsers, findUser } from '../actions/userActions';

class Header extends Component {

    componentDidMount() {
        this.props.findUser('daveregg');
    }

    render() {
        let {firstName, lastName} = this.props.general;

        return (
            <div className="custom-container primary-background" id="home">
                    <div className="app-header">
                        <h1>
                            {firstName}<br />
                            {lastName}
                        </h1>
                        <h2 className="header-subtext">Full-stack developer</h2>
                        <Button outline color="primary" href="#portfolio">My work &rarr;</Button>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        general: state.user.general
    }
}

export default connect(
    mapStateToProps,
    {
        fetchUsers,
        findUser
    }
)(Header);