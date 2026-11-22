module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "surface": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            "primary": "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)",
            "secondary": "linear-gradient(135deg, #6BCB77 0%, #43E97B 100%)",
            "accent": "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
            "ink": "#FFFFFF",
            "muted": "rgba(255,255,255,0.8)",
            "border": "rgba(255,255,255,0.3)",
            "focus": "#FFD700",
            "error": "#FF6B6B",
            "success": "#4ADE80",
            "white": "#FFFFFF",
            "duotone1": "#667eea",
            "duotone2": "#764ba2"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 4px 20px rgba(0,0,0,0.15)",
            "ds-hover": "0 8px 30px rgba(0,0,0,0.2)",
            "ds-glow": "0 0 40px rgba(255,100,100,0.4)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "32px"
      },
      fontFamily: {
            "heading": [
                  "\"Poppins\", \"Inter\", sans-serif"
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
            "ds-medium": 600,
            "ds-bold": 700
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