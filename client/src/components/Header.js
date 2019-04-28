import React, { Component } from 'react';
import {
    Button
} from 'reactstrap';

class Header extends Component {

    render() {
        const {firstName, lastName} = this.props.general !== undefined ? this.props.general : 'Loading user...';

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

export default Header;