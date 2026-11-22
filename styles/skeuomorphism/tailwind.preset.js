module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(145deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%)",
            "surface": "linear-gradient(145deg, #FFFFFF 0%, #F0F0F0 100%)",
            "primary": "linear-gradient(145deg, #007AFF 0%, #0051D5 100%)",
            "secondary": "linear-gradient(145deg, #5856D6 0%, #3A38A0 100%)",
            "accent": "linear-gradient(145deg, #FF2D55 0%, #CC0033 100%)",
            "ink": "#1C1C1E",
            "muted": "#8E8E93",
            "border": "rgba(0,0,0,0.15)",
            "focus": "#007AFF",
            "error": "#FF3B30",
            "success": "#34C759",
            "white": "#FFFFFF",
            "highlight": "rgba(255,255,255,0.4)",
            "shadow": "rgba(0,0,0,0.3)"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            "ds-hover": "0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
            "ds-active": "inset 0 2px 6px rgba(0,0,0,0.3)",
            "ds-pressed": "inset 0 3px 8px rgba(0,0,0,0.4)"
      },
      borderRadius: {
            "ds-sm": "6px",
            "ds-md": "12px",
            "ds-lg": "16px",
            "ds-xl": "24px"
      },
      fontFamily: {
            "heading": [
                  "\"Helvetica Neue\", Helvetica, sans-serif"
            ],
            "body": [
                  "\"Helvetica Neue\", Helvetica, sans-serif"
            ],
            "mono": [
                  "Menlo, monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      }
    }
  }
}