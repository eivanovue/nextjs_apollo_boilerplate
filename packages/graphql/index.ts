import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
      books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  }
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,  
  introspection: true, 
  playground: true, 
});

export default server;
