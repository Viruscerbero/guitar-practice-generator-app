/* React Component to create the timer */

import React, { Component } from 'react';
import { Button } from "./Button.jsx";
import { Display } from "./Display.jsx";
import { store } from "./store/Store.jsx";
import { Config } from "../utilities/configuration.jsx";


export class Timer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			counter: Config.PREPARATION_TIME,
		}
	}

	start() {
		if (typeof this.timerId != "undefined") {

			this.stop();
		}

		let counter = Config.PREPARATION_TIME;

		let tick = () => {
			if (counter < 0) {
				counter = Config.PLAY_TIME;
				store.dispatch({ "type": "PLAY_TIME" })
			}
			if (counter == Config.PREPARATION_TIME) {
				store.dispatch({ "type": "PREPARATION_TIME" })
			}

			this.setState({ counter: counter-- });

			this.timerId = setTimeout(tick, 1000);
		}
		tick();
	}

	stop() {
		clearTimeout(this.timerId);

		delete(this.timerId);

		this.setState({ counter: Config.PREPARATION_TIME });

		store.dispatch({ "type": "INIT" });
	}

	render() {
		return (
			<div className="timerControl">

				<Display time={ this.state.counter } PREPARATION_TIME = { Config.PREPARATION_TIME } />

				<div className="buttons">
					<Button tag="Start" action={ ()=>this.start() } />
					<Button tag="Stop" action={ ()=>this.stop() } />
				</div>

			</div>
		);
	}
}
