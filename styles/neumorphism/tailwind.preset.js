module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#E0E5EC",
            "surface": "#E0E5EC",
            "primary": "#6C7A89",
            "secondary": "#A3B1C6",
            "accent": "#FF6B6B",
            "ink": "#2D3748",
            "muted": "#8A9BB8",
            "border": "transparent",
            "focus": "#4299E1",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF",
            "shadowDark": "#A3B1C6",
            "shadowLight": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF",
            "ds-hover": "10px 10px 20px #A3B1C6, -10px -10px 20px #FFFFFF",
            "ds-active": "inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF",
            "ds-pressed": "inset 6px 6px 12px #A3B1C6, inset -6px -6px 12px #FFFFFF",
            "ds-concave": "inset 8px 8px 16px #A3B1C6, inset -8px -8px 16px #FFFFFF"
      },
      borderRadius: {
            "ds-sm": "12px",
            "ds-md": "20px",
            "ds-lg": "28px",
            "ds-xl": "40px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", \"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
      }
    }
  }
}