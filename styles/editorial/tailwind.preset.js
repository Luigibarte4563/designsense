module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "primary": "#1A1A1A",
            "secondary": "#4A4A4A",
            "accent": "#C41E3A",
            "ink": "#1A1A1A",
            "muted": "#666666",
            "border": "#E0E0E0",
            "focus": "#C41E3A",
            "error": "#C41E3A",
            "success": "#2D7D32",
            "white": "#FFFFFF",
            "pullQuote": "#C41E3A",
            "caption": "#888888"
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
                  "\"Didot\", \"Bodoni\", \"Playfair Display\", serif"
            ],
            "body": [
                  "\"Garamond\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500,
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