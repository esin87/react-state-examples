import { useState } from 'react';
import Friend from './Friend';

function Friends(props) {
	const [friends, setFriends] = useState(['Zoe', 'Tom', 'Esin', 'Ye', 'Em']);

	const handleUnfriend = (friendToDelete) => {
		// Option 1: Filter
		const friendsToKeep = friends.filter(
			(element) => element !== friendToDelete
		);
		setFriends(friendsToKeep);
		// console.log(friendToDelete);
		// Option 2: For Loop
		// const newFriends = [];
		// for (let i = 0; i < friends.length; i++) {
		// 	if (friends[i] === friendToDelete) {
		// 		continue;
		// 	} else {
		// 		newFriends.push(friends[i]);
		// 	}
		// }
		// setFriends(newFriends);
		// Option 3: indexOf/splice
		// find the index of the friendToDelete
		// const index = friends.indexOf(friendToDelete);
		// // make a copy of state
		// const temp = [...friends];
		// console.log(index, temp);
		// // use splice to delete the friend at that index
		// temp.splice(index, 1);

		// // use setFriends to update the state data with the copy
		// setFriends(temp);
	};

	return (
		<ul>
			{friends.map((element) => {
				return (
					<Friend
						key={element}
						// passing down props from this component to its child, the Friend component
						friend={element}
						handleUnfriend={handleUnfriend}
					/>
				);
			})}
		</ul>
	);
}

export default Friends;
