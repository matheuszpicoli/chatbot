//- Next
import * as Next from "next/document"

export default function Document() {
	return (
		<Next.Html lang="pt-br">
			<Next.Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Matheus Zanela Picoli" />
				<meta name="description" content="Um chatbot bem simples construído em Next JS com Typescript e Tailwind CSS." />
				<title>MP Chatbot</title>
			</Next.Head>

			<body>
				<Next.Main />
				<Next.NextScript />
			</body>
		</Next.Html>
	)
}
