//- CSS
import "@/styles/globals.css";

//- Next
import type { AppProps } from "next/app"

export default function App<T extends AppProps>(Next: T) {
	return <Next.Component {...Next.pageProps} />
}
