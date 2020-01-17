import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";

import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 7000);

const app = express();

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "X-Password-Expired",
      "Access-Control-AllowOrigin, Origin, X-Requested-With, Content-Type, Accept"
    ]
  })
);

/*
const apolloServer = new ApolloServer({ resolvers, typeDefs });
apolloServer.applyMiddleware({ app, path: "/graphql" });
*/

app.listen(PORT, () => console.log(`GSD Server listening on port ${PORT}.`));
