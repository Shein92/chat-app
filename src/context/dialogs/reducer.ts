import { ADD_MESSAGE, AddNewMessage } from './types';
import { v4 as uuidv4 } from 'uuid';

const id1 = uuidv4();
const id2 = uuidv4();
const id3 = uuidv4();
const id4 = uuidv4();

type DialogType = { id: String, message: String, owner: String }

export type dialogStateType = {
	// chats: Array<ChatType>
	[key: string]: Array<DialogType>
}

type dialogActionType = AddNewMessage

export const dialogInitialState: dialogStateType = {
	// id1: [{id: '1', message: 'String', owner: 'Vasyl'}]
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