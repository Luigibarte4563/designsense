module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0F4F8",
            "surface": "#FFFFFF",
            "primary": "#1E3A5F",
            "primaryLight": "#2C5282",
            "primaryLighter": "#3182CE",
            "primaryLightest": "#63B3ED",
            "primaryDark": "#1A365D",
            "primaryDarker": "#0F2A4A",
            "accent": "#FFFFFF",
            "ink": "#1E3A5F",
            "muted": "#4A5568",
            "border": "#CBD5E0",
            "focus": "#3182CE",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 2px 8px rgba(0,0,0,0.08)",
            "ds-hover": "0 4px 16px rgba(0,0,0,0.12)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", sans-serif"
            ],
            "body": [
                  "\"Inter\", sans-serif"
            ],
            "mono": [
                  "\"Fira Code\", monospace"
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
            "ds": "ease-out"
      }
    }
  }
}