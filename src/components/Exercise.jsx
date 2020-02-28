/* React Component to create the exercises */

import React from "react";


const exercises = require('../assets/exercises.json');


export function Exercise(props) {

	let description = "",
		notes = "",
		strings = "";

	if (typeof props.taskId == "number") {
		description = exercises[`exercise_${props.taskId}`].description;
		notes = `${exercises[`exercise_${props.taskId}`].notes}`;
		strings = `${exercises[`exercise_${props.taskId}`].strings}`;
	}

	let rhythmImgSrc = "";

	if (typeof props.rhythmImgId == "number") {
		rhythmImgSrc = `./src/assets/images/rhythm_${props.rhythmImgId}.png`;
	}

	return (
		<div>
			<p className="title"> { props.title } </p>

			<div className="exercise">
				<img src={ rhythmImgSrc } />
			</div>

			<div className="description"> { description } <br/> { notes } <br/> { strings } </div>
		</div>
	);
}
