import _ from 'lodash';
import fetch from 'node-fetch';

const resolvers = {
	Query: {
		rates: async (parent, args, context) => {
			try {
				const results = await (fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${args.currency}`));
				return results.json();
			} catch (e) {
				console.error(e);
			}
		},
	},
	ExchangeRates: {
		currency: (({ data: { currency }}) => currency),
		rates: ({ data: { rates }}) => {
			return _.map(rates, (rate, currency) => {
				return {
					currency, 
					rate
				};
			});
		}
	}
};

export default resolvers;