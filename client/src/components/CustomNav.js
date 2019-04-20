import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class CustomNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="custom-nav">
                <Container>
                    <Navbar fixed="top" light expand="md">
                        <NavbarBrand href="#">daveregg</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#portfolio">Portfolio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default CustomNav;