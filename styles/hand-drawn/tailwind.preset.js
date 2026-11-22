module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FDFBF7",
            "surface": "#FEFEFE",
            "primary": "#2D2D2D",
            "secondary": "#8B4513",
            "accent": "#E74C3C",
            "ink": "#2D2D2D",
            "muted": "#95A5A6",
            "border": "#2D2D2D",
            "focus": "#E74C3C",
            "error": "#E74C3C",
            "success": "#2ECC71",
            "white": "#FFFFFF",
            "paper": "#FDFBF7",
            "pencil": "#4A4A4A",
            "highlighter": "#FFFF00"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "2px 2px 0 #95A5A6",
            "ds-hover": "3px 3px 0 #7F8C8D"
      },
      borderRadius: {
            "ds-sm": "4px 8px 4px 8px",
            "ds-md": "8px 16px 8px 16px",
            "ds-lg": "12px 24px 12px 24px",
            "ds-sketch": "10% 90% 90% 10% / 10% 10% 90% 90%"
      },
      fontFamily: {
            "heading": [
                  "\"Caveat\", \"Patrick Hand\", cursive"
            ],
            "body": [
                  "\"Architects Daughter\", \"Indie Flower\", cursive"
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
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      }
    }
  }
}