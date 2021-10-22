import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				alt='profile_picture'
				className='round-img'
				style={{
					backgroundColor: 'red',
					width: '96px',
					height: '96px'
				}}
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url} className='btn btn-dark btn btn-sm my-1'>
					More
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;

// export default class UserItem extends Component {
// 	// No need to use a constructor for creating an initial state, you can just initialize a state object like so.
// 	// state = {
// 	// 	id: 'id',
// 	// 	login: 'mojombo',
// 	// 	avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
// 	// 	html_url: 'https://github.com/mojombo'
// 	// };
// }
