/* React Component to control the display */

import React from 'react';


export function Display(props) {

	let cssClass = (props.time <= props.PREPARATION_TIME)? "timerDisplay aware" : "timerDisplay";

	let strTime = (props.time.toString().length < 2) ? `0${props.time} s` : `${props.time} s`;

	return <div className={ cssClass }> { strTime } </div>;
}
