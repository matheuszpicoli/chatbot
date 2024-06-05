//- React
import React, { useState, useLayoutEffect, useContext } from "react"

//- Icons
import * as Icon from "../icons/icons"

//- Theme
import { ThemeContext } from "@/hooks/ThemeContext"

interface QuestionLayoutProps {
	setMessages: React.Dispatch<React.SetStateAction<Array<{ user: string; bot: string }>>>
}

type QuestionData = {
	question: string
}

type ApiResponse = {
	data: QuestionData[]
}

export default function QuestionLayout<T extends QuestionLayoutProps>(props: T) {
	const [questions, setQuestions] = useState<string[]>([])
	const [selectedQuestion, setSelectedQuestion] = useState<string>("")
	const [settingsClicked, setSettingsClicked] = useState<boolean>(false)

	const theme = useContext(ThemeContext)

	let baseUrl = typeof window !== "undefined" ? `${window.location.protocol}//${window.location.host}` : ""
	let apiUrl = "/api/questionAndAnswer"

	useLayoutEffect(() => {
		fetch(baseUrl.concat(apiUrl))
			.then(response => response.json())
			.then((question: ApiResponse) => {
				const orderQuestions = question.data.map((item: QuestionData) => item.question).slice().sort()
				setQuestions(orderQuestions)
			})
	}, [])

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		if (selectedQuestion.trim() === "") return

		fetch(`${baseUrl.concat(apiUrl)}?question=${selectedQuestion}`)
			.then(response => response.json())
			.then(data => props.setMessages(messages => [
				...messages, {
					user: selectedQuestion,
					bot: data.answer
				}]))

		setSelectedQuestion("")
	}

	return (
		<React.Fragment>
			<form
				onSubmit={handleSubmit}
				className="flex justify-center items-center p-4"
			>
				<button
					className="mr-2 outline-none duration-200 hover:opacity-60 active:opacity-100 active:text-cyan-400"
					onClick={() => setSettingsClicked(previousState => !previousState)}
				>
					<Icon.Settings className="inline w-6 h-6" />
				</button>
				<select
					className="cursor-pointer duration-200 p-1 rounded-l rounded-r w-full outline-none align-middle hover:opacity-60 active:opacity-40"
					value={selectedQuestion}
					onChange={event => setSelectedQuestion(event.target.value)}
				>
					<option
						disabled
						value=""
					>
						Pergunte ao Chatbot
					</option>
					{questions.map((question, index) => (
						<option
							key={index}
							value={question}
						>
							{question}
						</option>
					))}
				</select>
				<button
					type="submit"
					className="ml-2 outline-none duration-200 hover:opacity-60 active:opacity-100 active:text-lime-400"
				>
					<Icon.Arrow className="inline w-6 h-6" />
				</button>
			</form>

			{settingsClicked && (
				<aside className="flex justify-center">
					<button
						className="mr-6 outline-none duration-200 hover:opacity-60 active:opacity-100 active:text-yellow-400"
						onClick={theme.setLightTheme}
					>
						<Icon.Sun className="inline w-6 h-6 mr-2 align-middle" />
						<span>Modo claro</span>
					</button>
					<button
						className="outline-none duration-200 hover:opacity-60 active:opacity-100 active:text-violet-400"
						onClick={theme.setDarkTheme}
					>
						<Icon.Moon className="inline w-6 h-6 mr-2 align-middle" />
						<span>Modo escuro</span>
					</button>
				</aside>
			)}
		</React.Fragment>
	)
}
