//- React
import { createContext, useContext, useLayoutEffect, useState } from "react"

//- Theme
import * as Theme from "../assets/themes"

type ThemeContextType = {
	theme: Theme.ThemeTemplate
	setLightTheme: () => void
	setDarkTheme: () => void
}

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export function ThemeProvider<T extends ThemeProviderProps>(props: T) {
	const [themeName, setThemeName] = useState<Theme.ThemeName>("light")

	const theme = Theme.themes[themeName]

	const setLightTheme = () => setThemeName("light")
	const setDarkTheme = () => setThemeName("dark")

	useLayoutEffect(() => {
		document.body.style.background = theme.background
		document.body.style.color = theme.text
	}, [theme])

	return (
		<ThemeContext.Provider value={{
			theme,
			setLightTheme,
			setDarkTheme
		}}>
			{props.children}
		</ThemeContext.Provider>
	)
}


export const useTheme = () => useContext(ThemeContext)
