import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from '../styles/chatTextbox'
import { TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { useChatContext } from '../context/chat';
import { useDialogContext } from '../context/dialogs';
import { withStyles } from "@material-ui/core/styles";
import { lorem } from '../util/textGenerator';

type ChatTextboxPropsType = {
	classes: any
}

const ChatTextbox = React.memo(({ classes }: ChatTextboxPropsType) => {

	const [text, setText] = useState('');
	const [triggerCounter, setTriggerCounter] = useState(1);

	const chat = useChatContext();
	const dialog = useDialogContext();

	const searchedDialog = chat.state.chats.filter(c => c.isActive === true);
	const dialogId = searchedDialog[0].id.toString();
	const userName = chat.state.chats.filter(c => c.id === dialogId)[0].name;
	const dial = dialog.state[dialogId]

	const onKeyUp = (event: any) => {
		if (event.keyCode === 13) {
			dialog.addMessage(dialogId, text, 'Vasyl');
			setText('');
			setTriggerCounter(triggerCounter + 1);
			chat.setLastMessage(dialogId, text);
		}
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.currentTarget.value)
	}

	const saveMessage = () => {
		dialog.addMessage(dialogId, text, 'Vasyl');
		setText('');
		setTriggerCounter(triggerCounter + 1);
		chat.setLastMessage(dialogId, text);
	}

	useEffect(() => {
		setText('');
	}, [dialogId]);

	useEffect(() => {
		const time = Math.ceil(Math.random() * 4);
		const quantity = Math.ceil(Math.random() * 3);
		if (triggerCounter !== 1) {
			setTimeout(dialog.addMessage, time * 1000, dialogId, lorem.generateSentences(quantity), userName);
		}
	}, [triggerCounter]);

	useEffect(() => {
		if (dial.length) {
			const lastMessage = dial[dial.length - 1].message;
			chat.setLastMessage(dialogId, lastMessage);
		}
	}, [dial.length]);

	return (
		<div className={classes.chatTextBoxContainer}>
			<TextField
				id="chattextbox"
				autoComplete="off"
				placeholder="Type your message ..."
				onKeyUp={onKeyUp}
				onChange={onChange}
				className={classes.chatTextBox}
				value={text}
			></TextField>
			<Send
				onClick={saveMessage}
				className={classes.sendBtn}></Send>
		</div>
	);
});

//@ts-ignore
export default withStyles(styles)(ChatTextbox);