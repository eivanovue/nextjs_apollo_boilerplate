import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello !',
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,  
  introspection: true, 
  playground: true, 
});

export default server;
