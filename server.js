const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
// seem like "repository"
const resolvers = require('./graphql/repository');
// seem like controller/route 
const typeDefs =  gql(fs.readFileSync('./graphql/controller.graphql', 
{encoding: 'utf-8'}));

const server = new ApolloServer({typeDefs, resolvers});

server.listen(5000).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
