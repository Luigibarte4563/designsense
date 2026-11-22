module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "#0A0A0A",
            "primary": "#FF00FF",
            "secondary": "#00FFFF",
            "accent": "#FFFF00",
            "ink": "#FFFFFF",
            "muted": "#444444",
            "border": "#FF00FF",
            "focus": "#00FFFF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "noise": "rgba(255,255,255,0.02)",
            "scanline": "rgba(0,0,0,0.1)",
            "rgbShift": "rgba(255,0,255,0.5)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 0 10px rgba(255,0,255,0.3)",
            "ds-hover": "0 0 20px rgba(0,255,255,0.4)",
            "ds-glitch": "3px 0 0 #00FFFF, -3px 0 0 #FF00FF"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "\"JetBrains Mono\", \"Share Tech Mono\", monospace"
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
            "ds": "50ms"
      },
      transitionTimingFunction: {
            "ds": "steps(2)"
      }
    }
  }
}