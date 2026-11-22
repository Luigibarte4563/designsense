module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#FFF5E6",
            "primary": "#FF6B6B",
            "secondary": "#4ECDC4",
            "accent": "#FFE66D",
            "ink": "#2D2D2D",
            "muted": "#95A5A6",
            "border": "#000000",
            "focus": "#FF6B6B",
            "error": "#E74C3C",
            "success": "#2ECC71",
            "white": "#FFFFFF",
            "shape1": "#FF6B6B",
            "shape2": "#4ECDC4",
            "shape3": "#FFE66D",
            "shape4": "#95E1D3",
            "shape5": "#F38BA8",
            "shape6": "#A8E6CF"
      } },
      borderWidth: {
            "ds": "3px"
      },
      boxShadow: {
            "ds-default": "6px 6px 0 #FF6B6B",
            "ds-hover": "8px 8px 0 #4ECDC4"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "8px",
            "ds-lg": "16px",
            "ds-xl": "50% 50% 0 0",
            "ds-blob": "60% 40% 30% 70% / 60% 30% 70% 40%"
      },
      fontFamily: {
            "heading": [
                  "\"Permanent Marker\", \"Fredoka One\", cursive"
            ],
            "body": [
                  "\"Nunito\", sans-serif"
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
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      }
    }
  }
}