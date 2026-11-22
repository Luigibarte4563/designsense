module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFFFFF",
            "primary": "#000000",
            "secondary": "#666666",
            "accent": "#000000",
            "ink": "#000000",
            "muted": "#999999",
            "border": "#E0E0E0",
            "focus": "#000000",
            "error": "#CC0000",
            "success": "#008000",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
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
                  "\"Playfair Display\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Source Serif Pro\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
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