import { createServer } from 'node:http';
import { createSchema, createYoga } from "graphql-yoga";

const port = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
        goodbye: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from Yoga!',
        goodbye: () => 'Goodbye from Yoga!'
      }
    }
  })
});

const server = createServer(yoga);

server.listen(port, () => {
  console.info(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
