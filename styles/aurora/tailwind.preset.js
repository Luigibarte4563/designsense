module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
            "surface": "rgba(255,255,255,0.1)",
            "surfaceStrong": "rgba(255,255,255,0.15)",
            "border": "rgba(255,255,255,0.2)",
            "primary": "#FFFFFF",
            "secondary": "rgba(255,255,255,0.9)",
            "accent": "#FFD700",
            "ink": "#1A1A2E",
            "muted": "rgba(255,255,255,0.7)",
            "focus": "#FFD700",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "mesh1": "rgba(102, 126, 234, 0.4)",
            "mesh2": "rgba(118, 75, 162, 0.4)",
            "mesh3": "rgba(240, 147, 251, 0.4)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 24px rgba(0,0,0,0.1)",
            "ds-hover": "0 8px 32px rgba(0,0,0,0.15)",
            "ds-glow": "0 0 60px rgba(100,100,255,0.3)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"Space Grotesk\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"Inter\", sans-serif"
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