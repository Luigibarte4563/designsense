module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "primary": "#1976D2",
            "secondary": "#7B1FA2",
            "accent": "#E91E63",
            "ink": "#212121",
            "muted": "#757575",
            "border": "#E0E0E0",
            "focus": "#1976D2",
            "error": "#D32F2F",
            "success": "#388E3C",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 1px 3px rgba(0,0,0,0.08)",
            "ds-hover": "0 4px 12px rgba(0,0,0,0.12)",
            "ds-active": "0 1px 3px rgba(0,0,0,0.08)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Roboto\", \"Helvetica Neue\", sans-serif"
            ],
            "body": [
                  "\"Roboto\", \"Helvetica Neue\", sans-serif"
            ],
            "mono": [
                  "\"Roboto Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}