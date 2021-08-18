export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface AddNewMessage {
	type: typeof ADD_MESSAGE,
	payload: {
		chatId: string,
		message: String,
		owner: String
	}
}