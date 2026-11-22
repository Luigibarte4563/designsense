module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFF8E7",
            "surface": "#FFFFFF",
            "primary": "#FF006E",
            "secondary": "#8338EC",
            "accent": "#FFBE0B",
            "ink": "#000000",
            "muted": "#666666",
            "border": "#000000",
            "focus": "#3A86FF",
            "error": "#FF0000",
            "success": "#06D6A0",
            "white": "#FFFFFF",
            "pattern1": "#FB5607",
            "pattern2": "#FF006E",
            "pattern3": "#8338EC",
            "pattern4": "#3A86FF",
            "pattern5": "#06D6A0"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-default": "4px 4px 0 #FF00FF",
            "ds-hover": "6px 6px 0 #00FFFF"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-xl": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"Anton\", \"Bebas Neue\", sans-serif"
            ],
            "body": [
                  "\"Space Mono\", monospace"
            ],
            "mono": [
                  "\"Space Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
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