module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDFBF7",
            "surface": "#FFFFFF",
            "primary": "#8B4513",
            "secondary": "#556B2F",
            "accent": "#CD853F",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "#E8D5B7",
            "focus": "#8B4513",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "illustration": "#F5E6D3",
            "character": "#D4A574",
            "nature": "#556B2F"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.08)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.12)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"Merriweather\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "400ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  }
}