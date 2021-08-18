import { NEW_CHAT, NEW_LAST_MESSAGE, DELETE_CHAT, SET_IS_ACTIVE, CreateNewChat, SetNewLastMessage, DeleteChat, SetiIsActive } from './types';
import { v4 as uuidv4 } from 'uuid';

const id1 = uuidv4();
const id2 = uuidv4();

type ChatType = {
	id: String,
	name: String,
	lastMessage?: String
	isActive?: Boolean
}

export type chatStateType = {
	chats: Array<ChatType>
}

type chatActionType = CreateNewChat | SetNewLastMessage | DeleteChat | SetiIsActive

export const chatInitialState: chatStateType = {
	chats: [
		{ id: id1, name: "SomeCoolName", isActive: false, lastMessage: '...' },
		{ id: id2, name: "TestUserName", isActive: false, lastMessage: '...' }
	]
}

export const chatReducer = (state: chatStateType = chatInitialState, action: chatActionType): chatStateType => {
	switch (action.type) {
		case NEW_LAST_MESSAGE: {
			// return { ...state, chats: [...state.chats.map(chat => chat.id === action.payload.chatId ? chat.lastMessage = action.payload.lastMessage : chat.lastMessage)] }
			const chat = state.chats.map(chat => chat.id === action.payload.chatId ? { ...chat, lastMessage: action.payload.lastMessage } : chat)
			return { ...state, chats: [...chat] }
		}
		case NEW_CHAT: {
			return { ...state, chats: [...state.chats, { id: uuidv4(), name: action.payload.name, isActive: false, lastMessage: '...' }] }
		}
		case DELETE_CHAT: {
			return { ...state, chats: [...state.chats.filter(chat => chat.id !== action.payload.chatId)] }
		}
		case SET_IS_ACTIVE: {
			return { ...state, chats: [...state.chats.map(chat => chat.id === action.payload.chatId ? { ...chat, isActive: true } : { ...chat, isActive: false })] }
		}
		default: {
			return state
		}
	}
}