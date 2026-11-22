module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: '#FFFFFF',
          surface: '#FAFAFA',
          primary: '#0066CC',
          secondary: '#666666',
          ink: '#1A1A1A',
          muted: '#666666',
          border: '#E5E5E5',
          focus: '#0066CC',
          error: '#CC3300',
          success: '#00AA55',
        }
      },
      borderWidth: { 'ds': '1px' },
      boxShadow: { 'ds': '0 2px 4px rgba(0,0,0,0.1)', 'ds-hover': '0 4px 8px rgba(0,0,0,0.15)' },
      borderRadius: { 'ds-sm': '4px', 'ds-md': '8px', 'ds-lg': '12px' },
      fontFamily: {
        heading: ['system-ui', 'sans-serif'],
        body: ['system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      fontWeight: { 'ds-normal': 400, 'ds-bold': 600 },
      transitionDuration: { 'ds': '200ms' },
      transitionTimingFunction: { 'ds': 'ease-out' },
    }
  }
}