module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0A0A1A",
            "surface": "#12122A",
            "primary": "#FF0080",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#8844AA",
            "border": "#FF0080",
            "focus": "#00FFFF",
            "error": "#FF0044",
            "success": "#00FF88",
            "white": "#FFFFFF",
            "speed": "#FF0080",
            "neon": "#00FFFF",
            "warning": "#FFAA00",
            "manga": "#FF0080"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 20px rgba(255,0,128,0.4)",
            "ds-hover": "0 0 30px rgba(0,255,255,0.5)",
            "ds-speed": "8px 0 0 #00FFFF, -8px 0 0 #FF0080"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-sharp": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Noto Sans JP\", \"Orbitron\", sans-serif"
            ],
            "body": [
                  "\"Noto Sans JP\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700,
            "ds-black": 900
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