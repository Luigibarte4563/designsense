module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#E8F4FD",
            "surface": "#FFFFFF",
            "primary": "linear-gradient(180deg, #4A90E2 0%, #2E6FD6 100%)",
            "secondary": "linear-gradient(180deg, #7ED321 0%, #5DB81C 100%)",
            "accent": "linear-gradient(180deg, #F5A623 0%, #E8941A 100%)",
            "ink": "#333333",
            "muted": "#999999",
            "border": "#CCCCCC",
            "focus": "#4A90E2",
            "error": "#D0021B",
            "success": "#7ED321",
            "white": "#FFFFFF",
            "reflection": "rgba(255,255,255,0.3)",
            "badge": "#FF3B30"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
            "ds-hover": "0 5px 12px rgba(0,0,0,0.4)"
      },
      borderRadius: {
            "ds-sm": "6px",
            "ds-md": "10px",
            "ds-lg": "14px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Helvetica Neue\", \"Lucida Grande\", sans-serif"
            ],
            "body": [
                  "\"Helvetica Neue\", \"Lucida Grande\", sans-serif"
            ],
            "mono": [
                  "\"Monaco\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "250ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
      }
    }
  }
}