import React from 'react';
import './App.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import ActionLayer from './components/ActionLayer';
import EventLayer from './components/EventLayer';


class App extends React.Component {
    state = {
        data: [],
        states: [
            {
                "sequenceID": 1,
                "stateDescription": "SEND_REQUEST_TO_SERVER",
                "stateMessage": "SUCCESS"
            },
            {
                "sequenceID": 2,
                "stateDescription": "ESTABLISH_TLS_CONNECTION",
                "stateMessage": "SUCCESS"
            },
            {
                "sequenceID": 3,
                "stateDescription": "RECEIVED_SEVER_RESPONSE",
                "stateMessage": "SUCCESS"
            },
            {
                "sequenceID": 4,
                "stateDescription": "SEND_CERT_TO_MSCHAIN",
                "stateMessage": "SUCCESS"
            },
            {
                "sequenceID": 5,
                "stateDescription": "RECEIVED_MSCHAIN_RESPONSE",
                "stateMessage": "FAILED"
            },
            {
                "sequenceID": 6,
                "stateDescription": " VALIDATE_SERVER_CERTIFICATE",
                "stateMessage": "FAILED"
            }
        ]
    };

    render() {
        return (
            <SplitterLayout>
                <div>
                    <ActionLayer/>
                </div>
                <div>
                    <EventLayer/>
                </div>
            </SplitterLayout>
        );
    }
}

export default App;
