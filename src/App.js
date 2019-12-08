import React from 'react';
import './App.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import ActionLayer from './components/ActionLayer';
import EventLayer from './components/EventLayer';


class App extends React.Component {
  render() {
    return (
      <SplitterLayout>
        <div>
          <ActionLayer />
        </div>
        <div>
          <EventLayer />
        </div>
      </SplitterLayout>
    );
  }
}

export default App;
