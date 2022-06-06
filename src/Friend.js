function Friend({ friend, handleUnfriend }) {
	// const {friend} = props;
	// console.log(props);
	return (
		<li>
			{friend} -{' '}
			<button onClick={(event) => handleUnfriend(friend)}>Unfriend</button>
		</li>
	);
}

export default Friend;
