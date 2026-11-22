module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0F4F8",
            "surface": "#FFFFFF",
            "top": "#FFFFFF",
            "side": "#E0E8F0",
            "darkSide": "#C0D0E0",
            "primary": "#4A90E2",
            "secondary": "#7ED321",
            "accent": "#F5A623",
            "ink": "#2D3E50",
            "muted": "#8A9BA8",
            "border": "#D0D8E0",
            "focus": "#4A90E2",
            "error": "#D0021B",
            "success": "#7ED321",
            "white": "#FFFFFF",
            "ground": "#E0E8F0",
            "grid": "rgba(74,144,226,0.1)"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "4px 4px 8px rgba(0,0,0,0.15), 8px 8px 16px rgba(0,0,0,0.1), 12px 12px 24px rgba(0,0,0,0.05)",
            "ds-hover": "6px 6px 12px rgba(0,0,0,0.2), 12px 12px 24px rgba(0,0,0,0.15), 18px 18px 36px rgba(0,0,0,0.1)",
            "ds-iso": "10px 10px 20px rgba(0,0,0,0.2), 20px 20px 40px rgba(0,0,0,0.15)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}