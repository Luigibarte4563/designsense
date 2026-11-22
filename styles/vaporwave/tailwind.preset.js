module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #1A0033 0%, #000033 50%, #001A33 100%)",
            "surface": "rgba(255,255,255,0.05)",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#FF00FF",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "grid": "rgba(255,0,255,0.2)",
            "statue": "#E0E0E0",
            "sunset": "linear-gradient(180deg, #FF00FF 0%, #FF6600 50%, #FFFF00 100%)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 30px rgba(255,0,255,0.4)",
            "ds-hover": "0 0 40px rgba(0,255,255,0.5)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-grid": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Rajdhani\", sans-serif"
            ],
            "body": [
                  "\"Share Tech Mono\", monospace"
            ],
            "mono": [
                  "\"Share Tech Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
      }
    }
  }
}