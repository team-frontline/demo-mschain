import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

function EventLayer() {
    return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">Events in the Service</h1>
                {[
                    {type:'light',batchType:'success', message:'Success'},
                    {type:'light',batchType:'success', message:'Success'},
                    {type:'light',batchType:'success', message:'Success'},
                    {type:'light',batchType:'danger', message:'Failed'},
                    {type:'light',batchType:'danger', message:'Failed'}
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant.type}>
                        <Badge variant={variant.batchType}>{variant.message}</Badge> SSL/TLS Communication Established
                    </Alert>
                ))}
            </Jumbotron>
        </Container>
    )
};

export default EventLayer;