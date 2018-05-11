import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { graphqlExpress } from 'apollo-server-express';

import debug from './utils/debugger';
import serverConfig from './configs/serverConfig';
import schema from './gql/schema';

const app = express();
app.use(logger('dev'));

app.use(serverConfig.gqlEndpoint, cors(), bodyParser.json(), graphqlExpress({
	schema
}));

app.listen(serverConfig.port, () => {
	debug(`Listening on port ${serverConfig.port}...`);
});