//- React
import React, { useState } from "react"

//- Components
import Header from "@/components/Header"
import Chat from "@/components/Chat"
import QuestionLayout from "@/components/QuestionLayout"

export default function MPChatbot() {
	const [messages, setMessages] = useState<Array<{ user: string; bot: string }>>([])

	return (
		<div className="flex justify-center items-center flex-col">
			<header className="mt-4">
				<Header />
			</header>
			<main className="mt-4">
				<Chat messages={messages} />
			</main>
			<footer className="mt-4">
				<QuestionLayout setMessages={setMessages} />
			</footer>
		</div>
	)
}
