//- React
import React, { useState } from "react"

//- Components
import Divider from "./Divider"

//- Icons
import * as Icon from "../icons/icons"

interface FooterProps {
	setMessages: React.Dispatch<React.SetStateAction<Array<{ user: string; bot: string }>>>
}

export default function Footer<T extends FooterProps>(props: T) {
	const [input, setInput] = useState<string>("")

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		if (input.trim() === "") {
			return
		}

		fetch(`http://localhost:3000/api/questionAndAnswer?question=${input}`)
			.then(response => response.json())
			.then(data => props.setMessages(messages => [...messages, { user: input, bot: data.answer }]))

		setInput("")
	}

	return (
		<React.Fragment>
			<Divider />

			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center p-4"
			>
				<button className="mr-2 outline-none duration-200 hover:opacity-60 active:opacity-100 active:text-cyan-400">
					<Icon.Settings className="inline w-6 h-6" />
				</button>
				<input
					className="bg-gray-100 duration-200 p-1 rounded-l rounded-r w-full outline-none align-middle active:opacity-40"
					type="text"
					placeholder="Pergunte ao Chatbot"
					value={input}
					onChange={event => setInput(event.target.value)}
				/>
				<button
					type="submit"
					className="ml-2 outline-none duration-200 hover:opacity-60 active:opacity-100 active:text-lime-400"
				>
					<Icon.Arrow className="inline w-6 h-6" />
				</button>
			</form>
		</React.Fragment>
	)
}
