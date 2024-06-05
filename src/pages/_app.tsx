//- CSS
import "@/styles/globals.css"

//- Next
import type { AppProps } from "next/app"

const App = <T extends AppProps>(Next: T) => <Next.Component {...Next.pageProps} />

export default App
