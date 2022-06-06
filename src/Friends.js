import { useState } from 'react';
import Friend from './Friend';

function Friends(props) {
	const [friends, setFriends] = useState(['Zoe', 'Tom', 'Esin', 'Ye', 'Em']);
	return (
		<ul>
			{friends.map((element) => {
				return <Friend key={element} friend={element} />;
			})}
		</ul>
	);
}

export default Friends;
