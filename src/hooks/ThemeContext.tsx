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

const getStoredTheme = (): Theme.ThemeName => {
	if (typeof window !== "undefined") {
		const storedTheme = window.localStorage.getItem("theme")
		return storedTheme ? storedTheme as Theme.ThemeName : "light"
	}
	return "light"
}

export function ThemeProvider<T extends ThemeProviderProps>(props: T) {
	const [themeName, setThemeName] = useState<Theme.ThemeName>(getStoredTheme)

	const theme = Theme.themes[themeName]

	const setLightTheme = () => {
		if (typeof window !== "undefined") window.localStorage.setItem("theme", "light")

		setThemeName("light")
	}
	const setDarkTheme = () => {
		if (typeof window !== "undefined") window.localStorage.setItem("theme", "dark")

		setThemeName("dark")
	}

	useLayoutEffect(() => {
		document.body.style.background = theme.background
		document.body.style.color = theme.text
		document.body.style.transition = "500ms"
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
