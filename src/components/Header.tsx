//- React
import React from "react"

//- Icons
import * as Icon from "../icons/icons"

//- Components
import Divider from "./Divider"

export default function Header() {
	return (
		<React.Fragment>
			<h1 className="text-3xl font-medium text-center text-slate-900 align-middle">
				<span className="font-bold">MP</span> Chatbot
				<span className="font-normal">
					<Icon.VerticalBar className="inline" />
				</span>
				<span className="text-base font-light inline-block align-middle">
					Seu amigo virtual
				</span>
			</h1>
			<Divider />
		</React.Fragment>
	)
}
