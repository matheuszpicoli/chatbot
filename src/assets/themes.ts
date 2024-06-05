type ThemeTemplate = {
	text: string
	background: string
}

type ThemeName = "light" | "dark"

type Theme = {
	[theme in ThemeName]: ThemeTemplate
}

export const themes: Theme = {
	light: {
		text: "#10172a",
		background: "#e0e0e0"
	},
	dark: {
		text: "#fafafa",
		background: "#2b2b2b"
	}
}
