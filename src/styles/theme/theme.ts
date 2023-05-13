const theme = {
  colors: {
    primary: {
      dark: '#0B485B',
      main: '#19C1CE',
      light: '#07E5EB',
    },

    secondary: {
      main: "#F2BF4E",
      light: "#F4CA6D",
    },

    system: {
      background: '#101010',
      surface: '#303030',
    },

    gray: {
      10: "#F1F3F5",
      30: "#CFD3D8",
      60: "#97A1AC",
      70: "#7E8A98",
      100: "#212429"
    },

    actions: {
      success: '#4CAF50',
      error: '#F44336',
      warning: '#FFC107',
    },
  },

  fonts: {
    family: {

    },

    size: {
      body: {
        sm: "14px",
        md: "16px",
        lg: "20px"
      },

      subtitle: {
        "xs": "14px",
        "sm": "1rem",
      },

      heading: {
        "xs": "1.25rem",
        "sm": "1.5rem",
        "md": "2rem",
        "lg": "2.5rem",
      }
    },

    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    }
  },

  border: {
    radius: {
      sm: '2px',
      base: '4px',
      lg: '6px',
      xl: '8px',
      full: '9999px',
    }
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
    xl: '0 14px 24px 0 rgba(0, 0, 0, 0.3)',
  }
} as const

export default theme