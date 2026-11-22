module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDF6E3",
            "surface": "#FFF8F0",
            "primary": "#8B7355",
            "secondary": "#556B2F",
            "accent": "#CD853F",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "#D4C4A8",
            "focus": "#8B7355",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "floral": "#D4A574",
            "vine": "#556B2F",
            "cream": "#FDF6E3"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "2px 2px 8px rgba(0,0,0,0.2)",
            "ds-hover": "4px 4px 16px rgba(0,0,0,0.3)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "32px",
            "ds-organic": "60% 40% 30% 70% / 60% 30% 70% 40%"
      },
      fontFamily: {
            "heading": [
                  "\"Trajan Pro\", \"Optima\", serif"
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
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
      }
    }
  }
}