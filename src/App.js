import React from 'react';
import './App.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import ActionLayer from './components/ActionLayer';
import EventLayer from './components/EventLayer';
import axios from "axios";

// var https = require('https');
// var fs  = require('fs');

import https from 'https';
import fs from 'fs';

class App extends React.Component {
    state = {
        data: [],
        states: [],
        clicks: {
            action: false
        }
    };

    handleOnClick(event) {
        event.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        // let userConfirm = confirm("Start the action?");
        let userConfirm = true;
        if (userConfirm) {
            // console.log("Clicked");
            axios.get('https://localhost:8081/mschain-shopping-cart/catalogue/item')
                .then(res => {
                    // console.log(res.data.data.states);
                    this.setState({states:res.data.data.states});
                })
                .catch(err => {
                    console.log(err);
                    // alert("Failed");
                });
            // this.setState({states:actionStates});
            // console.log("states set done!");
        }
    }

    // handleOnClick(event) {
    //     let options = {
    //         hostname: 'localhost',
    //         port: 8081,
    //         path: '/mschain-shopping-cart/catalogue/item',
    //         method: 'GET',
    //         key: fs.readFileSync('/security/chameera3-new.key',"utf8"),
    //         cert: fs.readFileSync('/ecurity/chameera3-new.pem',"utf8"),
    //         passphrase: 'pass123'
    //     };
    //         event.preventDefault();
    //         // eslint-disable-next-line no-restricted-globals
    //         // let userConfirm = confirm("Start the action?");
    //         let userConfirm = true;
    //         if (userConfirm) {
    //             // console.log("Clicked");
    //             let req = https.request(options, function(res) {
    //                 console.log(res);
    //                 res.on('data', function(d) {
    //                     process.stdout.write(d);
    //                 });
    //             });
    //
    //             req.end()
    //             // this.setState({states:actionStates});
    //             // console.log("states set done!");
    //         }
    //     }

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
