module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0A0A0F",
            "surface": "#12121A",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#6B4E8C",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0044",
            "success": "#00FF88",
            "white": "#FFFFFF",
            "glitch1": "#FF00FF",
            "glitch2": "#00FFFF",
            "grid": "rgba(255,0,255,0.1)",
            "scanline": "rgba(0,0,0,0.1)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 0 20px rgba(255,0,255,0.3)",
            "ds-hover": "0 0 30px rgba(0,255,255,0.4)",
            "ds-glitch": "2px 0 0 #00FFFF, -2px 0 0 #FF00FF"
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
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "150ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
      }
    }
  }
}