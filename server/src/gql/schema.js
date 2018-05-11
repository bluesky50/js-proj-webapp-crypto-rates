import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
	type Query {
		rates(currency: String!): ExchangeRates
	}

	type ExchangeRates {
		currency: String
		rates: [ExchangeRate]
	}

	type ExchangeRate {
		currency: String
		rate: String
	}
`;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;