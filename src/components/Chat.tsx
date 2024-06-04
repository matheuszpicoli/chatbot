//- React
import React from "react"

//- Components
import User from "./User"
import IA from "./IA"

export default function Chat() {
	return (
		<div className="p-4 flex flex-col">
			<User />
			<IA />
			<User />
			<IA />
			<User />
			<IA />
		</div>
	)
}
