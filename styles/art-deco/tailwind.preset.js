module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#1A1A2E",
            "surface": "#16213E",
            "primary": "#D4AF37",
            "secondary": "#000000",
            "accent": "#FFFFFF",
            "ink": "#F5F0E8",
            "muted": "#8B8B8B",
            "border": "#D4AF37",
            "focus": "#D4AF37",
            "error": "#C0392B",
            "success": "#27AE60",
            "white": "#FFFFFF",
            "gold": "#D4AF37",
            "goldLight": "#F4E4A8",
            "goldDark": "#B8962E",
            "black": "#000000",
            "navy": "#1A1A2E"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #1A1A2E",
            "ds-hover": "6px 6px 0 #D4AF37"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-fan": "50% 50% 0 0"
      },
      fontFamily: {
            "heading": [
                  "\"Cinzel\", \"Trajan Pro\", serif"
            ],
            "body": [
                  "\"Montserrat\", \"Futura\", sans-serif"
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
            "ds": "400ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
      }
    }
  }
}