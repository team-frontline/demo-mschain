import React from 'react';
import './App.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import ActionLayer from './components/ActionLayer';
import EventLayer from './components/EventLayer';
import axios from "axios";


class App extends React.Component {
    state = {
        data: [],
        states: [],
        clicks: {
            action: false
        }
    };

    handleOnClick(event) {
        let actionStates = [
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
        ];
        event.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        // let userConfirm = confirm("Start the action?");
        let userConfirm = true;
        if (userConfirm) {
            console.log("Clicked");
            axios.get('http://localhost:8081/mschain-shopping-cart/catalogue/item')
                .then(res => {
                    console.log(res.data);
                    this.setState({states:res.data.state});
                })
                .catch(err => {
                    console.log(err);
                    // alert("Failed");
                });
            // this.setState({states:actionStates});
            console.log("states set done!");
        }
    }

    render() {
        return (
            <SplitterLayout>
                <div>
                    <ActionLayer onClick={this.handleOnClick.bind(this)}/>
                </div>
                <div>
                    <EventLayer eventStates={this.state.states}/>
                </div>
            </SplitterLayout>
        );
    }
}

export default App;
