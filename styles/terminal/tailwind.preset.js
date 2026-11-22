module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#000000",
            "surface": "#0D1117",
            "primary": "#00FF00",
            "secondary": "#00CC00",
            "accent": "#FFFF00",
            "ink": "#00FF00",
            "muted": "#004400",
            "border": "#003300",
            "focus": "#FFFF00",
            "error": "#FF0000",
            "success": "#00FF00",
            "white": "#00FF00",
            "cursor": "#00FF00",
            "selection": "rgba(0,255,0,0.3)",
            "prompt": "#00FF00",
            "comment": "#008800",
            "string": "#FFA500",
            "keyword": "#00FFFF",
            "function": "#FF00FF"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "none",
            "ds-hover": "0 0 10px #00FF00"
      },
      borderRadius: {
            "ds-sm": "0px",
            "ds-md": "0px",
            "ds-lg": "0px"
      },
      fontFamily: {
            "heading": [
                  "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace"
            ],
            "body": [
                  "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace"
            ],
            "mono": [
                  "\"JetBrains Mono\", \"Fira Code\", \"Cascadia Code\", monospace"
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