import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const Users = ({ users, loading }) => {
	return loading ? (
		<div className='container'>
			<ClipLoader color='#dc3545' loading={loading} css={spinnerStyle} />
		</div>
	) : (
		// You can pass in a style object too with all the styles instead of doing everything inline
		<div style={userStyle}>
			{users.map((user) => {
				return <UserItem key={user.id} user={user} />;
			})}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired
};

// Using style object here is a lot cleaner than inline styles
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

const spinnerStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	width: '150px',
	height: '150px',
	marginTop: '-50px' /* this is half the height of your div*/,
	marginLeft: '-100px' /*this is half of width of your div*/
};

export default Users;
