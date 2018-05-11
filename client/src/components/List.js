import React from 'react';
import numeral from 'numeral';
import { graphql } from 'react-apollo';
import { ExchangeRateQuery } from '../gql/queries';

import CircularProgress from 'material-ui/CircularProgress';
import { List, ListItem } from 'material-ui/List';

const ExchangeRateList = ({ 
	currency: currentCurrency,
	onCurrencyChange,
	rates,
	loading,
}) => (
	<List>
		{ loading ? (
			<CircularProgress />
		) : ( 
			rates.filter(
				({ currency }) => {
					return (currency !== currentCurrency &&
					["USD", "BTC", "LTC", "EUR", "JPY", "ETH"].includes(currency));
				}
			).map(({ currency, rate }, idx, rateArr) => {
				console.log(currency);
				return (
					<ListItem key={currency} onClick={() => onCurrencyChange(currency)} primaryText={`${currency}: ${(rate > 1) ? numeral(rate).format("0,0.00") : rate}`}/>
				);
			})
		)}
	</List>
);

export default graphql(ExchangeRateQuery, {
	options: ({ currency }) => ({
		variables: { currency }
	}),
	props: ({ data }) => {
		if(data.loading) {
			return {
				loading: data.loading
			};
		}

		return {
			loading: false,
			rates: data.rates.rates
		};
	}
})(ExchangeRateList);