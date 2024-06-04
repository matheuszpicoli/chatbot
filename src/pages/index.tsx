//- React
import React from "react"

//- Components
import Header from "@/components/Header"
import Chat from "@/components/Chat"
import Footer from "@/components/Footer"

export default function MPChatbot() {
	return (
		<div className="flex justify-center items-center flex-col">
			<header className="mt-4">
				<Header />
			</header>
			<main className="mt-4">
				<Chat />
			</main>
			<footer className="mt-4">
				<Footer />
			</footer>
		</div>
	)
}
