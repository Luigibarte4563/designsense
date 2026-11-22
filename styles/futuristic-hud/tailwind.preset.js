module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "rgba(0,20,30,0.8)",
            "primary": "#00FFFF",
            "secondary": "#FF00FF",
            "accent": "#FFFF00",
            "ink": "#E0FFFF",
            "muted": "#008080",
            "border": "rgba(0,255,255,0.3)",
            "focus": "#FFFF00",
            "error": "#FF0044",
            "success": "#00FF88",
            "white": "#FFFFFF",
            "hologram": "rgba(0,255,255,0.15)",
            "scanline": "rgba(0,0,0,0.05)",
            "warning": "#FFAA00"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 0 10px rgba(0,255,255,0.2)",
            "ds-hover": "0 0 20px rgba(0,255,255,0.4)",
            "ds-hologram": "0 0 30px rgba(0,255,255,0.3)"
      },
      borderRadius: {
            "ds-sm": "2px",
            "ds-md": "4px",
            "ds-lg": "8px",
            "ds-sharp": "0px"
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
            "ds-light": 300,
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "100ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
      }
    }
  }
}