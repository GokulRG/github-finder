import React from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';

class App extends React.Component {
	state = {
		users: [],
		loading: false
	};

	componentDidMount = async () => {
		this.setState({
			loading: true
		});
		const response = await fetch(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const data = await response.json();

		this.setState({
			loading: false,
			users: data
		});
	};

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
