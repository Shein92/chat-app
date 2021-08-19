import React, {
	useReducer,
	useContext,
	ComponentProps,
	FC,
	createContext
} from 'react';
import { dialogInitialState, dialogReducer, dialogStateType } from './reducer';
import { AddMessage } from './actions';
import { useChatContext } from '../chat';

interface DialogContextType {
	state: dialogStateType
	addMessage: (chatId: string, message: String, owner: String) => void
}

const DialogContext = createContext<DialogContextType>({} as DialogContextType);

export const useDialogContext = (): DialogContextType => useContext(DialogContext);

export const DialogContextProvider = ({ children }: ComponentProps<FC>) => {
	const [state, dispatch] = useReducer(dialogReducer, dialogInitialState);

	const addMessage = (chatId: string, message: String, owner: String) => {
		console.log('the message in index is: ', message);
		AddMessage(chatId, message, owner, dispatch);
	};

	return (
		<DialogContext.Provider value={{ state, addMessage }}>
			{children}
		</DialogContext.Provider>
	)
};