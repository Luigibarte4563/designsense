module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#0D0D0D",
            "surface": "#1A0A0A",
            "primary": "#8B0000",
            "secondary": "#4A0A0A",
            "accent": "#D4AF37",
            "ink": "#F5F0E8",
            "muted": "#8B4A4A",
            "border": "#4A0A0A",
            "focus": "#D4AF37",
            "error": "#FF0000",
            "success": "#2E8B57",
            "white": "#F5F0E8",
            "blood": "#8B0000",
            "gold": "#D4AF37",
            "stone": "#2A2A2A",
            "velvet": "#1A0A0A"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 20px rgba(0,0,0,0.5)",
            "ds-hover": "0 8px 30px rgba(139,0,0,0.3)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "16px",
            "ds-arch": "50% 50% 0 0"
      },
      fontFamily: {
            "heading": [
                  "\"Cinzel\", \"Trajan Pro\", \"Old English Text MT\", serif"
            ],
            "body": [
                  "\"Crimson Text\", \"Garamond\", serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "500ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
      }
    }
  }
}