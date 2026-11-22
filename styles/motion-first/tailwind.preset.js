module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "primary": "#6366F1",
            "secondary": "#EC4899",
            "accent": "#F59E0B",
            "ink": "#1F2937",
            "muted": "#6B7280",
            "border": "#E5E7EB",
            "focus": "#6366F1",
            "error": "#EF4444",
            "success": "#22C55E",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.1)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.15)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "12px",
            "ds-lg": "16px"
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