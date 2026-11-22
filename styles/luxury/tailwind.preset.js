module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0A0A0A",
            "surface": "#121212",
            "primary": "#D4AF37",
            "secondary": "#FFFFFF",
            "accent": "#FFFFFF",
            "ink": "#F5F0E8",
            "muted": "#888888",
            "border": "#333333",
            "focus": "#D4AF37",
            "error": "#C0392B",
            "success": "#27AE60",
            "white": "#FFFFFF",
            "gold": "#D4AF37",
            "goldLight": "#F4E4A8",
            "goldDark": "#B8962E",
            "black": "#000000",
            "charcoal": "#1A1A1A"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 20px rgba(0,0,0,0.3)",
            "ds-hover": "0 8px 30px rgba(212,175,55,0.2)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Didot\", \"Bodoni\", \"Playfair Display\", serif"
            ],
            "body": [
                  "\"Cormorant Garamond\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    }
  }
}