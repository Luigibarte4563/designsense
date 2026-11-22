module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F8F9FA",
            "surface": "#FFFFFF",
            "primary": "#0066CC",
            "secondary": "#6C757D",
            "accent": "#FF6B35",
            "ink": "#212529",
            "muted": "#6C757D",
            "border": "rgba(0,0,0,0.08)",
            "focus": "#0066CC",
            "error": "#DC3545",
            "success": "#28A745",
            "white": "#FFFFFF",
            "tile1": "#FFF8F0",
            "tile2": "#F0F8FF",
            "tile3": "#F5F5F5"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.06)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.1)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "12px",
            "ds-lg": "16px",
            "ds-xl": "24px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", monospace"
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
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}