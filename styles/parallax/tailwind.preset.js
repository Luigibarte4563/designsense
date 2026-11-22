module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "#FAFAFA",
            "surface": "#FFFFFF",
            "primary": "#1E3A5F",
            "secondary": "#4A5568",
            "accent": "#ECC94B",
            "ink": "#1A202C",
            "muted": "#718096",
            "border": "#E2E8F0",
            "focus": "#3182CE",
            "error": "#E53E3E",
            "success": "#38A169",
            "white": "#FFFFFF",
            "layer1": "#FFFFFF",
            "layer2": "#F7FAFC",
            "layer3": "#EDF2F7",
            "layer4": "#E2E8F0"
      } },
      borderWidth: {
            "ds": "0px"
      },
      boxShadow: {
            "ds-default": "0 8px 32px rgba(0,0,0,0.12)",
            "ds-hover": "0 12px 40px rgba(0,0,0,0.16)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px"
      },
      fontFamily: {
            "heading": [
                  "\"Playfair Display\", \"Georgia\", serif"
            ],
            "body": [
                  "\"Inter\", \"Source Serif Pro\", serif"
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
            "ds": "600ms"
      },
      transitionTimingFunction: {
            "ds": "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }
    }
  }
}