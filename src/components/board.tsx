import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/board';
import { Fab } from '@material-ui/core';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import Chat from './chat'
import Dialog from './dialog'
import ChatTextbox from './chatTextbox';

type BoardPropsType = {
	classes: any
}

const Board = ({ classes }: BoardPropsType) => {

	return (
		<div className={classes.header}>
			<div className={classes.textHeader}>Chat App</div>
			<Fab
				size="small"
				className={classes.signOutBtn}
				onClick={() => { console.log(`I'm out :(`) }}
			>
				<ExitToAppIcon />
			</Fab>
			<Chat />
			<Dialog />
			{/* <Fab
				className={classes.newChatBtn}
				// onClick={newChatBtnClicked}
				color="primary"
				aria-label="add"
			>
				<AddIcon />
			</Fab> */}
			<ChatTextbox />
		</div>
	);
};

//@ts-ignore
export default withStyles(styles)(Board);