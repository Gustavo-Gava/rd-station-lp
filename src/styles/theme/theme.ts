const breakpoints = {
	mobile: 320,
	tablet: 768,
	notebook: 1024,
	desktop: 1440,
};

const theme = {
	colors: {
		primary: {
			dark: "#0B485B",
			main: "#19C1CE",
			light: "#07E5EB",
			transparent: "#eefbfb",
		},

		secondary: {
			main: "#F2BF4E",
			light: "#F4CA6D",
		},

		system: {
			background: "#FFF",
			surface: "#303030",
		},

		gray: {
			10: "#F1F3F5",
			30: "#CFD3D8",
			60: "#97A1AC",
			70: "#7E8A98",
			100: "#212429",
		},

		actions: {
			success: "#4CAF50",
			error: "#F44336",
			warning: "#FFC107",
		},
	},

	fonts: {
		family: {
			heading: "Darker Grotesque",
			body: "Nunito Sans",
		},

		size: {
			body: {
				xs: "12px",
				sm: "14px",
				md: "16px",
				lg: "20px",
			},

			subtitle: {
				xs: "14px",
				sm: "1rem",
			},

			heading: {
				xs: "1.25rem",
				sm: "1.5rem",
				md: "2rem",
				lg: "2.5rem",
			},
		},

		lineHeight: {
			body: {
				md: "150%",
				sm: "150%",
				xs: "150%",
			},

			heading: {
				md: "100%",
				lg: "100%",
				sm: "110%",
			},

			subtitle: {
				sm: "140%",
				xs: "120%",
			},
		},

		weight: {
			light: 300,
			normal: 400,
			medium: 500,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
	},

	border: {
		radius: {
			sm: "2px",
			base: "4px",
			lg: "6px",
			xl: "8px",
			full: "9999px",
		},
	},

	shadows: {
		sm: "0 1px 2px 0 rgba(33, 36, 41, 0.05)",
		md: "0 4px 12px 0 rgba(33, 36, 41, 0.14);",
		lg: "0 8px 16px 0 rgba(33, 36, 41, 0.2)",
		xl: "0 14px 24px 0 rgba(33, 36, 41, 0.3)",
	},

	container: {
		width: {
			sm: "540px",
			md: "720px",
			lg: "960px",
			xl: "1440px",
		},
	},

	devices: {
		mobile: `(min-width: ${breakpoints.mobile}px)`,
		tablet: `(min-width: ${breakpoints.tablet}px)`,
		notebook: `(min-width: ${breakpoints.notebook}px)`,
		desktop: `(min-width: ${breakpoints.desktop}px)`,
	},
} as const;

export default theme;
