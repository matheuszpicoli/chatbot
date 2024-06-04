//- Icons
import * as Icon from "../icons/icons"

interface UserProps {
	question: string
}

export default function User<T extends UserProps>(props: T) {
	return (
		<div className="flex justify-start">
			<section content="user">
				<div className="float-left">
					<Icon.User className="self-start w-5 h-5 inline" />
					<span className="font-bold align-middle ml-2">Usuário</span>
				</div>
				<p className="text-left text-sm p-2 clear-both">
					{props.question}
				</p>
			</section>
		</div>
	)
}
