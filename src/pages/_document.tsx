//- Next
import * as Next from "next/document"

export default function Document() {
	return (
		<Next.Html lang="pt-br">
			<Next.Head />
			<body>
				<Next.Main />
				<Next.NextScript />
			</body>
		</Next.Html>
	)
}
