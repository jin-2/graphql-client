import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apolloCient';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div className="app"></div>
      </ApolloProvider>
    );
  }
}

export default App;
