import React from 'react';
import './App.css';

class App extends React.Component {
	foo = () => 'Bars';

	// Render is the lifecycle method of a React component that runs after the component is mounted
	render() {
		const name = 'John Doe';
		const fn = () => 'bar';
		const showName = true;

		return (
			// This is JSX - JavaScript Syntax Extension
			// Return method must return just one parent element

			// If you don't want a div for whatever reason, you can use React.Fragment
			// Here the h1 and h2 elements will directly be under the root div.
			// You can also use the <> </> syntax for React.Fragment
			<React.Fragment>
				<h1>Hello from React</h1>
				{/* && effectively evaluates the condition on the left and moves to the condition on the right, only if left is true. It can replace ternary on occasions where the right side of the ternary is null*/}
				<h2>Goodbye, {showName && name}</h2>
				<h2>Yo, {fn()}</h2>
				{/* Since this method is defined in the class, you use this*/}
				<h3>{this.foo()}</h3>
			</React.Fragment>
		);
	}
}

export default App;
