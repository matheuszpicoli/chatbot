//- Next
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="pt-br">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Matheus Zanela Picoli" />
				<meta name="description" content="Um chatbot bem simples construído em Next JS com Typescript e Tailwind CSS." />
				<title>MP Chatbot</title>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
