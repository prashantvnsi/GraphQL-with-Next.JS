import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App'
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'https://graphql.blacklane.io/graphql'
});

export default function render(){
  return(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
    



  