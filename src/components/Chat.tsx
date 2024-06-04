//- React
import React from "react"

//- Components
import User from "./User"
import IA from "./IA"

interface ChatProps {
	messages: Array<{ user: string; bot: string }>
}

export default function Chat<T extends ChatProps>(props: T) {
	return (
		<div className="p-4 flex flex-col cursor-default">
			{props.messages.map((message, index) => (
				<React.Fragment key={index}>
					<User question={message.user} />
					<IA answer={message.bot} />
				</React.Fragment>
			))}
		</div>
	)
}
