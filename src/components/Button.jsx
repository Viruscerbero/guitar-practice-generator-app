/* React Component to control the timer */
import React from 'react';

export function Button(props) {

	function handleClick(event, action) {
		action()
	}

	return (
		<button onClick={ (event) => handleClick(event, props.action) }>
			{ props.tag }
		</button>
	);
}
