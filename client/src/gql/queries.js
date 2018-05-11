import gql from 'graphql-tag';

export const ExchangeRateQuery = gql`
query rates($currency: String!) {
	rates( currency: $currency) {
		currency
		rates {
			currency
			rate
		}
	}
}
`;