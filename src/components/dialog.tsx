import React from 'react';
import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/dialog';
import { useDialogContext } from '../context/dialogs';
import { useChatContext } from '../context/chat';

type DialogPropsType = {
	classes: any
}

const Dialog = ({ classes }: DialogPropsType) => {
	const dialog = useDialogContext();
	const chat = useChatContext();

	let selectedId = chat.state.chats.filter(c => c.isActive === true ? c.id : null);
	let id = selectedId[0].id.toString()
	let name = selectedId[0].name

	const getMessageClass = (senderName: String, name: String) => {
		return senderName !== name
			? classes.userSent
			: classes.friendSent;
	};

	return (
		<div>
			<div className={classes.chatHeader}>
				<div className={classes.chatUser}>
					{name}
				</div>
				<Avatar className={classes.avatar} alt="Remy Sharp">
					{name.split("")[0]
						.toUpperCase()}
				</Avatar>
			</div>
			<main id="chatview-container" className={classes.content}>
				{dialog.state[id].length ? dialog.state[id].map((msg, index) => (
					<div
						key={index}
						className={getMessageClass(msg.owner, name)}
					>
						{msg.message}
					</div>
				))
					: null}
			</main>
		</div>
	);
};
//@ts-ignore
export default withStyles(styles)(Dialog);