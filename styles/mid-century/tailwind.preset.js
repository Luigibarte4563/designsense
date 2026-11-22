module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F5F0E8",
            "surface": "#FAF5ED",
            "primary": "#C46210",
            "secondary": "#8B7355",
            "accent": "#2D5A27",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "#D4C4A8",
            "focus": "#C46210",
            "error": "#B22222",
            "success": "#2D5A27",
            "white": "#FFF8F0",
            "teak": "#8B7355",
            "mustard": "#D4A574",
            "olive": "#556B2F",
            "burntOrange": "#C46210",
            "cream": "#F5F0E8"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #8B7355",
            "ds-hover": "6px 6px 0 #8B7355"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "16px",
            "ds-organic": "30% 70% 70% 30% / 30% 30% 70% 70%"
      },
      fontFamily: {
            "heading": [
                  "\"Futura\", \"Century Gothic\", sans-serif"
            ],
            "body": [
                  "\"Palatino\", \"Georgia\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 600
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