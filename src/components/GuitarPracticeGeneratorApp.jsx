/* React main application Component */

import React from 'react';
import { Timer } from "./Timer.jsx";
import { Exercise } from "./Exercise.jsx";
import { store } from "./store/Store.jsx";
import "../stylesheets/main.scss";


class GuitarPracticeGenerator extends React.Component {

	constructor (props) {
		super (props);

		this.state = this.getCurrentStateFromStore();

		this.updateStateFromStore = this.updateStateFromStore.bind(this);
	}

	getCurrentStateFromStore() {
		return {
			currentExercise: store.getState().currentExercise,
			nextExercise: store.getState().nextExercise
		}
	}

	updateStateFromStore() {
		const state = this.getCurrentStateFromStore();

		if (this.state !== state) {
			this.setState(state);
		}
	}

	componentDidMount() {
		this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
	}

	componentWillUnmount() {
		this.unsubscribeStore();
	}

    render () {
        return (
			<div className="app big">
				<h1>The Guitar Practice Generator App</h1>
				<div className="exercisesContainer">
					<Exercise
						title = "Current exercise"
						rhythmImgId = { this.state.currentExercise.rhythmImgId }
						taskId = { this.state.currentExercise.taskId }
					/>
					<Exercise
						title = "Next exercise"
						rhythmImgId = { this.state.nextExercise.rhythmImgId }
						taskId = { this.state.nextExercise.taskId }
					/>
				</div>
				<Timer />
			</div>
		);
    }
}
export { GuitarPracticeGenerator as GuitarPracticeGeneratorApp };
