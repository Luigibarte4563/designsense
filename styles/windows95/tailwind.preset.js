module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#008080",
            "surface": "#C0C0C0",
            "windowBg": "#C0C0C0",
            "titleBar": "linear-gradient(90deg, #000080 0%, #1084D0 100%)",
            "titleBarInactive": "#808080",
            "primary": "#000000",
            "secondary": "#000080",
            "accent": "#FF0000",
            "ink": "#000000",
            "muted": "#808080",
            "border": "#FFFFFF",
            "focus": "#000080",
            "error": "#FF0000",
            "success": "#008000",
            "white": "#FFFFFF",
            "highlight": "#000080",
            "highlightText": "#FFFFFF",
            "buttonFace": "#C0C0C0",
            "buttonHighlight": "#FFFFFF",
            "buttonShadow": "#808080",
            "buttonDkShadow": "#000000"
      } },
      borderWidth: {
            "ds": "2px"
      },
      boxShadow: {
            "ds-raised": "1px 1px 0 #FFFFFF, 2px 2px 0 #DFDFDF, -1px -1px 0 #808080, -2px -2px 0 #000000",
            "ds-sunken": "1px 1px 0 #000000, 2px 2px 0 #808080, -1px -1px 0 #DFDFDF, -2px -2px 0 #FFFFFF",
            "ds-default": "none"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"MS Sans Serif\", \"Tahoma\", sans-serif"
            ],
            "body": [
                  "\"MS Sans Serif\", \"Tahoma\", sans-serif"
            ],
            "mono": [
                  "\"Fixedsys\", \"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "0ms"
      },
      transitionTimingFunction: {
            "ds": "linear"
      }
    }
  }
}