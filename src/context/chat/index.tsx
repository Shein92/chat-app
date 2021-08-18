import React, {
	useReducer,
	useContext,
	ComponentProps,
	FC,
	createContext
} from 'react';
import { chatStateType, chatReducer, chatInitialState } from './reducer';
import { CreateNewChat, DeleteChat, SetNewLastMessage } from './types';
import { createNewChat, deleteChat, setIsActive, setNewLastMessage } from './actions';

interface ChatContextType {
	state: chatStateType
	createChat: (name: String) => void
	chatDelete: (chatId: String) => void
	isActive: (chatId: String) => void
	setLastMessage: (chatId: String, text: String) => void
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);

export const useChatContext = (): ChatContextType => useContext(ChatContext);

export const ChatContextProvider = ({ children }: ComponentProps<FC>) => {
	const [state, dispatch] = useReducer(chatReducer, chatInitialState);

	const createChat = (name: String) => {
		createNewChat(name, dispatch)
	};

	const chatDelete = (chatId: String) => {
		deleteChat(chatId, dispatch);
	};

	const isActive = (chatId: String) => {
		setIsActive(chatId, dispatch)
	};

	const setLastMessage = (chatId: String, text: String) => {
		setNewLastMessage(chatId, text, dispatch);
	};

	return (
		<ChatContext.Provider value={{ state, createChat, chatDelete, isActive, setLastMessage }}>
			{children}
		</ChatContext.Provider>
	)
}