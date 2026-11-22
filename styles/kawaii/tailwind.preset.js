module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFF0F5",
            "surface": "#FFFFFF",
            "primary": "#FF69B4",
            "secondary": "#87CEEB",
            "accent": "#FFD700",
            "ink": "#4A4A4A",
            "muted": "#FFB3D9",
            "border": "#FFB3D9",
            "focus": "#FF69B4",
            "error": "#FF4466",
            "success": "#88DD88",
            "white": "#FFFFFF",
            "pastel1": "#FFB3D9",
            "pastel2": "#B3D9FF",
            "pastel3": "#D9FFB3",
            "pastel4": "#FFF3B3",
            "pastel5": "#E6B3FF",
            "pastel6": "#FFD9B3",
            "character": "#FF69B4"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 12px rgba(255,179,217,0.3)",
            "ds-hover": "0 6px 16px rgba(255,179,217,0.4)"
      },
      borderRadius: {
            "ds-sm": "16px",
            "ds-md": "24px",
            "ds-lg": "32px",
            "ds-xl": "48px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", \"Fredoka One\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 500,
            "ds-medium": 600,
            "ds-bold": 800
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  }
}