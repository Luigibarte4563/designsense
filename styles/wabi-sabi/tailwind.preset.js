module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAF8F5",
            "surface": "#FDFBF8",
            "primary": "#6B5B4A",
            "secondary": "#9A8A7A",
            "accent": "#C8A878",
            "ink": "#1A1A1A",
            "muted": "#A89888",
            "border": "#D8C8B8",
            "focus": "#6B5B4A",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "tatami": "#E8D8C8",
            "bamboo": "#9A8A7A",
            "stone": "#A8A8A0"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.04)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.06)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-irregular": "clip-path: polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)"
      },
      fontFamily: {
            "heading": [
                  "\"Noto Serif JP\", \"Noto Sans JP\", sans-serif"
            ],
            "body": [
                  "\"Noto Sans JP\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"Noto Sans Mono JP\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-medium": 500
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