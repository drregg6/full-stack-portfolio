import React, { Component } from 'react';
import CustomNav from './CustomNav';
import {
    Container,
    Button
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div className="custom-container primary-background" id="home">
                    <div className="app-header">
                        <h1>
                            Dave<br />
                            Regg
                        </h1>
                        <h2 className="header-subtext">Full-stack developer</h2>
                        <Button outline color="primary" href="#portfolio">My work &rarr;</Button>
                    </div>
            </div>
        )
    }
}

export default Header;