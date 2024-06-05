//- React
import React, { useState } from "react"

//- Next
import Head from "next/head"

//- Components
import Header from "@/components/Header"
import Chat from "@/components/Chat"
import QuestionLayout from "@/components/QuestionLayout"

export default function MPChatbot() {
	const [messages, setMessages] = useState<Array<{ user: string; bot: string }>>([])

	return (
		<React.Fragment>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Matheus Zanela Picoli" />
				<meta name="description" content="Um chatbot bem simples construído em Next JS com Typescript e Tailwind CSS." />
				<title>MP Chatbot</title>
			</Head>

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
		</React.Fragment>
	)
}
