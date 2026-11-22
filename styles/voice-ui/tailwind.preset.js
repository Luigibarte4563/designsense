module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "user": "#6366F1",
            "assistant": "#F3F4F6",
            "primary": "#6366F1",
            "secondary": "#EC4899",
            "accent": "#F59E0B",
            "ink": "#1F2937",
            "muted": "#6B7280",
            "border": "#E5E7EB",
            "focus": "#6366F1",
            "error": "#EF4444",
            "success": "#22C55E",
            "white": "#FFFFFF",
            "listening": "#10B981",
            "thinking": "#F59E0B",
            "speaking": "#6366F1"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.06)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.1)"
      },
      borderRadius: {
            "ds-sm": "12px",
            "ds-md": "18px",
            "ds-lg": "24px",
            "ds-pill": "9999px"
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
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}