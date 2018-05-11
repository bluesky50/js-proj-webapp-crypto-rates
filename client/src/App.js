import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes/Index';

const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' });

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

class App extends Component {
	render() {
	  return (
		  <BrowserRouter>
			  <ApolloProvider client={client}>
				  <Routes />
			  </ApolloProvider>
		  </BrowserRouter>
	  );
	}
  }

export default App;
