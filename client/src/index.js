import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes';

injectTapEventPlugin();

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  networkInterface
});

const App = (
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(App, document.getElementById('root'));
