import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

class EventLayer extends React.Component {
    render() {
        let eventStates = this.props.eventStates;
        if (eventStates.length > 0) {
            console.log(eventStates.length);
        }
        let states = [
            eventStates.sendRequestToServer,
            eventStates.establishTLSConnection,
            eventStates.receivedServerResponse,
            eventStates.sendCertToMSchain,
            eventStates.receivedMSChainResponse,
            eventStates.validateServerCertificate,
        ];

        var i;
        for (i = 0; i < 5; i++) {
            if (states[i] === undefined){states=[]; break;}
        }
        // if (this.props.eventStates.length > 0) {
        //     states = []
        // }

        console.log(states);
        return (
            <Container className="p-3">
                {/*<Jumbotron>*/}
                {/*    <h1 className="header">Events in the Service</h1>*/}
                {/*    {[*/}
                {/*        {type: 'light', batchType: 'success', message: 'Success'},*/}
                {/*        {type: 'light', batchType: 'success', message: 'Success'},*/}
                {/*        {type: 'light', batchType: 'success', message: 'Success'},*/}
                {/*        {type: 'light', batchType: 'danger', message: 'Failed'},*/}
                {/*        {type: 'light', batchType: 'danger', message: 'Failed'}*/}
                {/*    ].map((variant, idx) => (*/}
                {/*        <Alert key={idx} variant={variant.type}>*/}
                {/*            <Badge variant={variant.batchType}>{variant.message}</Badge> SSL/TLS Communication*/}
                {/*            Established*/}
                {/*        </Alert>*/}
                {/*    ))}*/}
                {/*</Jumbotron>*/}
                <Jumbotron>
                    <h1 className="header">Events in the Service</h1>
                    {states.map((variant, idx) => (
                        <Alert key={idx} variant='light'>
                            <Badge
                                variant={variant.stateMessage.toLowerCase() === "success" ? "success" : "danger"}>{variant.stateMessage}</Badge> {variant.stateDescription}
                        </Alert>
                    ))}
                </Jumbotron>
            </Container>
        )
    }
}

export default EventLayer;