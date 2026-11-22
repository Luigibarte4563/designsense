module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0F4FA",
            "surface": "#FFFFFF",
            "primary": "#4A90E2",
            "secondary": "#6B7A8A",
            "accent": "#FF6B35",
            "ink": "#2D3E50",
            "muted": "#8A9BA8",
            "border": "#D0D8E0",
            "focus": "#4A90E2",
            "error": "#D0021B",
            "success": "#7ED321",
            "white": "#FFFFFF",
            "grid": "rgba(74,144,226,0.1)",
            "blueprint": "rgba(74,144,226,0.05)",
            "dimension": "#FF6B35",
            "note": "#8A9BA8",
            "line": "#4A90E2"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "0 0 10px rgba(74,144,226,0.3)"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "2px",
            "ds-lg": "4px"
      },
      fontFamily: {
            "heading": [
                  "\"JetBrains Mono\", \"Fira Code\", monospace"
            ],
            "body": [
                  "\"JetBrains Mono\", \"Fira Code\", monospace"
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
            "ds": "100ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
      }
    }
  }
}