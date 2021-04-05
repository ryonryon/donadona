import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import resolvers from "./resolvers";

export default new ApolloServer({
  typeDefs: importSchema("src/graphql/schema/schema.gql"),
  resolvers,
  playground: true,
});
