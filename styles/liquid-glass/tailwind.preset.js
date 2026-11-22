module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "surface": "rgba(255,255,255,0.15)",
            "surfaceStrong": "rgba(255,255,255,0.25)",
            "border": "rgba(255,255,255,0.3)",
            "primary": "#FFFFFF",
            "secondary": "rgba(255,255,255,0.9)",
            "accent": "#FFD700",
            "ink": "#FFFFFF",
            "muted": "rgba(255,255,255,0.7)",
            "focus": "#FFD700",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "caustic": "rgba(255,255,255,0.1)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
            "ds-hover": "0 12px 40px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.1)",
            "ds-refraction": "0 0 60px rgba(100,100,255,0.08)"
      },
      borderRadius: {
            "ds-sm": "16px",
            "ds-md": "24px",
            "ds-lg": "32px",
            "ds-xl": "48px"
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
            "ds": "400ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    }
  }
}