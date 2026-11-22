module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(180deg, #1A002E 0%, #16213E 50%, #0F3460 100%)",
            "surface": "rgba(255,255,255,0.03)",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFD700",
            "ink": "#FFFFFF",
            "muted": "#8A2BE2",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "grid": "rgba(255,0,255,0.15)",
            "sun": "#FF6600",
            "palm": "#0F3460"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 20px rgba(255,0,255,0.5)",
            "ds-hover": "0 0 30px rgba(0,255,255,0.6)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
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
            "ds": "400ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
      }
    }
  }
}