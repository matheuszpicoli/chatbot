//- Tailwind CSS
import "@/styles/globals.css"

//- Themes
import * as Theme from "@/hooks/ThemeContext"

//- Next
import type { AppProps } from "next/app"

export default function App<T extends AppProps>(Next: T) {
	return (
		<Theme.ThemeProvider>
			<Next.Component {...Next.pageProps} />
		</Theme.ThemeProvider>
	)
}
