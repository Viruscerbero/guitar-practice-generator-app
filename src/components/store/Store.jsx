import { createStore } from 'redux';
import { exerciseUpdater } from "../reducers/ExerciseUpdater.jsx";


const initialState = {
	currentExercise: { rhythmImgId: "", taskId: "" },
	nextExercise: { rhythmImgId: "", taskId: "" }
};

export const store = createStore(exerciseUpdater, initialState);
