import React, { Component } from 'react';
import CustomNav from './CustomNav';
import {
    Container,
    Button
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Header extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    separateName = (str='FIRST LAST') => {
        let arr = str.split(' ');
        return {
            firstName: arr[0],
            lastName: arr[1]
        }
    }

    render() {
        console.log(`The User's name is ${this.props.user.currentUser.name}`);
        const { name } = this.props.user.currentUser;
        const nameObj = this.separateName(name);
        return (
            <div className="custom-container primary-background" id="home">
                    <div className="app-header">
                        <h1>
                            {nameObj.firstName}<br />
                            {nameObj.lastName}
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
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchUsers })(Header);