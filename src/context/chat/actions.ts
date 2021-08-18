import { NEW_CHAT, NEW_LAST_MESSAGE, DELETE_CHAT, SET_IS_ACTIVE, CreateNewChat, SetNewLastMessage, DeleteChat, SetiIsActive } from './types';

export const createNewChat = (name: String, dispatch: (action: CreateNewChat) => void): void => {
    dispatch({
        type: NEW_CHAT,
        payload: {
            name
        }
    });
};

export const setNewLastMessage = (chatId: String,
    lastMessage: String, dispatch: (action: SetNewLastMessage) => void): void => {
    dispatch({
        type: NEW_LAST_MESSAGE,
        payload: {
            chatId,
            lastMessage
        }
    });
};

export const deleteChat = (chatId: String, dispatch: (action: DeleteChat) => void): void => {
    dispatch({
        type: DELETE_CHAT,
        payload: {
            chatId: chatId
        }
    });
};

export const setIsActive = (chatId: String, dispatch: (action: SetiIsActive) => void): void => {
    dispatch({
        type: SET_IS_ACTIVE,
        payload: {
            chatId
        }
    })
}