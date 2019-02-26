import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

export const resolvers = {
  Subscription: {
    // App functions
    tailLog: {
      subscribe: () => pubsub.asyncIterator('tailLog')
    }
  },
  Mutation: {
    // Test function
    e2eLogUpdated: async (_: any, {log}: any) => {
      await pubsub.publish('logUpdated', {tailLog: log});
      return true;
    }
  }
};
