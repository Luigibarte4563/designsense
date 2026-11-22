module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFFFF",
            "surface": "#F5F5F5",
            "primary": "#007AFF",
            "secondary": "#5856D6",
            "accent": "#FF2D55",
            "ink": "#1C1C1E",
            "muted": "#8E8E93",
            "border": "#C6C6C8",
            "focus": "#007AFF",
            "error": "#FF3B30",
            "success": "#34C759",
            "white": "#FFFFFF"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "none",
            "ds-active": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "4px",
            "ds-lg": "8px"
      },
      fontFamily: {
            "heading": [
                  "-apple-system, BlinkMacSystemFont, \"SF Pro Display\", sans-serif"
            ],
            "body": [
                  "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", sans-serif"
            ],
            "mono": [
                  "\"SF Mono\", monospace"
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