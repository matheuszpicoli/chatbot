export type ThemeTemplate = {
	text: string
	background: string
}

export type ThemeName = "light" | "dark"

export type Theme = {
	[theme in ThemeName]: ThemeTemplate
}

export const themes: Theme = {
	light: {
		text: "#10172a",
		background: "#e0e0e0"
	},
	dark: {
		text: "#fafafa",
		background: "#202020"
	}
}
