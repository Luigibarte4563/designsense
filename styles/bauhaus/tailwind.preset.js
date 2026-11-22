module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFFFFF",
            "primary": "#FF0000",
            "secondary": "#0000FF",
            "accent": "#FFFF00",
            "ink": "#000000",
            "muted": "#808080",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "red": "#FF0000",
            "blue": "#0000FF",
            "yellow": "#FFFF00",
            "black": "#000000"
      } },
      borderWidth: {
            "ds": "3px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px",
            "ds-circle": "50%"
      },
      fontFamily: {
            "heading": [
                  "\"Futura\", \"Univers\", \"Helvetica\", sans-serif"
            ],
            "body": [
                  "\"Futura\", \"Univers\", \"Helvetica\", sans-serif"
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
            "ds": "0ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
      }
    }
  }
}