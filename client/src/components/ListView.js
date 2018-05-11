import React, { Component } from "react";
import ExchangeRateList from "./List";
import Paper from 'material-ui/Paper';

export default class ExchangeRateView extends Component {
	state = {
		currency: "USD"
	};

	onCurrencyChange = currency => this.setState(() => ({ currency }));

	render() {

		const { currency } = this.state;
		let total;
		let circulating;
		let change;
		let cap;

		if (currency === 'BTC') {
			cap = '$152.56 B'
			total = '21.00 M';
			circulating = '17.03 M';
			change = 'n/a';
		} else if (currency === 'USD') {
			cap = 'n/a'
			total = '13,926.600 Billion';
			circulating = '3,664.30 Billion';
			change = 'n/a';
		}

		return (
			<div>
				<Paper style={bannerStyle} zDepth={1}>
					<div style={leftStyle}>
						<h1 >{`1 ${this.state.currency}`}</h1>
					</div>
					<div style={rightStyle}>
						<p>Market Cap: {cap}</p>
						<p>Total: {total}</p>
						<p>Circulating: {circulating}</p>
						<p>Change: {change}</p>
					</div>
				</Paper>
				<Paper style={style2} zDepth={1}>
					<ExchangeRateList
						currency={currency}
						onCurrencyChange={this.onCurrencyChange}
					/>
				</Paper>
			</div>
		);
	}
}

const bannerStyle = {
	display: 'flex',
	flexDirection: "row",
	padding: '10px',
	width: '100%',
};

const leftStyle = {
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	justifyContent: 'center',
	// alignItems: 'center',
	padding: '10px',
	margin: '10px',
}

const rightStyle = {
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	padding: '10px',
	paddingLeft: '34px',
	margin: '10px',
	borderLeft: '1px solid white',
}

const style2 = {
	display: 'flex',
	flexDirection: "column",
	padding: '10px',
	width: '100%',
	height: '100vh',
};