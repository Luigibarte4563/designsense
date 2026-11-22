module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#F0EDE5",
            "surface": "#FFFFFF",
            "layer1": "#F5F0E8",
            "layer2": "#E8E0D0",
            "layer3": "#D4C8B0",
            "layer4": "#C0B098",
            "primary": "#8B4513",
            "secondary": "#556B2F",
            "accent": "#CD853F",
            "ink": "#3D2B1F",
            "muted": "#A09078",
            "border": "transparent",
            "focus": "#8B4513",
            "error": "#B22222",
            "success": "#556B2F",
            "white": "#FFFFFF",
            "shadow": "rgba(0,0,0,0.15)",
            "paperEdge": "#D4C8B0"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06)",
            "ds-hover": "0 4px 8px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)",
            "ds-layer1": "0 2px 4px rgba(0,0,0,0.1)",
            "ds-layer2": "0 4px 8px rgba(0,0,0,0.08)",
            "ds-layer3": "0 8px 16px rgba(0,0,0,0.06)",
            "ds-layer4": "0 16px 24px rgba(0,0,0,0.05)"
      },
      borderRadius: {
            "ds-sm": "4px",
            "ds-md": "8px",
            "ds-lg": "12px",
            "ds-xl": "16px"
      },
      fontFamily: {
            "heading": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "body": [
                  "\"Nunito\", \"Quicksand\", sans-serif"
            ],
            "mono": [
                  "\"Courier New\", monospace"
            ]
      },
      fontWeight: {
            "ds-normal": 400,
            "ds-bold": 700
      },
      transitionDuration: {
            "ds": "300ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  }
}