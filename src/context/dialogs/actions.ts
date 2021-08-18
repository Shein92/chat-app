import { ADD_MESSAGE, AddNewMessage } from './types';

export const AddMessage = (chatId: string,
    message: String,
    owner: String, dispatch: (action: AddNewMessage) => void): void => {
    dispatch({
        type: ADD_MESSAGE,
        payload: {
            chatId,
            message,
            owner
        }
    });
};