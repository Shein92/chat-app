export const NEW_CHAT = 'NEW_CHAT';
export const NEW_LAST_MESSAGE = 'NEW_LAST_MESSAGE';
export const DELETE_CHAT = 'DELETE_CHAT';
export const SET_IS_ACTIVE = 'SET_IS_ACTIVE'

export interface CreateNewChat {
	type: typeof NEW_CHAT,
	payload: {
		name: String,
	}
};

export interface SetNewLastMessage {
	type: typeof NEW_LAST_MESSAGE,
	payload: {
		chatId: String,
		lastMessage: String
	}
}

export interface DeleteChat {
	type: typeof DELETE_CHAT,
	payload: {
		chatId: String
	}
}

export interface SetiIsActive {
	type: typeof SET_IS_ACTIVE
	payload: {
		chatId: String
	}
}