import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from "@material-ui/core";

type ChatPlatePropsType = {
	name: String
	isActive: Boolean
	lastMessage: String
	chatid: String,
	classes: any
	setIsActive: (id: String) => void
}

const ChatPlate = ({ name, isActive, lastMessage, chatid, classes, setIsActive }: ChatPlatePropsType) => {
	console.log(name, isActive);
	return (
		<>
			<ListItem
				className={classes.listItem}
				onClick={() => setIsActive(chatid)}
				selected={!!isActive}
				alignItems="flex-start"
			>
				<ListItemAvatar>
					<Avatar alt="Remy Sharp">
						{name.split("")[0].toUpperCase()}
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={
						name
					}
					secondary={
						<>
							{lastMessage.length ? (
								<Typography component="span" color="textPrimary">
									{lastMessage.length > 25
										? lastMessage.substring(
											0,
											25
										) + "..."
										: lastMessage}
								</Typography>
							) : null}
						</>
					}
				></ListItemText>
			</ListItem>
		</>
	);
};

export default ChatPlate;