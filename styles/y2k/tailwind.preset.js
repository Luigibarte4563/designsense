module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(180deg, #00FFFF 0%, #0080FF 50%, #FF00FF 100%)",
            "surface": "rgba(255,255,255,0.3)",
            "surfaceStrong": "rgba(255,255,255,0.5)",
            "primary": "#00FFFF",
            "secondary": "#FF00FF",
            "accent": "#FFFF00",
            "ink": "#000080",
            "muted": "#008080",
            "border": "#00FFFF",
            "focus": "#FF00FF",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "chrome": "linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 50%, #FFFFFF 100%)",
            "bubble": "rgba(255,255,255,0.4)",
            "water": "rgba(0,255,255,0.2)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 8px 24px rgba(0,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
            "ds-hover": "0 12px 32px rgba(0,255,255,0.4)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-bubble": "50%"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Eurostile\", sans-serif"
            ],
            "body": [
                  "\"Trebuchet MS\", \"Verdana\", sans-serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
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
            "ds": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      }
    }
  }
}