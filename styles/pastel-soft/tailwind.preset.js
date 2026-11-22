module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFC",
            "surface": "#FFFFFF",
            "primary": "#A8C0E8",
            "secondary": "#E8C0A8",
            "accent": "#C0E8A8",
            "ink": "#4A4A5A",
            "muted": "#A8A8B8",
            "border": "#E8E8F0",
            "focus": "#A8C0E8",
            "error": "#E8A8A8",
            "success": "#A8E8A8",
            "white": "#FFFFFF",
            "pastel1": "#E8D0E8",
            "pastel2": "#D0E8E8",
            "pastel3": "#E8E8D0",
            "pastel4": "#F0E0D0",
            "pastel5": "#E0F0D0",
            "pastel6": "#E8D0F0"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.04)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.06)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px",
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
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
      }
    }
  }
}