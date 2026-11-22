module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FEF7FF",
            "surface": "#FFFFFF",
            "surfaceVariant": "#F5F0F6",
            "primary": "#6750A4",
            "onPrimary": "#FFFFFF",
            "primaryContainer": "#EADDFF",
            "onPrimaryContainer": "#21005D",
            "secondary": "#625B71",
            "onSecondary": "#FFFFFF",
            "secondaryContainer": "#E8DEF8",
            "onSecondaryContainer": "#1D192B",
            "tertiary": "#7D5260",
            "onTertiary": "#FFFFFF",
            "tertiaryContainer": "#FFD8E4",
            "onTertiaryContainer": "#31111D",
            "ink": "#1C1B1F",
            "muted": "#6F6D76",
            "border": "#CAC4D0",
            "focus": "#6750A4",
            "error": "#B3261E",
            "success": "#388E3C",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 4px rgba(0,0,0,0.15)",
            "ds-hover": "0 4px 8px rgba(0,0,0,0.2)",
            "ds-active": "0 1px 2px rgba(0,0,0,0.15)",
            "ds-level1": "0 2px 4px rgba(0,0,0,0.15)",
            "ds-level2": "0 4px 8px rgba(0,0,0,0.2)",
            "ds-level3": "0 8px 16px rgba(0,0,0,0.25)",
            "ds-level4": "0 16px 24px rgba(0,0,0,0.3)",
            "ds-level5": "0 24px 32px rgba(0,0,0,0.35)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-xl": "16px",
            "ds-pill": "9999px"
      },
      fontFamily: {
            "heading": [
                  "\"Google Sans\", \"Roboto\", sans-serif"
            ],
            "body": [
                  "\"Roboto\", sans-serif"
            ],
            "mono": [
                  "\"Roboto Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-medium": 500,
            "ds-bold": 700
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