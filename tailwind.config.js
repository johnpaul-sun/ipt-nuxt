module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				dark: "#500B0B",
				disabled: "#949BA1",
				white: "#FFFFFF",
				blue: "#4391DA",
				light: "#EAD9D3",
				success: "#609876",
				danger: "#9F3030",
				warning: "#FFD700",
				primary: {},
				secondary: {},
			},
			fontFamily: {
				mono: ["Space Mono", "monospace"],
			},
			backgroundImage: {},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			},
			screens: {
				"3xl": "1920px",
			},
		},
	},
};
