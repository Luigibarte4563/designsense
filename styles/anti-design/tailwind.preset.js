module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FFFF00",
            "surface": "#FF00FF",
            "primary": "#000000",
            "secondary": "#FFFFFF",
            "accent": "#FF0000",
            "ink": "#000000",
            "muted": "#00FF00",
            "border": "#FF0000",
            "focus": "#0000FF",
            "error": "#FF00FF",
            "success": "#00FF00",
            "white": "#FFFFFF",
            "clashing1": "#FF00FF",
            "clashing2": "#00FFFF",
            "clashing3": "#FFFF00"
      } },
      borderWidth: {
            "ds": "3px"
      },
      boxShadow: {
            "ds-default": "8px 8px 0 #00FF00",
            "ds-hover": "12px 12px 0 #0000FF"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "8px",
            "ds-lg": "0px",
            "ds-xl": "20px"
      },
      fontFamily: {
            "heading": [
                  "\"Comic Sans MS\", \"Chiller\", cursive"
            ],
            "body": [
                  "\"Papyrus\", \"Jokerman\", fantasy"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 900
      },
      transitionDuration: {
            "ds": "100ms"
      },
      transitionTimingFunction: {
            "ds": "steps(2)"
      }
    }
  }
}