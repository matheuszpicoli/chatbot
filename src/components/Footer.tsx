//- React
import React from "react"

//- Components
import Divider from "./Divider"

//- Icons
import * as Icon from "../icons/icons"

export default function Footer() {
	return (
		<React.Fragment>
			<Divider />

			<div className="flex justify-center items-center p-4">
				<Icon.Settings className="inline w-6 h-6 mr-2" />
				<input
					className="bg-gray-200 p-1 rounded-l rounded-r w-full align-middle"
					type="text"
					placeholder="Perguntar para Chatbot"
				/>
				<button>
					<Icon.Arrow className="inline w-6 h-6 ml-2" />
				</button>
			</div>
		</React.Fragment>
	)
}
