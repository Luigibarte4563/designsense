module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A1A 100%)",
            "surface": "rgba(255,255,255,0.08)",
            "surfaceStrong": "rgba(255,255,255,0.12)",
            "surfaceGlass": "rgba(255,255,255,0.15)",
            "primary": "#00D4FF",
            "secondary": "#FF6B9D",
            "accent": "#FFD700",
            "ink": "#FFFFFF",
            "muted": "rgba(255,255,255,0.6)",
            "border": "rgba(255,255,255,0.15)",
            "focus": "#00D4FF",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "glass": "rgba(255,255,255,0.1)",
            "portal": "rgba(0,212,255,0.2)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)",
            "ds-hover": "0 16px 48px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)",
            "ds-depth1": "0 4px 16px rgba(0,0,0,0.15)",
            "ds-depth2": "0 8px 32px rgba(0,0,0,0.2)",
            "ds-depth3": "0 16px 48px rgba(0,0,0,0.25)",
            "ds-glass": "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)"
      },
      borderRadius: {
            "ds-sm": "12px",
            "ds-md": "18px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"SF Pro Rounded\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"SF Pro Rounded\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", \"JetBrains Mono\", monospace"
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
            "ds": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    }
  }
}