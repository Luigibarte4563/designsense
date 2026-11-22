module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFFF00",
            "primary": "#FF0000",
            "secondary": "#0000FF",
            "accent": "#FFFF00",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "halftone": "rgba(0,0,0,0.15)",
            "bubble": "#FFFFFF",
            "bubbleBorder": "#000000"
      } },
      borderWidth: {
            "ds": "4px"
      },
      boxShadow: {
            "ds-default": "6px 6px 0 #000000",
            "ds-hover": "8px 8px 0 #000000"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-bubble": "20px 20px 20px 0"
      },
      fontFamily: {
            "heading": [
                  "\"Bangers\", \"Anton\", sans-serif"
            ],
            "body": [
                  "\"Comic Neue\", cursive"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "150ms"
      },
      transitionTimingFunction: {
            "ds": "steps(3)"
      }
    }
  }
}