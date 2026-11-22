module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "#09090B",
            "surfaceHover": "#18181B",
            "primary": "#A5F3FC",
            "secondary": "#E9D5FF",
            "accent": "#FDE68A",
            "ink": "#FAFAFA",
            "muted": "#71717A",
            "border": "#27272A",
            "focus": "#A5F3FC",
            "error": "#FCA5A5",
            "success": "#86EFAC",
            "white": "#FFFFFF",
            "elevated": "#18181B"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.5)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.6)"
      },
      borderRadius: {
            "ds-sm": "6px",
            "ds-md": "10px",
            "ds-lg": "14px"
      },
      fontFamily: {
            "heading": [
                  "\"Inter\", \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"SF Pro Text\", sans-serif"
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
            "ds": "200ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}