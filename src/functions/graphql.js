import { ApolloServer } from 'apollo-server-lambda';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from '../resolvers';
import typeDefs from '../schema/graphql';
import dbConnectionMiddleware from '../middleware/dbConnectionMiddleware';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const schemaWithMiddleware = applyMiddleware(schema, dbConnectionMiddleware);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  introspection: true,
});

exports.handler = server.createHandler();
