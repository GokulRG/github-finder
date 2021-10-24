import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
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

	searchUsers = async (text) => {
		this.setState({
			loading: true
		});
		const response = await fetch(
			`https://api.github.com/search/users?q=${encodeURIComponent(text)}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const data = await response.json();

		this.setState({
			loading: false,
			users: data.items
		});
	};

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search searchUsers={this.searchUsers} />
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
