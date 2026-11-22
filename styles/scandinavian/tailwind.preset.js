module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDFBF7",
            "surface": "#FFFFFF",
            "primary": "#2D4A3E",
            "secondary": "#8B9A8C",
            "accent": "#D4A574",
            "ink": "#1A1A1A",
            "muted": "#8B9A8C",
            "border": "#E8E4DD",
            "focus": "#2D4A3E",
            "error": "#C0392B",
            "success": "#2D4A3E",
            "white": "#FFFFFF",
            "wood": "#C9B896",
            "stone": "#A8A8A0",
            "linen": "#F5F0E8"
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
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"IBM Plex Sans\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"IBM Plex Sans\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"IBM Plex Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
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