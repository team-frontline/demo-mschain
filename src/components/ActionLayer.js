import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function ActionLayer() {
    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Actions</h1>
                <Button>Click!</Button>
            </Jumbotron>
        </Container>
    )
};

export default ActionLayer;