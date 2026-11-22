module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F9FAFB",
            "surface": "#FFFFFF",
            "primary": "#1570EF",
            "primaryHover": "#1D65D8",
            "secondary": "#6B7280",
            "accent": "#00A3E0",
            "ink": "#111827",
            "muted": "#6B7280",
            "border": "#D0D5DD",
            "focus": "#1570EF",
            "error": "#DC2626",
            "success": "#059669",
            "white": "#FFFFFF",
            "tableHeader": "#F3F4F6",
            "tableStripe": "#F9FAFB"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 1px 3px rgba(0,0,0,0.08)",
            "ds-hover": "0 4px 12px rgba(0,0,0,0.1)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "6px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"System UI\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"System UI\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Fira Code\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "150ms"
      },
      transitionTimingFunction: {
            "ds": "ease-out"
      }
    }
  }
}