import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Friends';

function App() {
	const [showing, setShowing] = useState(true);
	const [gameOver, setGameOver] = useState(false);
	// console.log(showing); // the actual value
	// console.log(setShowing); // the function to update it

	function handleClick(event) {
		console.log('you clicked me');
		if (showing === true) {
			setShowing(false);
		} else {
			setShowing(true);
		}
	}

	return (
		<main>
			{/* <button onClick={handleClick}>Toggle State</button> */}
			{/* You can also define callbacks anonymously */}
			<button onClick={() => setShowing(!showing)}>Toggle State</button>
			{/* Conditional rendering option 1: inline styling */}
			{/* <p
				style={{ display: showing === true ? 'block' : 'none', color: 'blue' }}>
				Secret Message
			</p> */}
			{/* Conditional rendering option 2: ternary operator */}
			{/* {showing === true ? <p>Secret Message</p> : null} */}
			{/* Conditional rendering option 3: logical AND */}
			{showing === true && <p className='message'>Secret Message</p>}
			<Friends />
		</main>
	);
}

export default App;
