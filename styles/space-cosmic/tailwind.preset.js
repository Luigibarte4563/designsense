module.exports = {
  theme: {
    extend: {
      colors: { ds: {
            "bg": "linear-gradient(180deg, #050510 0%, #100520 50%, #051020 100%)",
            "surface": "rgba(20,20,40,0.6)",
            "primary": "#6688FF",
            "secondary": "#FF66AA",
            "accent": "#FFAA00",
            "ink": "#FFFFFF",
            "muted": "#666688",
            "border": "rgba(255,255,255,0.1)",
            "focus": "#FF66AA",
            "error": "#FF4466",
            "success": "#44FF88",
            "white": "#FFFFFF",
            "star": "#FFFFFF",
            "nebula1": "rgba(102,136,255,0.3)",
            "nebula2": "rgba(255,102,170,0.3)",
            "nebula3": "rgba(255,170,0,0.3)"
      } },
      borderWidth: {
            "ds": "1px"
      },
      boxShadow: {
            "ds-default": "0 0 40px rgba(100,100,255,0.2)",
            "ds-hover": "0 0 60px rgba(255,100,255,0.3)",
            "ds-glow": "0 0 80px rgba(100,100,255,0.4)"
      },
      borderRadius: {
            "ds-sm": "8px",
            "ds-md": "16px",
            "ds-lg": "24px",
            "ds-xl": "48px"
      },
      fontFamily: {
            "heading": [
                  "\"Orbitron\", \"Exo 2\", sans-serif"
            ],
            "body": [
                  "\"Inter\", \"Exo 2\", sans-serif"
            ],
            "mono": [
                  "\"JetBrains Mono\", monospace"
            ]
      },
      fontWeight: {
            "ds-light": 300,
            "ds-normal": 400,
            "ds-bold": 600
      },
      transitionDuration: {
            "ds": "600ms"
      },
      transitionTimingFunction: {
            "ds": "ease-in-out"
      }
    }
  }
}