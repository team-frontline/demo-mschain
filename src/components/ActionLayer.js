import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

class ActionLayer extends React.Component {
    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">Actions</h1>
                    <Button onClick={this.props.onClick}>Click!</Button>
                </Jumbotron>
            </Container>
        )
    }
}

export default ActionLayer;