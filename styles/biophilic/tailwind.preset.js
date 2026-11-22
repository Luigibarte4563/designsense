module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F1F4ED",
            "surface": "#FAFCF8",
            "primary": "#4A6B3A",
            "secondary": "#8F9B7A",
            "accent": "#C9A84C",
            "ink": "#2D3A1A",
            "muted": "#6B7A5A",
            "border": "#C4D0B0",
            "focus": "#4A6B3A",
            "error": "#B22222",
            "success": "#4A6B3A",
            "white": "#FFFFFF",
            "leaf": "#6B8E5A",
            "wood": "#8B7355",
            "bark": "#5D4E37",
            "moss": "#8F9B7A",
            "soil": "#4A3A2A",
            "sky": "#A8C8E8"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 4px 16px rgba(0,0,0,0.08)",
            "ds-hover": "0 8px 24px rgba(0,0,0,0.12)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-organic": "30% 70% 70% 30% / 30% 30% 70% 70%"
      },
      fontFamily: {
            "heading": [
                  "\"IBM Plex Sans\", \"Inter\", sans-serif"
            ],
            "body": [
                  "\"IBM Plex Sans\", \"Inter\", sans-serif"
            ],
            "mono": [
                  "\"IBM Plex Mono\", monospace"
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
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  }
}