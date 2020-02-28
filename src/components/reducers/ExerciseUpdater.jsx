import { getRandomInt } from "../../utilities/utils.jsx";
import { Config } from "../../utilities/configuration.jsx";


export function exerciseUpdater(state, action) {

	switch(action.type) {
		case "INIT":
			return {
				...state,
				currentExercise: { rhythmImgId: "", taskId: "" },
				nextExercise: { rhythmImgId: "", taskId: "" }
			}
			break;

		case "PREPARATION_TIME":
			return {
				...state,
				nextExercise: {
					rhythmImgId: getRandomInt(Config.MAXIMUM_EXERCISES_NUMBER),
					taskId: getRandomInt(Config.MAXIMUM_EXERCISES_NUMBER)
				}
			}

			break;

		case "PLAY_TIME":
			return {
				...state,
				currentExercise: state.nextExercise,
				nextExercise: { rhythmImgId: "", taskId: "" }
			}

			break;

		default:
			return state;
	}
}
