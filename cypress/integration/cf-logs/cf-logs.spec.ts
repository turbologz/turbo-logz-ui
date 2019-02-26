import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getLogText, navigateToCfLogViewer } from '../../support/cf-logs/cf-logs.po';

const logMutation = gql`
  mutation e2eLogUpdated($log: CloudFoundryLogInput!){
    e2eLogUpdated(log: $log)
  }
`;


describe('Cf Logs', () => {

  const log = {
    host: 'thor.prod.prod-blog-backend',
    ident: 'abc123',
    message: '\u001b[34mℹ\u001b[39m \u001b[90m｢wdm｣\u001b[39m: Compiled successfully.\n',
    time: 1234,
    pid: '[RTR/11]',
    tag: 'cf.app.user.info'
  };

  let client;

  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({isLoggingIn: false, isLoggedIn: true}));

    const wsClient = new SubscriptionClient(`ws://localhost:3001/subscriptions`, {
      reconnect: true
    });

    const wsLink = new WebSocketLink(wsClient);

    client = new ApolloClient({link: wsLink, cache: new InMemoryCache()});

    navigateToCfLogViewer();
  });

  it('should display logs received from server', () => {
    client.mutate({mutation: logMutation, variables: {log}});
  });

});
