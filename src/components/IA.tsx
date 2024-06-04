//- Icons
import * as Icon from "../icons/icons"

interface IAProps {
	answer: string
}

export default function IA<T extends IAProps>(props: T) {
	return (
		<div className="flex justify-end mt-4">
			<section content="ai">
				<div className="float-right">
					<span className="font-bold align-middle mr-2">Chatbot</span>
					<Icon.AI className="self-end w-5 h-5 inline" />
				</div>
				<p className="text-right text-sm p-2 clear-both">
					{props.answer}
				</p>
			</section>
		</div>
	)
}
