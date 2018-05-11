import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import View from '../components/ListView';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}
	
	handleToggle = () => this.setState({open: !this.state.open});

	render() {
		return (
			<div>
				<AppBar
					title="Crypto Exchange Rates"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonClick={this.handleToggle}
				/>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
					>
					<MenuItem onClick={() => this.props.history.push('/rates')}>Rates</MenuItem>
					<MenuItem onClick={() => this.props.history.push('/links')}>Links</MenuItem>
				</Drawer>
				<View />
			</div>	
		);
	}
}

export default Home;