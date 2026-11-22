module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#E0E5EC",
            "surface": "#E0E5EC",
            "primary": "#7C8DB5",
            "secondary": "#A3B1C6",
            "accent": "#FF8A8A",
            "ink": "#2D3748",
            "muted": "#8A9BB8",
            "border": "transparent",
            "focus": "#4299E1",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF",
            "shadowDark": "#C5CAD8",
            "shadowLight": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "12px 12px 24px #C5CAD8, -12px -12px 24px #FFFFFF",
            "ds-hover": "16px 16px 32px #C5CAD8, -16px -16px 32px #FFFFFF",
            "ds-active": "inset 6px 6px 12px #C5CAD8, inset -6px -6px 12px #FFFFFF",
            "ds-inner": "inset 8px 8px 16px #C5CAD8, inset -8px -8px 16px #FFFFFF",
            "ds-float": "20px 20px 40px #C5CAD8, -20px -20px 40px #FFFFFF"
      },
      borderRadius: {
            "ds-sm": "20px",
            "ds-md": "32px",
            "ds-lg": "48px",
            "ds-xl": "64px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 500,
            "ds-medium": 600,
            "ds-bold": 800
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  }
}