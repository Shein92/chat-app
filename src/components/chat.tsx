import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/chat';
import { useChatContext } from '../context/chat';
import { List } from '@material-ui/core';
import ChatPlate from './chatPlate';

type ChatPropsType = {
	classes: any
}

const Chat = ({ classes }: ChatPropsType) => {

	const chats = useChatContext();

	return (
		<main className={classes.root}>
			<List>
				{
					chats.state.chats.map((chat, index) => {
						return <ChatPlate
							key={index}
							name={chat.name}
							isActive={chat.isActive}
							lastMessage={chat.lastMessage}
							chatid={chat.id}
							classes={classes}
							setIsActive={chats.isActive}
						/>
					})
				}
			</List>
		</main>
	);
};

//@ts-ignore
export default withStyles(styles)(Chat);