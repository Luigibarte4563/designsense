module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F5F0E8",
            "surface": "#FAF5ED",
            "primary": "#8B4513",
            "secondary": "#CD853F",
            "accent": "#D2691E",
            "ink": "#3D2B1F",
            "muted": "#8B7355",
            "border": "#8B7355",
            "focus": "#CD853F",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFF8F0",
            "sepia": "#C9B896",
            "paper": "#FDF8F0"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "3px 3px 0 #8B7355",
            "ds-hover": "5px 5px 0 #8B7355"
      },
      borderRadius: {
            "ds-sm": "2px",
            "ds-md": "4px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "\"Playfair Display\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Cormorant Garamond\", \"Georgia\", serif"
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
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
      }
    }
  }
}