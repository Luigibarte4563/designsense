module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFFFFF",
            "primary": "#000000",
            "secondary": "#FF0000",
            "accent": "#0000FF",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#FF0000",
            "error": "#FF0000",
            "success": "#008000",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Helvetica Neue\", \"Univers\", \"Arial\", sans-serif"
            ],
            "body": [
                  "\"Helvetica Neue\", \"Univers\", \"Arial\", sans-serif"
            ],
            "mono": [
                  "\"Helvetica Neue\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700,
            "ds-black": 900
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