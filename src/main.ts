import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { createConnection } from "typeorm";
import resolvers from "./resolvers";

(async () => {
  const _ = await createConnection();

  const server = new ApolloServer({
    typeDefs: importSchema("src/schema/schema.gql"),
    resolvers,
  });

  server.listen().then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
