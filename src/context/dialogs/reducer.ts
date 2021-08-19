import { ADD_MESSAGE, AddNewMessage } from './types';
import { v4 as uuidv4 } from 'uuid';
import { id1, id2, id3, id4 } from '../chat/reducer';

type DialogType = { id: String, message: String, owner: String }

export type dialogStateType = {
	[key: string]: Array<DialogType>
}

type dialogActionType = AddNewMessage

export const dialogInitialState: dialogStateType = {
	// [id1]: [{id: '1', message: 'Some message', owner: 'Vasyl'}, {id: '2', message: 'henlo', owner: 'SomeCoolName'}],
	// [id2]: [{id: '3', message: 'holla', owner: 'Vasyl'}, {id: '4', message: 'henlo', owner: 'TestUserName'}],
	[id1]: [],
	[id2]: [],
	[id3]: [],
	[id4]: []
}

export const dialogReducer = (state: dialogStateType = dialogInitialState, action: dialogActionType) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return { ...state, [action.payload.chatId]: [...state[action.payload.chatId], { id: uuidv4(), message: action.payload.message, owner: action.payload.owner }] }
		}
		default: {
			return state
		}
	}
}