// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   ApolloProvider,
//   ApolloClient,
//   createNetworkInterface
// } from 'react-apollo';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import Routes from './routes';

// injectTapEventPlugin();

// const networkInterface = createNetworkInterface({
//   uri: 'http://localhost:3030/graphql'
// });

// networkInterface.use([
//   {
//     applyMiddleware(req, next) {
//       if (!req.options.headers) {
//         req.options.headers = {};
//       }
//       req.options.headers['x-token'] = localStorage.getItem('token');
//       req.options.headers['x-refresh-token'] = localStorage.getItem(
//         'refreshToken'
//       );
//       next();
//     }
//   }
// ]);

// const client = new ApolloClient({
//   networkInterface
// });

// const App = (
//   <MuiThemeProvider>
//     <ApolloProvider client={client}>
//       <Routes />
//     </ApolloProvider>
//   </MuiThemeProvider>
// );

// ReactDOM.render(App, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routes from './routes';

injectTapEventPlugin();

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3030/graphql'
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      req.options.headers['x-token'] = localStorage.getItem('token');
      req.options.headers['x-refresh-token'] = localStorage.getItem(
        'refreshToken'
      );
      next();
    }
  }
]);

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
