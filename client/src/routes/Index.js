import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import { fullWhite, white } from 'material-ui/styles/colors';

import Home from './Home';

// const muiTheme = getMuiTheme(darkBaseTheme);

const muiTheme = getMuiTheme({
	fontFamily: 'Helvetica, sans-serif',
	palette: {
	  primary1Color: "#2E3B4B",
	  primary2Color: 'orange',
	  primary3Color: 'red',
	  accent1Color: "#287b97",
	  accent2Color: 'green',
	  accent3Color: 'blue',
	  textColor: fullWhite,
	  secondaryTextColor: fade(fullWhite, 0.7),
	  alternateTextColor: '#303030',
	  canvasColor: '#2E3B4B',
	  borderColor: fade(fullWhite, 0.3),
	  disabledColor: fade(fullWhite, 0.3),
	  pickerHeaderColor: fade(fullWhite, 0.12),
	  clockCircleColor: fade(fullWhite, 0.12),
	},
	appBar: {
	  textColor: white,
	  color: 'rgb(35, 35, 35)'
	}
});

export default () => {
	return (
		<MuiThemeProvider muiTheme={muiTheme}>
			<Switch>
				<Route exact path="/" component={Home}/>
			</Switch>
		</MuiThemeProvider>
	);
};