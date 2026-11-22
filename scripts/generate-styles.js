#!/usr/bin/env node
/**
 * Style Preset Generator for designsense
 * Generates STYLE.md, tokens.json, css-variables.css, tailwind.preset.js for each style
 */

const fs = require('fs');
const path = require('path');

const STYLES_DIR = path.join(__dirname, '..', 'styles');

const styleDefinitions = {
  // ===== DEPTH AND SURFACE STYLES =====
  'flat-design': {
    name: 'Flat Design',
    description: 'Solid colors, no shadows or gradients, clean and simple',
    category: 'depth-surface',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: { default: 'none', hover: 'none', active: 'none' },
      radius: { sm: '0px', md: '4px', lg: '8px' },
      color: {
        bg: '#FFFFFF',
        surface: '#F5F5F5',
        primary: '#007AFF',
        secondary: '#5856D6',
        accent: '#FF2D55',
        ink: '#1C1C1E',
        muted: '#8E8E93',
        border: '#C6C6C8',
        focus: '#007AFF',
        error: '#FF3B30',
        success: '#34C759',
        white: '#FFFFFF'
      },
      font: {
        heading: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        body: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
        mono: '"SF Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '150ms', easing: 'ease-out' }
    },
    do: [
      'Use solid, opaque colors only',
      'Rely on color contrast for hierarchy',
      'Keep border radius consistent (0, 4, or 8px)',
      'Use typography and spacing for visual separation'
    ],
    dont: [
      'No shadows, gradients, or transparency',
      'No 3D effects or depth illusions',
      'No textures or patterns',
      'No skeuomorphic details'
    ],
    a11yNotes: [
      'High contrast by default — ensure 4.5:1 on all text',
      'Focus ring: 2px solid primary with 2px offset',
      'Touch targets: 44px via padding (no border contribution)'
    ]
  },

  'semi-flat': {
    name: 'Semi-Flat / Flat 2.0',
    description: 'Flat design with subtle shadows for depth and hierarchy',
    category: 'depth-surface',
    tokens: {
      border: { width: '1px', color: '#E0E0E0' },
      shadow: { default: '0 1px 3px rgba(0,0,0,0.08)', hover: '0 4px 12px rgba(0,0,0,0.12)', active: '0 1px 3px rgba(0,0,0,0.08)' },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        primary: '#1976D2',
        secondary: '#7B1FA2',
        accent: '#E91E63',
        ink: '#212121',
        muted: '#757575',
        border: '#E0E0E0',
        focus: '#1976D2',
        error: '#D32F2F',
        success: '#388E3C',
        white: '#FFFFFF'
      },
      font: {
        heading: '"Roboto", "Helvetica Neue", sans-serif',
        body: '"Roboto", "Helvetica Neue", sans-serif',
        mono: '"Roboto Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 700 }
      },
      motion: { duration: '200ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    },
    do: [
      'Use subtle shadows (1-2px blur) for elevation',
      'Layer surfaces with shadow depth (1-3 levels)',
      'Keep colors flat but allow shadow for hierarchy',
      'Use consistent border radius scale'
    ],
    dont: [
      'No heavy shadows (>12px blur)',
      'No gradients or transparency',
      'No dramatic depth effects',
      'Don\'t overuse shadows — 2-3 levels max'
    ],
    a11yNotes: [
      'Shadows don\'t affect contrast — test text on flat backgrounds',
      'Focus ring visible on all surfaces',
      'Shadows disappear in high contrast mode'
    ]
  },

  'material-design': {
    name: 'Material Design',
    description: 'Elevation system, ripple effects, tonal color roles',
    category: 'depth-surface',
    tokens: {
      border: { width: '1px', color: 'rgba(0,0,0,0.12)' },
      shadow: {
        default: '0 2px 4px rgba(0,0,0,0.15)',
        hover: '0 4px 8px rgba(0,0,0,0.2)',
        active: '0 1px 2px rgba(0,0,0,0.15)',
        level1: '0 2px 4px rgba(0,0,0,0.15)',
        level2: '0 4px 8px rgba(0,0,0,0.2)',
        level3: '0 8px 16px rgba(0,0,0,0.25)',
        level4: '0 16px 24px rgba(0,0,0,0.3)',
        level5: '0 24px 32px rgba(0,0,0,0.35)'
      },
      radius: { sm: '4px', md: '8px', lg: '12px', xl: '16px', pill: '9999px' },
      color: {
        bg: '#FEF7FF',
        surface: '#FFFFFF',
        surfaceVariant: '#F5F0F6',
        primary: '#6750A4',
        onPrimary: '#FFFFFF',
        primaryContainer: '#EADDFF',
        onPrimaryContainer: '#21005D',
        secondary: '#625B71',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#E8DEF8',
        onSecondaryContainer: '#1D192B',
        tertiary: '#7D5260',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#FFD8E4',
        onTertiaryContainer: '#31111D',
        ink: '#1C1B1F',
        muted: '#6F6D76',
        border: '#CAC4D0',
        focus: '#6750A4',
        error: '#B3261E',
        success: '#388E3C',
        white: '#FFFFFF'
      },
      font: {
        heading: '"Google Sans", "Roboto", sans-serif',
        body: '"Roboto", sans-serif',
        mono: '"Roboto Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 700 }
      },
      motion: { duration: '200ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      ripple: { color: 'rgba(0,0,0,0.12)', duration: '300ms' }
    },
    do: [
      'Use elevation levels (1-5) consistently',
      'Apply ripple effect on all interactive surfaces',
      'Follow tonal color palette (primary, secondary, tertiary)',
      'Use baseline grid (8dp) for spacing',
      'Respect motion duration standards'
    ],
    dont: [
      'Don\'t mix elevation levels arbitrarily',
      'Don\'t use custom shadows outside the system',
      'Don\'t skip ripple on touch targets',
      'Don\'t use non-Material color roles'
    ],
    a11yNotes: [
      'Elevation doesn\'t replace focus indicators',
      'Ripple respects prefers-reduced-motion',
      'Tonal palette ensures contrast compliance',
      'Minimum touch target 48x48dp'
    ]
  },

  'skeuomorphism': {
    name: 'Skeuomorphism',
    description: 'Realistic textures, gradients, and depth mimicking physical objects',
    category: 'depth-surface',
    tokens: {
      border: { width: '2px', color: 'rgba(0,0,0,0.2)' },
      shadow: {
        default: '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
        hover: '0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
        active: 'inset 0 2px 6px rgba(0,0,0,0.3)',
        pressed: 'inset 0 3px 8px rgba(0,0,0,0.4)'
      },
      radius: { sm: '6px', md: '12px', lg: '16px', xl: '24px' },
      color: {
        bg: 'linear-gradient(145deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%)',
        surface: 'linear-gradient(145deg, #FFFFFF 0%, #F0F0F0 100%)',
        primary: 'linear-gradient(145deg, #007AFF 0%, #0051D5 100%)',
        secondary: 'linear-gradient(145deg, #5856D6 0%, #3A38A0 100%)',
        accent: 'linear-gradient(145deg, #FF2D55 0%, #CC0033 100%)',
        ink: '#1C1C1E',
        muted: '#8E8E93',
        border: 'rgba(0,0,0,0.15)',
        focus: '#007AFF',
        error: '#FF3B30',
        success: '#34C759',
        white: '#FFFFFF',
        highlight: 'rgba(255,255,255,0.4)',
        shadow: 'rgba(0,0,0,0.3)'
      },
      font: {
        heading: '"Helvetica Neue", Helvetica, sans-serif',
        body: '"Helvetica Neue", Helvetica, sans-serif',
        mono: 'Menlo, monospace',
        weight: { normal: 400, medium: 500, bold: 700 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' },
      texture: {
        noise: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        gloss: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)'
      }
    },
    do: [
      'Use realistic gradients for 3D form',
      'Add inner shadows for pressed/inset states',
      'Apply subtle noise texture on surfaces',
      'Use highlights and shadows for physical realism',
      'Match real-world material behavior'
    ],
    dont: [
      'Don\'t use flat colors without depth cues',
      'Don\'t skip pressed/active states',
      'Don\'t use uniform lighting — follow a light source',
      'Don\'t overdo textures — keep it subtle'
    ],
    a11yNotes: [
      'Gradients must maintain 4.5:1 contrast at all points',
      'Focus ring: 3px solid with offset (visible on gradients)',
      'Textures don\'t impair text readability',
      'Touch targets larger to compensate for visual complexity'
    ]
  },

  'neumorphism': {
    name: 'Neumorphism (Soft UI)',
    description: 'Soft extruded surfaces with dual shadows (light/dark)',
    category: 'depth-surface',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: {
        default: '8px 8px 16px #A3B1C6, -8px -8px 16px #FFFFFF',
        hover: '10px 10px 20px #A3B1C6, -10px -10px 20px #FFFFFF',
        active: 'inset 4px 4px 8px #A3B1C6, inset -4px -4px 8px #FFFFFF',
        pressed: 'inset 6px 6px 12px #A3B1C6, inset -6px -6px 12px #FFFFFF',
        concave: 'inset 8px 8px 16px #A3B1C6, inset -8px -8px 16px #FFFFFF'
      },
      radius: { sm: '12px', md: '20px', lg: '28px', xl: '40px' },
      color: {
        bg: '#E0E5EC',
        surface: '#E0E5EC',
        primary: '#6C7A89',
        secondary: '#A3B1C6',
        accent: '#FF6B6B',
        ink: '#2D3748',
        muted: '#8A9BB8',
        border: 'transparent',
        focus: '#4299E1',
        error: '#E53E3E',
        success: '#38A169',
        white: '#FFFFFF',
        shadowDark: '#A3B1C6',
        shadowLight: '#FFFFFF'
      },
      font: {
        heading: '"Inter", "SF Pro Display", sans-serif',
        body: '"Inter", "SF Pro Text", sans-serif',
        mono: '"SF Mono", "Fira Code", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '200ms', easing: 'ease-out' }
    },
    do: [
      'Use dual shadows (dark bottom-right, light top-left)',
      'Keep surfaces same color as background',
      'Use inset shadows for pressed/active states',
      'Maintain consistent light source (top-left)',
      'Use generous border radius (12px+)'
    ],
    dont: [
      'Don\'t use borders — shadows define edges',
      'Don\'t use high contrast colors on surfaces',
      'Don\'t mix with other shadow styles',
      'Don\'t use on dark backgrounds (breaks illusion)'
    ],
    a11yNotes: [
      'CRITICAL: Low contrast — add visible borders on interactive elements',
      'Focus ring: 3px solid primary with 3px offset (required)',
      'Add distinct focus styles beyond shadow changes',
      'Consider alternative style for accessibility-critical UIs'
    ]
  },

  'claymorphism': {
    name: 'Claymorphism',
    description: 'Puffy 3D rounded shapes with soft inner and outer shadows',
    category: 'depth-surface',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: {
        default: '12px 12px 24px #C5CAD8, -12px -12px 24px #FFFFFF',
        hover: '16px 16px 32px #C5CAD8, -16px -16px 32px #FFFFFF',
        active: 'inset 6px 6px 12px #C5CAD8, inset -6px -6px 12px #FFFFFF',
        inner: 'inset 8px 8px 16px #C5CAD8, inset -8px -8px 16px #FFFFFF',
        float: '20px 20px 40px #C5CAD8, -20px -20px 40px #FFFFFF'
      },
      radius: { sm: '20px', md: '32px', lg: '48px', xl: '64px', pill: '9999px' },
      color: {
        bg: '#E0E5EC',
        surface: '#E0E5EC',
        primary: '#7C8DB5',
        secondary: '#A3B1C6',
        accent: '#FF8A8A',
        ink: '#2D3748',
        muted: '#8A9BB8',
        border: 'transparent',
        focus: '#4299E1',
        error: '#E53E3E',
        success: '#38A169',
        white: '#FFFFFF',
        shadowDark: '#C5CAD8',
        shadowLight: '#FFFFFF'
      },
      font: {
        heading: '"Nunito", "Quicksand", sans-serif',
        body: '"Nunito", "Quicksand", sans-serif',
        mono: '"Fira Code", monospace',
        weight: { normal: 500, medium: 600, bold: 800 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    },
    do: [
      'Use very large border radius (20px+ for small, 48px+ for large)',
      'Dual shadows with soft, diffused edges',
      'Inner shadows for depth on larger surfaces',
      'Puffy, inflated appearance',
      'Pastel or muted color palette'
    ],
    dont: [
      'Don\'t use sharp corners or small radius',
      'Don\'t use high contrast or saturated colors',
      'Don\'t use hard-edged shadows',
      'Don\'t mix with flat design elements'
    ],
    a11yNotes: [
      'Very low contrast — add visible borders on all interactive elements',
      'Focus ring: 4px solid with 4px offset (required)',
      'Consider alternative for text-heavy interfaces',
      'Large radius reduces touch target precision — increase padding'
    ]
  },

  'liquid-glass': {
    name: 'Liquid Glass',
    description: 'Refined fluid glass with light refraction and caustics',
    category: 'depth-surface',
    tokens: {
      border: { width: '1px', color: 'rgba(255,255,255,0.3)' },
      shadow: {
        default: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
        hover: '0 12px 40px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.1)',
        refraction: '0 0 60px rgba(100,100,255,0.08)'
      },
      radius: { sm: '16px', md: '24px', lg: '32px', xl: '48px' },
      color: {
        bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        surface: 'rgba(255,255,255,0.15)',
        surfaceStrong: 'rgba(255,255,255,0.25)',
        border: 'rgba(255,255,255,0.3)',
        primary: '#FFFFFF',
        secondary: 'rgba(255,255,255,0.9)',
        accent: '#FFD700',
        ink: '#FFFFFF',
        muted: 'rgba(255,255,255,0.7)',
        focus: '#FFD700',
        error: '#FF6B6B',
        success: '#4ADE80',
        white: '#FFFFFF',
        caustic: 'rgba(255,255,255,0.1)'
      },
      font: {
        heading: '"Space Grotesk", "Inter", sans-serif',
        body: '"Inter", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '400ms', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
      blur: { default: '20px', strong: '40px', refraction: '60px' }
    },
    do: [
      'Use higher transparency (15-25%) than glassmorphism',
      'Add subtle caustic/refraction glow on interactive elements',
      'Stronger backdrop blur (20-40px)',
      'White/light content on dark gradient backgrounds',
      'Animate with spring physics for fluid feel'
    ],
    dont: [
      'Don\'t use on light backgrounds',
      'Don\'t use opaque surfaces',
      'Don\'t skip refraction glow on primary actions',
      'Don\'t use heavy borders'
    ],
    a11yNotes: [
      'Minimum 60% opaque overlay behind all text',
      'Solid fallback without backdrop-filter',
      'Focus ring: 3px solid gold with 3px offset',
      'Test thoroughly with reduced transparency'
    ]
  },

  'aurora': {
    name: 'Aurora / Gradient Mesh',
    description: 'Blurred multicolor gradients behind clean content',
    category: 'depth-surface',
    tokens: {
      border: { width: '1px', color: 'rgba(255,255,255,0.2)' },
      shadow: {
        default: '0 4px 24px rgba(0,0,0,0.1)',
        hover: '0 8px 32px rgba(0,0,0,0.15)',
        glow: '0 0 60px rgba(100,100,255,0.3)'
      },
      radius: { sm: '8px', md: '16px', lg: '24px', xl: '32px' },
      color: {
        bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        surface: 'rgba(255,255,255,0.1)',
        surfaceStrong: 'rgba(255,255,255,0.15)',
        border: 'rgba(255,255,255,0.2)',
        primary: '#FFFFFF',
        secondary: 'rgba(255,255,255,0.9)',
        accent: '#FFD700',
        ink: '#1A1A2E',
        muted: 'rgba(255,255,255,0.7)',
        focus: '#FFD700',
        error: '#FF6B6B',
        success: '#4ADE80',
        white: '#FFFFFF',
        mesh1: 'rgba(102, 126, 234, 0.4)',
        mesh2: 'rgba(118, 75, 162, 0.4)',
        mesh3: 'rgba(240, 147, 251, 0.4)'
      },
      font: {
        heading: '"Space Grotesk", "Inter", sans-serif',
        body: '"Inter", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      blur: { default: '30px', mesh: '80px' }
    },
    do: [
      'Use 3-5 color stops in mesh gradient',
      'Blur mesh heavily (60-100px) behind content',
      'Keep content surfaces semi-transparent',
      'White/light typography on dark mesh',
      'Subtle animation on mesh (slow drift)'
    ],
    dont: [
      'Don\'t use sharp/unblurred gradients',
      'Don\'t put dark text on light mesh areas',
      'Don\'t use too many colors (max 5)',
      'Don\'t animate mesh too fast'
    ],
    a11yNotes: [
      'Solid opaque background behind text (min 85% opacity)',
      'Focus ring visible on all mesh backgrounds',
      'Reduced motion: freeze mesh animation',
      'Test contrast at every viewport position'
    ]
  },

  'gradient-heavy': {
    name: 'Gradient-Heavy / Duotone',
    description: 'Bold gradients or two-color treatments throughout',
    category: 'depth-surface',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: {
        default: '0 4px 20px rgba(0,0,0,0.15)',
        hover: '0 8px 30px rgba(0,0,0,0.2)',
        glow: '0 0 40px rgba(255,100,100,0.4)'
      },
      radius: { sm: '8px', md: '16px', lg: '24px', xl: '32px' },
      color: {
        bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        surface: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
        primary: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
        secondary: 'linear-gradient(135deg, #6BCB77 0%, #43E97B 100%)',
        accent: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)',
        ink: '#FFFFFF',
        muted: 'rgba(255,255,255,0.8)',
        border: 'rgba(255,255,255,0.3)',
        focus: '#FFD700',
        error: '#FF6B6B',
        success: '#4ADE80',
        white: '#FFFFFF',
        duotone1: '#667eea',
        duotone2: '#764ba2'
      },
      font: {
        heading: '"Poppins", "Inter", sans-serif',
        body: '"Inter", sans-serif',
        mono: '"Fira Code", monospace',
        weight: { normal: 400, medium: 600, bold: 700 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    },
    do: [
      'Use gradients on backgrounds, buttons, text, borders',
      'Duotone: map two colors across light/dark values',
      'Keep gradient directions consistent (e.g., 135deg)',
      'High contrast text (white on dark gradients)',
      'Animate gradient positions for living feel'
    ],
    dont: [
      'Don\'t use more than 2-3 gradient palettes',
      'Don\'t put gradients on text smaller than 18px',
      'Don\'t use low-contrast gradient combinations',
      'Don\'t mix with flat design elements'
    ],
    a11yNotes: [
      'Text on gradients: test contrast at every point',
      'Solid fallback background for text blocks',
      'Focus ring: 3px solid contrasting color',
      'Duotone images: ensure recognizable without color'
    ]
  },

  // ===== BOLD AND RAW STYLES =====
  'brutalism': {
    name: 'Brutalism (Web Brutalism)',
    description: 'Stark, raw, default-looking, intentionally unpolished',
    category: 'bold-raw',
    tokens: {
      border: { width: '2px', color: '#000000' },
      shadow: { default: 'none', hover: 'none' },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#000000',
        secondary: '#0000FF',
        accent: '#FF0000',
        ink: '#000000',
        muted: '#666666',
        border: '#000000',
        focus: '#FF0000',
        error: '#FF0000',
        success: '#008000',
        white: '#FFFFFF',
        link: '#0000FF',
        linkVisited: '#800080'
      },
      font: {
        heading: 'system-ui, sans-serif',
        body: 'system-ui, sans-serif',
        mono: 'monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '0ms', easing: 'linear' }
    },
    do: [
      'Use system/default fonts only',
      'Raw HTML aesthetics — default link colors',
      'No rounded corners, no shadows',
      'Exposed structure and hierarchy',
      'Black text on white, blue links, purple visited',
      'Monospace for code/technical content'
    ],
    dont: [
      'No custom fonts',
      'No shadows, gradients, or animations',
      'No border radius',
      'No decorative elements',
      'No hover effects beyond underline'
    ],
    a11yNotes: [
      'High contrast by default',
      'Focus: browser default outline (don\'t remove)',
      'Semantic HTML is the design',
      'Keyboard navigation works natively'
    ]
  },

  'anti-design': {
    name: 'Anti-Design',
    description: 'Deliberately chaotic, rule-breaking, uncomfortable',
    category: 'bold-raw',
    tokens: {
      border: { width: '3px', color: '#FF0000' },
      shadow: { default: '8px 8px 0 #00FF00', hover: '12px 12px 0 #0000FF' },
      radius: { sm: '0px', md: '8px', lg: '0px', xl: '20px' },
      color: {
        bg: '#FFFF00',
        surface: '#FF00FF',
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#FF0000',
        ink: '#000000',
        muted: '#00FF00',
        border: '#FF0000',
        focus: '#0000FF',
        error: '#FF00FF',
        success: '#00FF00',
        white: '#FFFFFF',
        clashing1: '#FF00FF',
        clashing2: '#00FFFF',
        clashing3: '#FFFF00'
      },
      font: {
        heading: '"Comic Sans MS", "Chiller", cursive',
        body: '"Papyrus", "Jokerman", fantasy',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 900 }
      },
      motion: { duration: '100ms', easing: 'steps(2)' }
    },
    do: [
      'Clashing colors intentionally',
      'Mismatched fonts and sizes',
      'Overlapping elements, broken grids',
      'Aggressive animations',
      'Deliberate usability friction',
      'Anti-patterns as features'
    ],
    dont: [
      'Don\'t follow any convention',
      'Don\'t optimize for usability',
      'Don\'t use harmonious colors',
      'Don\'t align to grids'
    ],
    a11yNotes: [
      'INTENTIONALLY INACCESSIBLE — not for production',
      'If used: provide accessible alternative',
      'Focus indicators must still exist',
      'Motion must respect prefers-reduced-motion'
    ]
  },

  'maximalism': {
    name: 'Maximalism',
    description: 'Dense, layered, colorful, and busy — more is more',
    category: 'bold-raw',
    tokens: {
      border: { width: '2px', color: '#000000' },
      shadow: { default: '4px 4px 0 #FF00FF', hover: '6px 6px 0 #00FFFF' },
      radius: { sm: '4px', md: '8px', lg: '12px', xl: '0px' },
      color: {
        bg: '#FFF8E7',
        surface: '#FFFFFF',
        primary: '#FF006E',
        secondary: '#8338EC',
        accent: '#FFBE0B',
        ink: '#000000',
        muted: '#666666',
        border: '#000000',
        focus: '#3A86FF',
        error: '#FF0000',
        success: '#06D6A0',
        white: '#FFFFFF',
        pattern1: '#FB5607',
        pattern2: '#FF006E',
        pattern3: '#8338EC',
        pattern4: '#3A86FF',
        pattern5: '#06D6A0'
      },
      font: {
        heading: '"Anton", "Bebas Neue", sans-serif',
        body: '"Space Mono", monospace',
        mono: '"Space Mono", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '200ms', easing: 'ease-out' }
    },
    do: [
      'Layer patterns, textures, and colors',
      'Mix multiple fonts and weights',
      'Fill whitespace with decorative elements',
      'Bold, overlapping compositions',
      'Vibrant, saturated color palette'
    ],
    dont: [
      'Don\'t leave empty space',
      'Don\'t restrict color palette',
      'Don\'t use subtle hierarchy',
      'Don\'t follow minimalist rules'
    ],
    a11yNotes: [
      'Provide high-contrast mode alternative',
      'Focus ring: 4px solid with offset',
      'Ensure text readability over patterns',
      'Reduce motion drastically'
    ]
  },

  'memphis': {
    name: 'Memphis Design',
    description: '80s geometric shapes, squiggles, bright color clashes',
    category: 'bold-raw',
    tokens: {
      border: { width: '3px', color: '#000000' },
      shadow: { default: '6px 6px 0 #FF6B6B', hover: '8px 8px 0 #4ECDC4' },
      radius: { sm: '0px', md: '8px', lg: '16px', xl: '50% 50% 0 0', blob: '60% 40% 30% 70% / 60% 30% 70% 40%' },
      color: {
        bg: '#FFFFFF',
        surface: '#FFF5E6',
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        ink: '#2D2D2D',
        muted: '#95A5A6',
        border: '#000000',
        focus: '#FF6B6B',
        error: '#E74C3C',
        success: '#2ECC71',
        white: '#FFFFFF',
        shape1: '#FF6B6B',
        shape2: '#4ECDC4',
        shape3: '#FFE66D',
        shape4: '#95E1D3',
        shape5: '#F38BA8',
        shape6: '#A8E6CF'
      },
      font: {
        heading: '"Permanent Marker", "Fredoka One", cursive',
        body: '"Nunito", sans-serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
    },
    do: [
      'Use geometric shapes: circles, triangles, squiggles',
      'Bright pastel palette with black outlines',
      'Asymmetric, playful layouts',
      'Pattern backgrounds (dots, stripes, zigzags)',
      'Bouncy, springy animations'
    ],
    dont: [
      'Don\'t use muted or sophisticated colors',
      'Don\'t align to strict grids',
      'Don\'t use corporate/safe aesthetics',
      'Don\'t skip the black outlines'
    ],
    a11yNotes: [
      'Black outlines help contrast',
      'Focus ring: 3px solid black with offset',
      'Patterns can impair reading — solid text backgrounds',
      'Animations respect prefers-reduced-motion'
    ]
  },

  'pop-art': {
    name: 'Pop Art / Comic',
    description: 'Halftone dots, bold outlines, speech-bubble elements',
    category: 'bold-raw',
    tokens: {
      border: { width: '4px', color: '#000000' },
      shadow: { default: '6px 6px 0 #000000', hover: '8px 8px 0 #000000' },
      radius: { sm: '0px', md: '4px', lg: '8px', bubble: '20px 20px 20px 0' },
      color: {
        bg: '#FFFFFF',
        surface: '#FFFF00',
        primary: '#FF0000',
        secondary: '#0000FF',
        accent: '#FFFF00',
        ink: '#000000',
        muted: '#666666',
        border: '#000000',
        focus: '#FF0000',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        halftone: 'rgba(0,0,0,0.15)',
        bubble: '#FFFFFF',
        bubbleBorder: '#000000'
      },
      font: {
        heading: '"Bangers", "Anton", sans-serif',
        body: '"Comic Neue", cursive',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '150ms', easing: 'steps(3)' }
    },
    do: [
      'Thick black outlines on everything',
      'Halftone dot patterns for shading',
      'Speech bubbles for callouts',
      'Primary colors: red, blue, yellow',
      'Ben-Day dots texture',
      'Comic-style onomatopoeia'
    ],
    dont: [
      'Don\'t use thin lines',
      'Don\'t use gradients',
      'Don\'t use realistic proportions',
      'Don\'t skip the halftone texture'
    ],
    a11yNotes: [
      'High contrast black outlines help',
      'Focus ring: 4px solid black',
      'Halftone can cause visual distortion — solid alt',
      'Speech bubbles: ensure arrow points to trigger'
    ]
  },

  'grunge': {
    name: 'Grunge / Distressed',
    description: 'Torn textures, rough edges, gritty feel',
    category: 'bold-raw',
    tokens: {
      border: { width: '2px', color: '#3D2B1F' },
      shadow: { default: '4px 4px 8px rgba(0,0,0,0.4)', hover: '6px 6px 12px rgba(0,0,0,0.5)' },
      radius: { sm: '2px', md: '4px', lg: '8px', irregular: 'clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)' },
      color: {
        bg: '#1A1A1A',
        surface: '#2D2D2D',
        primary: '#E8D5B7',
        secondary: '#8B7355',
        accent: '#C0392B',
        ink: '#F5F0E8',
        muted: '#8B7355',
        border: '#3D2B1F',
        focus: '#F39C12',
        error: '#E74C3C',
        success: '#27AE60',
        white: '#F5F0E8',
        texture: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grunge\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'6\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23grunge)\' opacity=\'0.15\'/%3E%3C/svg%3E")'
      },
      font: {
        heading: '"Oswald", "Bebas Neue", sans-serif',
        body: '"Courier New", monospace',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '200ms', easing: 'ease-in' }
    },
    do: [
      'Distressed, worn textures',
      'Rough, torn edges',
      'Dark, moody color palette',
      'Grainy, noisy overlays',
      'Typewriter/monospace fonts',
      'Layered, overlapping elements'
    ],
    dont: [
      'Don\'t use clean, smooth surfaces',
      'Don\'t use bright, cheerful colors',
      'Don\'t use perfect alignment',
      'Don\'t skip the texture overlay'
    ],
    a11yNotes: [
      'Textures reduce contrast — solid text backgrounds required',
      'Focus ring: 3px solid gold with offset',
      'Dark mode default — ensure light text contrast',
      'Texture overlay: opacity max 15% behind text'
    ]
  },

  // ===== MINIMAL AND STRUCTURED STYLES =====
  'swiss': {
    name: 'Swiss / International Style',
    description: 'Strict grid, big type, limited palette, asymmetric layouts',
    category: 'minimal-structured',
    tokens: {
      border: { width: '1px', color: '#000000' },
      shadow: { default: 'none', hover: 'none' },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#000000',
        secondary: '#FF0000',
        accent: '#0000FF',
        ink: '#000000',
        muted: '#666666',
        border: '#000000',
        focus: '#FF0000',
        error: '#FF0000',
        success: '#008000',
        white: '#FFFFFF'
      },
      font: {
        heading: '"Helvetica Neue", "Univers", "Arial", sans-serif',
        body: '"Helvetica Neue", "Univers", "Arial", sans-serif',
        mono: '"Helvetica Neue", monospace',
        weight: { normal: 400, medium: 500, bold: 700, black: 900 }
      },
      motion: { duration: '0ms', easing: 'linear' },
      grid: { columns: 12, gutter: '24px', baseline: '8px' }
    },
    do: [
      'Strict modular grid (12 columns)',
      'Asymmetric layouts with strong visual hierarchy',
      'Large, bold typography as primary visual element',
      'Limited palette: black, white, one accent color',
      'Left-aligned, flush-left ragged-right text',
      'Generous whitespace as active design element'
    ],
    dont: [
      'Don\'t use centered layouts',
      'Don\'t use decorative elements',
      'Don\'t use more than 2 font weights',
      'Don\'t use rounded corners',
      'Don\'t use shadows or gradients'
    ],
    a11yNotes: [
      'Maximum contrast by design',
      'Focus: browser default or 2px solid red',
      'Grid structure aids navigation',
      'Large type aids readability'
    ]
  },

  'bento-grid': {
    name: 'Bento Grid',
    description: 'Modular rounded tiles of varied sizes in a structured grid',
    category: 'minimal-structured',
    tokens: {
      border: { width: '1px', color: 'rgba(0,0,0,0.08)' },
      shadow: { default: '0 2px 8px rgba(0,0,0,0.06)', hover: '0 8px 24px rgba(0,0,0,0.1)' },
      radius: { sm: '8px', md: '12px', lg: '16px', xl: '24px' },
      color: {
        bg: '#F8F9FA',
        surface: '#FFFFFF',
        primary: '#0066CC',
        secondary: '#6C757D',
        accent: '#FF6B35',
        ink: '#212529',
        muted: '#6C757D',
        border: 'rgba(0,0,0,0.08)',
        focus: '#0066CC',
        error: '#DC3545',
        success: '#28A745',
        white: '#FFFFFF',
        tile1: '#FFF8F0',
        tile2: '#F0F8FF',
        tile3: '#F5F5F5'
      },
      font: {
        heading: '"Inter", "SF Pro Display", sans-serif',
        body: '"Inter", "SF Pro Text", sans-serif',
        mono: '"SF Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '200ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      grid: { columns: 4, gap: '16px', tileRatio: '1:1' }
    },
    do: [
      'CSS Grid with varied tile spans',
      'Consistent border radius (12-16px)',
      'Subtle shadows for depth',
      'Tiles as content containers',
      'Mix tile sizes (1x1, 2x1, 1x2, 2x2)',
      'Consistent internal padding'
    ],
    dont: [
      'Don\'t use sharp corners',
      'Don\'t use heavy shadows',
      'Don\'t mix with non-grid layouts',
      'Don\'t use too many colors per tile'
    ],
    a11yNotes: [
      'Focus ring visible on tile boundaries',
      'Grid order = tab order',
      'Tiles: min 44px touch target',
      'Reduced motion: disable hover lift'
    ]
  },

  'monochrome': {
    name: 'Monochrome',
    description: 'A single hue in varying tones and tints',
    category: 'minimal-structured',
    tokens: {
      border: { width: '1px', color: 'var(--color-border)' },
      shadow: { default: '0 2px 8px rgba(0,0,0,0.08)', hover: '0 4px 16px rgba(0,0,0,0.12)' },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: '#F0F4F8',
        surface: '#FFFFFF',
        primary: '#1E3A5F',
        primaryLight: '#2C5282',
        primaryLighter: '#3182CE',
        primaryLightest: '#63B3ED',
        primaryDark: '#1A365D',
        primaryDarker: '#0F2A4A',
        accent: '#FFFFFF',
        ink: '#1E3A5F',
        muted: '#4A5568',
        border: '#CBD5E0',
        focus: '#3182CE',
        error: '#E53E3E',
        success: '#38A169',
        white: '#FFFFFF'
      },
      font: {
        heading: '"Inter", sans-serif',
        body: '"Inter", sans-serif',
        mono: '"Fira Code", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '200ms', easing: 'ease-out' }
    },
    do: [
      'Single hue with 5-7 tonal variations',
      'Use tints (lighter) and shades (darker) for hierarchy',
      'White/lightest tint for backgrounds',
      'Darkest shade for primary text',
      'Subtle shadows for depth',
      'Accent: white or complementary'
    ],
    dont: [
      'Don\'t introduce second hue',
      'Don\'t use high saturation variations',
      'Don\'t use gradients outside the hue',
      'Don\'t break the tonal scale'
    ],
    a11yNotes: [
      'Ensure 4.5:1 between adjacent tones',
      'Darkest on lightest = max contrast',
      'Focus ring: 3px solid primary with offset',
      'Test colorblind safety (blue base works well)'
    ]
  },

  'typographic': {
    name: 'Typographic Design',
    description: 'Type as the main visual element — expressive typography',
    category: 'minimal-structured',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: { default: 'none', hover: 'none' },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#000000',
        secondary: '#666666',
        accent: '#000000',
        ink: '#000000',
        muted: '#999999',
        border: '#E0E0E0',
        focus: '#000000',
        error: '#CC0000',
        success: '#008000',
        white: '#FFFFFF'
      },
      font: {
        heading: '"Playfair Display", "Georgia", serif',
        body: '"Source Serif Pro", "Georgia", serif',
        mono: '"JetBrains Mono", monospace',
        weight: { light: 300, normal: 400, medium: 500, bold: 700 },
        scale: { xs: '0.75rem', sm: '1rem', base: '1.25rem', lg: '2rem', xl: '3.5rem', xxl: '6rem', xxxl: '10rem' }
      },
      motion: { duration: '300ms', easing: 'ease-out' }
    },
    do: [
      'Type is the hero — large, expressive, dominant',
      'Mix serif and sans-serif intentionally',
      'Extreme scale contrast (10rem vs 1rem)',
      'Minimal color — black, white, gray',
      'Whitespace as composition tool',
      'Typographic hierarchy over visual hierarchy'
    ],
    dont: [
      'Don\'t use decorative graphics',
      'Don\'t use color for emphasis (use weight/scale)',
      'Don\'t use small type',
      'Don\'t crowd the composition'
    ],
    a11yNotes: [
      'Large type aids readability',
      'High contrast black on white',
      'Focus: 2px solid black',
      'Scale must be fluid (clamp) for zoom'
    ]
  },

  'editorial': {
    name: 'Editorial / Magazine',
    description: 'Serif headings, strong typographic hierarchy, wide margins',
    category: 'minimal-structured',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: { default: 'none', hover: 'none' },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        primary: '#1A1A1A',
        secondary: '#4A4A4A',
        accent: '#C41E3A',
        ink: '#1A1A1A',
        muted: '#666666',
        border: '#E0E0E0',
        focus: '#C41E3A',
        error: '#C41E3A',
        success: '#2D7D32',
        white: '#FFFFFF',
        pullQuote: '#C41E3A',
        caption: '#888888'
      },
      font: {
        heading: '"Didot", "Bodoni", "Playfair Display", serif',
        body: '"Garamond", "Georgia", serif',
        sans: '"Franklin Gothic", "Helvetica Neue", sans-serif',
        mono: '"Courier New", monospace',
        weight: { light: 300, normal: 400, medium: 500, bold: 700 }
      },
      motion: { duration: '0ms', easing: 'linear' },
      layout: { maxWidth: '720px', margin: 'auto', columnGap: '32px' }
    },
    do: [
      'High-contrast serif headings (Didot/Bodoni)',
      'Readable serif body text (Garamond)',
      'Wide margins, generous line height (1.7+)',
      'Pull quotes, drop caps, folio numbers',
      'Editorial grid with columns',
      'Red accent for key elements only'
    ],
    dont: [
      'Don\'t use sans-serif for long-form body',
      'Don\'t use tight line height',
      'Don\'t crowd margins',
      'Don\'t use too many font families'
    ],
    a11yNotes: [
      'Serif fonts readable at 18px+',
      'Line height 1.7 minimum',
      'Focus: 2px solid accent red',
      'High contrast throughout'
    ]
  },

  'corporate': {
    name: 'Corporate / Enterprise',
    description: 'Neutral, dense, table and form friendly, professional',
    category: 'minimal-structured',
    tokens: {
      border: { width: '1px', color: '#D0D5DD' },
      shadow: { default: '0 1px 3px rgba(0,0,0,0.08)', hover: '0 4px 12px rgba(0,0,0,0.1)' },
      radius: { sm: '4px', md: '6px', lg: '8px' },
      color: {
        bg: '#F9FAFB',
        surface: '#FFFFFF',
        primary: '#1570EF',
        primaryHover: '#1D65D8',
        secondary: '#6B7280',
        accent: '#00A3E0',
        ink: '#111827',
        muted: '#6B7280',
        border: '#D0D5DD',
        focus: '#1570EF',
        error: '#DC2626',
        success: '#059669',
        white: '#FFFFFF',
        tableHeader: '#F3F4F6',
        tableStripe: '#F9FAFB'
      },
      font: {
        heading: '"Inter", "System UI", sans-serif',
        body: '"Inter", "System UI", sans-serif',
        mono: '"JetBrains Mono", "Fira Code", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '150ms', easing: 'ease-out' },
      density: { compact: true, tablePadding: '8px 12px' }
    },
    do: [
      'High information density',
      'Compact tables and forms',
      'Neutral blue primary, gray secondary',
      'Clear visual hierarchy for data',
      'Consistent spacing scale (4px base)',
      'Accessible by default'
    ],
    dont: [
      'Don\'t use decorative elements',
      'Don\'t use bright/playful colors',
      'Don\'t waste whitespace',
      'Don\'t use large border radius'
    ],
    a11yNotes: [
      'WCAG AA baseline for all components',
      'Focus ring: 2px solid primary with 2px offset',
      'Table headers: scope=col, sortable',
      'Forms: labels, validation, error handling',
      'Dense doesn\'t mean inaccessible'
    ]
  },

  'scandinavian': {
    name: 'Scandinavian / Nordic',
    description: 'Calm, light, natural tones, functional minimalism',
    category: 'minimal-structured',
    tokens: {
      border: { width: '1px', color: '#E8E4DD' },
      shadow: { default: '0 2px 8px rgba(0,0,0,0.04)', hover: '0 4px 16px rgba(0,0,0,0.06)' },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: '#FDFBF7',
        surface: '#FFFFFF',
        primary: '#2D4A3E',
        secondary: '#8B9A8C',
        accent: '#D4A574',
        ink: '#1A1A1A',
        muted: '#8B9A8C',
        border: '#E8E4DD',
        focus: '#2D4A3E',
        error: '#C0392B',
        success: '#2D4A3E',
        white: '#FFFFFF',
        wood: '#C9B896',
        stone: '#A8A8A0',
        linen: '#F5F0E8'
      },
      font: {
        heading: '"IBM Plex Sans", "Inter", sans-serif',
        body: '"IBM Plex Sans", "Inter", sans-serif',
        mono: '"IBM Plex Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '250ms', easing: 'ease-out' }
    },
    do: [
      'Light, airy color palette (off-white, sage, warm gray)',
      'Natural material references (wood, stone, linen)',
      'Functional, unpretentious aesthetic',
      'Generous whitespace',
      'Subtle contrast, no harsh blacks',
      'Quality over quantity'
    ],
    dont: [
      'Don\'t use pure black (#000)',
      'Don\'t use saturated colors',
      'Don\'t use heavy shadows',
      'Don\'t use decorative flourishes'
    ],
    a11yNotes: [
      'Sage green primary: test contrast on off-white',
      'Focus: 3px solid sage with offset',
      'Light backgrounds need darker text',
      'Natural tones work well for colorblind'
    ]
  },

  // ===== RETRO AND NOSTALGIC STYLES =====
  'retro-vintage': {
    name: 'Retro / Vintage',
    description: 'Muted palettes, old-print feel, textured surfaces',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#8B7355' },
      shadow: { default: '3px 3px 0 #8B7355', hover: '5px 5px 0 #8B7355' },
      radius: { sm: '2px', md: '4px', lg: '8px' },
      color: {
        bg: '#F5F0E8',
        surface: '#FAF5ED',
        primary: '#8B4513',
        secondary: '#CD853F',
        accent: '#D2691E',
        ink: '#3D2B1F',
        muted: '#8B7355',
        border: '#8B7355',
        focus: '#CD853F',
        error: '#B22222',
        success: '#556B2F',
        white: '#FFF8F0',
        sepia: '#C9B896',
        paper: '#FDF8F0'
      },
      font: {
        heading: '"Playfair Display", "Georgia", serif',
        body: '"Cormorant Garamond", "Georgia", serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '300ms', easing: 'ease-in-out' },
      texture: { paper: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'paper\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.05\' numOctaves=\'3\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23paper)\' opacity=\'0.08\'/%3E%3C/svg%3E")' }
    },
    do: [
      'Muted, earthy color palette',
      'Sepia/parchment backgrounds',
      'Serif typefaces with character',
      'Subtle paper texture overlay',
      'Ornate borders and dividers',
      'Aged, weathered appearance'
    ],
    dont: [
      'Don\'t use bright, saturated colors',
      'Don\'t use pure white backgrounds',
      'Don\'t use modern geometric fonts',
      'Don\'t use clean, crisp edges'
    ],
    a11yNotes: [
      'Low contrast palette — test thoroughly',
      'Focus: 3px solid accent with offset',
      'Texture max 8% opacity behind text',
      'Increase font size for serif readability'
    ]
  },

  'y2k': {
    name: 'Y2K / Frutiger Aero',
    description: 'Glossy bubbles, chrome, aqua and glass, early 2000s optimism',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#00FFFF' },
      shadow: { default: '0 8px 24px rgba(0,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5)', hover: '0 12px 32px rgba(0,255,255,0.4)' },
      radius: { sm: '8px', md: '16px', lg: '24px', bubble: '50%' },
      color: {
        bg: 'linear-gradient(180deg, #00FFFF 0%, #0080FF 50%, #FF00FF 100%)',
        surface: 'rgba(255,255,255,0.3)',
        surfaceStrong: 'rgba(255,255,255,0.5)',
        primary: '#00FFFF',
        secondary: '#FF00FF',
        accent: '#FFFF00',
        ink: '#000080',
        muted: '#008080',
        border: '#00FFFF',
        focus: '#FF00FF',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        chrome: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 50%, #FFFFFF 100%)',
        bubble: 'rgba(255,255,255,0.4)',
        water: 'rgba(0,255,255,0.2)'
      },
      font: {
        heading: '"Orbitron", "Eurostile", sans-serif',
        body: '"Trebuchet MS", "Verdana", sans-serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '400ms', easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
    },
    do: [
      'Glossy, reflective surfaces',
      'Aqua/cyan/turquoise dominant palette',
      'Chrome/metallic gradients',
      'Bubble/orb shapes with highlights',
      'Water/glass transparency effects',
      'Optimistic, futuristic feel'
    ],
    dont: [
      'Don\'t use dark/muted colors',
      'Don\'t use matte surfaces',
      'Don\'t skip the glossy highlights',
      'Don\'t use sharp corners'
    ],
    a11yNotes: [
      'Very low contrast on glass surfaces',
      'Solid opaque fallback required',
      'Focus: 3px solid magenta with offset',
      'Animations respect reduced motion'
    ]
  },

  'frutiger-metro': {
    name: 'Frutiger Metro / Early Web 2.0',
    description: 'Glossy buttons, reflections, badges, rounded corners',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '1px', color: '#FFFFFF' },
      shadow: { default: '0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)', hover: '0 5px 12px rgba(0,0,0,0.4)' },
      radius: { sm: '6px', md: '10px', lg: '14px', pill: '9999px' },
      color: {
        bg: '#E8F4FD',
        surface: '#FFFFFF',
        primary: 'linear-gradient(180deg, #4A90E2 0%, #2E6FD6 100%)',
        secondary: 'linear-gradient(180deg, #7ED321 0%, #5DB81C 100%)',
        accent: 'linear-gradient(180deg, #F5A623 0%, #E8941A 100%)',
        ink: '#333333',
        muted: '#999999',
        border: '#CCCCCC',
        focus: '#4A90E2',
        error: '#D0021B',
        success: '#7ED321',
        white: '#FFFFFF',
        reflection: 'rgba(255,255,255,0.3)',
        badge: '#FF3B30'
      },
      font: {
        heading: '"Helvetica Neue", "Lucida Grande", sans-serif',
        body: '"Helvetica Neue", "Lucida Grande", sans-serif',
        mono: '"Monaco", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '250ms', easing: 'ease-out' }
    },
    do: [
      'Glossy buttons with white top highlight',
      'Subtle reflections on surfaces',
      'Bright, saturated primary colors',
      'Rounded corners everywhere (6-14px)',
      'Badges with red/orange accents',
      'Soft drop shadows with inner glow'
    ],
    dont: [
      'Don\'t use flat/matte buttons',
      'Don\'t use dark color schemes',
      'Don\'t skip the inner highlight',
      'Don\'t use sharp corners'
    ],
    a11yNotes: [
      'Gloss reduces contrast — test button text',
      'Focus: 3px solid blue with offset',
      'Reflections don\'t impair readability',
      'Badge color: ensure 4.5:1 on background'
    ]
  },

  'vaporwave': {
    name: 'Vaporwave',
    description: 'Pink and cyan gradients, 80s-90s aesthetics, statues and grids',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#FF00FF' },
      shadow: { default: '0 0 30px rgba(255,0,255,0.4)', hover: '0 0 40px rgba(0,255,255,0.5)' },
      radius: { sm: '4px', md: '8px', lg: '12px', grid: '0px' },
      color: {
        bg: 'linear-gradient(135deg, #1A0033 0%, #000033 50%, #001A33 100%)',
        surface: 'rgba(255,255,255,0.05)',
        primary: '#FF00FF',
        secondary: '#00FFFF',
        accent: '#FFFF00',
        ink: '#FFFFFF',
        muted: '#FF00FF',
        border: '#FF00FF',
        focus: '#00FFFF',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        grid: 'rgba(255,0,255,0.2)',
        statue: '#E0E0E0',
        sunset: 'linear-gradient(180deg, #FF00FF 0%, #FF6600 50%, #FFFF00 100%)'
      },
      font: {
        heading: '"Orbitron", "Rajdhani", sans-serif',
        body: '"Share Tech Mono", monospace',
        mono: '"Share Tech Mono", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '500ms', easing: 'linear' }
    },
    do: [
      'Pink/cyan/purple gradient palette',
      'Perspective grids on backgrounds',
      'Greek statue imagery',
      'Glitch text effects',
      'Japanese text as decoration',
      'Sunset gradients',
      'CRT scanline overlays'
    ],
    dont: [
      'Don\'t use light backgrounds',
      'Don\'t use natural colors',
      'Don\'t use readable UI patterns',
      'Don\'t skip the grid background'
    ],
    a11yNotes: [
      'Dark background — light text required',
      'Focus: 3px solid cyan with offset',
      'Glitch effects: respect reduced motion',
      'Grid lines: low opacity, don\'t impair text'
    ]
  },

  'synthwave': {
    name: 'Synthwave / Retrowave',
    description: 'Neon sunsets, grids, dark purple backgrounds',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#FF00FF' },
      shadow: { default: '0 0 20px rgba(255,0,255,0.5)', hover: '0 0 30px rgba(0,255,255,0.6)' },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: 'linear-gradient(180deg, #1A002E 0%, #16213E 50%, #0F3460 100%)',
        surface: 'rgba(255,255,255,0.03)',
        primary: '#FF00FF',
        secondary: '#00FFFF',
        accent: '#FFD700',
        ink: '#FFFFFF',
        muted: '#8A2BE2',
        border: '#FF00FF',
        focus: '#00FFFF',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        grid: 'rgba(255,0,255,0.15)',
        sun: '#FF6600',
        palm: '#0F3460'
      },
      font: {
        heading: '"Orbitron", "Rajdhani", sans-serif',
        body: '"Share Tech Mono", monospace',
        mono: '"Share Tech Mono", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '400ms', easing: 'ease-in-out' }
    },
    do: [
      'Dark purple/blue gradient backgrounds',
      'Neon pink/cyan glow effects',
      'Perspective grid floors',
      'Sunset gradients with orange/pink',
      'Palm tree silhouettes',
      'Scanline overlays',
      'Retro-futuristic typography'
    ],
    dont: [
      'Don\'t use light backgrounds',
      'Don\'t use pastel colors',
      'Don\'t skip the neon glow',
      'Don\'t use rounded UI elements'
    ],
    a11yNotes: [
      'Dark mode default — ensure light text contrast',
      'Focus: 3px solid cyan with offset',
      'Neon glow: respect reduced motion',
      'Grid: low opacity, behind content only'
    ]
  },

  'windows95': {
    name: 'Windows 95 / Retro OS',
    description: 'Beveled gray panels, classic desktop widgets, system fonts',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#FFFFFF' },
      shadow: {
        raised: '1px 1px 0 #FFFFFF, 2px 2px 0 #DFDFDF, -1px -1px 0 #808080, -2px -2px 0 #000000',
        sunken: '1px 1px 0 #000000, 2px 2px 0 #808080, -1px -1px 0 #DFDFDF, -2px -2px 0 #FFFFFF',
        default: 'none'
      },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#008080',
        surface: '#C0C0C0',
        windowBg: '#C0C0C0',
        titleBar: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
        titleBarInactive: '#808080',
        primary: '#000000',
        secondary: '#000080',
        accent: '#FF0000',
        ink: '#000000',
        muted: '#808080',
        border: '#FFFFFF',
        focus: '#000080',
        error: '#FF0000',
        success: '#008000',
        white: '#FFFFFF',
        highlight: '#000080',
        highlightText: '#FFFFFF',
        buttonFace: '#C0C0C0',
        buttonHighlight: '#FFFFFF',
        buttonShadow: '#808080',
        buttonDkShadow: '#000000'
      },
      font: {
        heading: '"MS Sans Serif", "Tahoma", sans-serif',
        body: '"MS Sans Serif", "Tahoma", sans-serif',
        mono: '"Fixedsys", "Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '0ms', easing: 'linear' }
    },
    do: [
      'Classic beveled borders (raised/sunken)',
      'Teal background (#008080)',
      'Gray window chrome (#C0C0C0)',
      'Blue title bar gradient',
      'MS Sans Serif / Tahoma fonts',
      'Pixel-perfect 1px lines',
      'No rounded corners',
      'Classic icon style'
    ],
    dont: [
      'Don\'t use modern fonts',
      'Don\'t use rounded corners',
      'Don\'t use gradients on buttons',
      'Don\'t use shadows beyond bevels',
      'Don\'t use colors beyond palette'
    ],
    a11yNotes: [
      'High contrast available (classic HC mode)',
      'Focus: dotted outline (classic Windows)',
      'System metrics respected',
      'Keyboard navigation native'
    ]
  },

  'pixel-art': {
    name: 'Pixel Art / 8-bit',
    description: 'Blocky pixel graphics, bitmap fonts, limited palette',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#000000' },
      shadow: { default: '4px 4px 0 #000000', hover: '6px 6px 0 #000000' },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#000000',
        surface: '#1A1A2E',
        primary: '#00FF00',
        secondary: '#FF00FF',
        accent: '#FFFF00',
        ink: '#FFFFFF',
        muted: '#888888',
        border: '#000000',
        focus: '#FFFF00',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        palette1: '#000000',
        palette2: '#1A1A2E',
        palette3: '#7F7F7F',
        palette4: '#FFFFFF',
        palette5: '#FF0000',
        palette6: '#00FF00',
        palette7: '#0000FF',
        palette8: '#FFFF00',
        palette9: '#FF00FF',
        palette10: '#00FFFF',
        palette11: '#FFA500',
        palette12: '#800080',
        palette13: '#008080',
        palette14: '#808080',
        palette15: '#C0C0C0',
        palette16: '#FFFFFF'
      },
      font: {
        heading: '"Press Start 2P", "VT323", monospace',
        body: '"VT323", "Press Start 2P", monospace',
        mono: '"VT323", monospace',
        weight: { normal: 400 }
      },
      motion: { duration: '100ms', easing: 'steps(4)' }
    },
    do: [
      'Bitmap/pixel fonts only',
      '16-color palette maximum',
      'No anti-aliasing',
      'Hard edges, no curves',
      'Pixel-perfect alignment',
      'CRT scanline effect optional'
    ],
    dont: [
      'Don\'t use smooth fonts',
      'Don\'t use gradients',
      'Don\'t use transparency',
      'Don\'t use border radius',
      'Don\'t use more than 16 colors'
    ],
    a11yNotes: [
      'High contrast by default',
      'Bitmap fonts: minimum 16px for readability',
      'Focus: 2px solid yellow',
      'Scaling: nearest-neighbor only'
    ]
  },

  'terminal': {
    name: 'Terminal / Hacker',
    description: 'Monospace text, green-on-black, command-line look',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '1px', color: '#00FF00' },
      shadow: { default: 'none', hover: '0 0 10px #00FF00' },
      radius: { sm: '0px', md: '0px', lg: '0px' },
      color: {
        bg: '#000000',
        surface: '#0D1117',
        primary: '#00FF00',
        secondary: '#00CC00',
        accent: '#FFFF00',
        ink: '#00FF00',
        muted: '#004400',
        border: '#003300',
        focus: '#FFFF00',
        error: '#FF0000',
        success: '#00FF00',
        white: '#00FF00',
        cursor: '#00FF00',
        selection: 'rgba(0,255,0,0.3)',
        prompt: '#00FF00',
        comment: '#008800',
        string: '#FFA500',
        keyword: '#00FFFF',
        function: '#FF00FF'
      },
      font: {
        heading: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
        body: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
        mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '0ms', easing: 'linear' }
    },
    do: [
      'Pure black background',
      'Green (#00FF00) or amber text',
      'Monospace font only',
      'Blinking cursor',
      'Command prompt style',
      'Syntax highlighting in terminal colors',
      'No mouse-only interactions'
    ],
    dont: [
      'Don\'t use colors beyond palette',
      'Don\'t use proportional fonts',
      'Don\'t use rounded corners',
      'Don\'t use shadows',
      'Don\'t use images/graphics'
    ],
    a11yNotes: [
      'Green on black: test contrast (may need brighter green)',
      'Focus: bright yellow outline',
      'Blinking cursor: respect reduced motion',
      'Screen reader: semantic structure critical'
    ]
  },

  'art-deco': {
    name: 'Art Deco',
    description: 'Gold accents, geometric symmetry, elegant lines',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '2px', color: '#D4AF37' },
      shadow: { default: '4px 4px 0 #1A1A2E', hover: '6px 6px 0 #D4AF37' },
      radius: { sm: '0px', md: '4px', lg: '8px', fan: '50% 50% 0 0' },
      color: {
        bg: '#1A1A2E',
        surface: '#16213E',
        primary: '#D4AF37',
        secondary: '#000000',
        accent: '#FFFFFF',
        ink: '#F5F0E8',
        muted: '#8B8B8B',
        border: '#D4AF37',
        focus: '#D4AF37',
        error: '#C0392B',
        success: '#27AE60',
        white: '#FFFFFF',
        gold: '#D4AF37',
        goldLight: '#F4E4A8',
        goldDark: '#B8962E',
        black: '#000000',
        navy: '#1A1A2E'
      },
      font: {
        heading: '"Cinzel", "Trajan Pro", serif',
        body: '"Montserrat", "Futura", sans-serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '400ms', easing: 'ease-in-out' }
    },
    do: [
      'Gold/metallic accents on dark backgrounds',
      'Geometric patterns (sunbursts, chevrons, zigzags)',
      'Symmetrical layouts',
      'Elegant serif headings (Cinzel/Trajan)',
      'High contrast: gold on navy/black',
      'Stepped/graduated forms'
    ],
    dont: [
      'Don\'t use bright primary colors',
      'Don\'t use asymmetry',
      'Don\'t use rounded/organic shapes',
      'Don\'t skip the gold accent'
    ],
    a11yNotes: [
      'Gold on navy: test contrast (may need lighter gold)',
      'Focus: 3px solid gold with offset',
      'Dark mode default — ensure light text',
      'Geometric patterns: low opacity behind text'
    ]
  },

  'art-nouveau': {
    name: 'Art Nouveau',
    description: 'Organic curves, floral ornament, flowing lines',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '1px', color: '#8B7355' },
      shadow: { default: '2px 2px 8px rgba(0,0,0,0.2)', hover: '4px 4px 16px rgba(0,0,0,0.3)' },
      radius: { sm: '8px', md: '16px', lg: '32px', organic: '60% 40% 30% 70% / 60% 30% 70% 40%' },
      color: {
        bg: '#FDF6E3',
        surface: '#FFF8F0',
        primary: '#8B7355',
        secondary: '#556B2F',
        accent: '#CD853F',
        ink: '#3D2B1F',
        muted: '#A09078',
        border: '#D4C4A8',
        focus: '#8B7355',
        error: '#B22222',
        success: '#556B2F',
        white: '#FFFFFF',
        floral: '#D4A574',
        vine: '#556B2F',
        cream: '#FDF6E3'
      },
      font: {
        heading: '"Trajan Pro", "Optima", serif',
        body: '"Palatino", "Georgia", serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 600 }
      },
      motion: { duration: '500ms', easing: 'ease-in-out' }
    },
    do: [
      'Flowing, organic curves (whiplash lines)',
      'Floral and vine motifs',
      'Asymmetric but balanced compositions',
      'Earthy, natural color palette',
      'Elegant serif typography',
      'Ornamental borders and frames'
    ],
    dont: [
      'Don\'t use geometric/sharp angles',
      'Don\'t use bright synthetic colors',
      'Don\'t use rigid grids',
      'Don\'t skip the organic ornamentation'
    ],
    a11yNotes: [
      'Earth tones: ensure 4.5:1 contrast',
      'Focus: 3px solid accent brown with offset',
      'Ornamental elements: decorative only (aria-hidden)',
      'Curved text paths: avoid for body text'
    ]
  },

  'bauhaus': {
    name: 'Bauhaus',
    description: 'Primary colors, geometric shapes, functional forms',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '3px', color: '#000000' },
      shadow: { default: 'none', hover: 'none' },
      radius: { sm: '0px', md: '0px', lg: '0px', circle: '50%' },
      color: {
        bg: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#FF0000',
        secondary: '#0000FF',
        accent: '#FFFF00',
        ink: '#000000',
        muted: '#808080',
        border: '#000000',
        focus: '#FF0000',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        red: '#FF0000',
        blue: '#0000FF',
        yellow: '#FFFF00',
        black: '#000000'
      },
      font: {
        heading: '"Futura", "Univers", "Helvetica", sans-serif',
        body: '"Futura", "Univers", "Helvetica", sans-serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '0ms', easing: 'linear' }
    },
    do: [
      'Primary colors only: red, blue, yellow, black, white',
      'Basic geometric shapes: circle, square, triangle',
      'Form follows function',
      'Sans-serif typography (Futura/Univers)',
      'Asymmetric balance',
      'Grid-based layouts'
    ],
    dont: [
      'Don\'t use secondary colors (orange, green, purple)',
      'Don\'t use gradients',
      'Don\'t use organic shapes',
      'Don\'t use decorative elements',
      'Don\'t use serif fonts'
    ],
    a11yNotes: [
      'Maximum contrast by design',
      'Focus: 3px solid black with offset',
      'Primary colors: test colorblind safety',
      'Simple shapes aid recognition'
    ]
  },

  'mid-century': {
    name: 'Mid-Century Modern',
    description: 'Warm earth tones, simple shapes, 50s-60s feel',
    category: 'retro-nostalgic',
    tokens: {
      border: { width: '1px', color: '#8B7355' },
      shadow: { default: '4px 4px 0 #8B7355', hover: '6px 6px 0 #8B7355' },
      radius: { sm: '4px', md: '8px', lg: '16px', organic: '30% 70% 70% 30% / 30% 30% 70% 70%' },
      color: {
        bg: '#F5F0E8',
        surface: '#FAF5ED',
        primary: '#C46210',
        secondary: '#8B7355',
        accent: '#2D5A27',
        ink: '#3D2B1F',
        muted: '#A09078',
        border: '#D4C4A8',
        focus: '#C46210',
        error: '#B22222',
        success: '#2D5A27',
        white: '#FFF8F0',
        teak: '#8B7355',
        mustard: '#D4A574',
        olive: '#556B2F',
        burntOrange: '#C46210',
        cream: '#F5F0E8'
      },
      font: {
        heading: '"Futura", "Century Gothic", sans-serif',
        body: '"Palatino", "Georgia", serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 600 }
      },
      motion: { duration: '300ms', easing: 'ease-out' }
    },
    do: [
      'Warm earth tones: teak, mustard, olive, burnt orange',
      'Simple, organic shapes with tapered legs',
      'Clean lines, minimal ornamentation',
      'Mix of wood tones and colored surfaces',
      'Geometric but warm patterns',
      'Functional beauty'
    ],
    dont: [
      'Don\'t use cool/neon colors',
      'Don\'t use heavy ornamentation',
      'Don\'t use sharp industrial look',
      'Don\'t use pure black/white'
    ],
    a11yNotes: [
      'Earth tones: test contrast on cream backgrounds',
      'Focus: 3px solid burnt orange with offset',
      'Warm palette: generally colorblind safe',
      'Organic shapes: ensure touch targets'
    ]
  },

  // ===== DARK AND FUTURISTIC STYLES =====
  'dark-oled': {
    name: 'Dark Mode / OLED',
    description: 'True-black surfaces, desaturated accents, pure blacks',
    category: 'dark-futuristic',
    tokens: {
      border: { width: '1px', color: '#27272A' },
      shadow: { default: '0 4px 16px rgba(0,0,0,0.5)', hover: '0 8px 24px rgba(0,0,0,0.6)' },
      radius: { sm: '6px', md: '10px', lg: '14px' },
      color: {
        bg: '#000000',
        surface: '#09090B',
        surfaceHover: '#18181B',
        primary: '#A5F3FC',
        secondary: '#E9D5FF',
        accent: '#FDE68A',
        ink: '#FAFAFA',
        muted: '#71717A',
        border: '#27272A',
        focus: '#A5F3FC',
        error: '#FCA5A5',
        success: '#86EFAC',
        white: '#FFFFFF',
        elevated: '#18181B'
      },
      font: {
        heading: '"Inter", "SF Pro Display", sans-serif',
        body: '"Inter", "SF Pro Text", sans-serif',
        mono: '"SF Mono", "JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '200ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    },
    do: [
      'True black (#000000) for OLED power saving',
      'Desaturated, pastel accents',
      'Subtle elevation with grayscale surfaces',
      'Minimal colored UI — color only for meaning',
      'High contrast text (near-white on black)',
      'No pure white backgrounds'
    ],
    dont: [
      'Don\'t use gray backgrounds (not true black)',
      'Don\'t use saturated colors',
      'Don\'t use heavy shadows',
      'Don\'t use colored surfaces'
    ],
    a11yNotes: [
      'True black + near-white = max contrast',
      'Focus: 3px solid cyan with 3px offset',
      'Desaturated accents: test 4.5:1',
      'Pure black helps photophobia'
    ]
  },

  'cyberpunk': {
    name: 'Cyberpunk / Neon',
    description: 'Dark base, glowing accents, glitch details, high tech low life',
    category: 'dark-futuristic',
    tokens: {
      border: { width: '1px', color: '#FF00FF' },
      shadow: {
        default: '0 0 20px rgba(255,0,255,0.3)',
        hover: '0 0 30px rgba(0,255,255,0.4)',
        glitch: '2px 0 0 #00FFFF, -2px 0 0 #FF00FF'
      },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: '#0A0A0F',
        surface: '#12121A',
        primary: '#FF00FF',
        secondary: '#00FFFF',
        accent: '#FFFF00',
        ink: '#FFFFFF',
        muted: '#6B4E8C',
        border: '#FF00FF',
        focus: '#00FFFF',
        error: '#FF0044',
        success: '#00FF88',
        white: '#FFFFFF',
        glitch1: '#FF00FF',
        glitch2: '#00FFFF',
        grid: 'rgba(255,0,255,0.1)',
        scanline: 'rgba(0,0,0,0.1)'
      },
      font: {
        heading: '"Orbitron", "Rajdhani", sans-serif',
        body: '"JetBrains Mono", "Share Tech Mono", monospace',
        mono: '"JetBrains Mono", "Share Tech Mono", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '150ms', easing: 'ease-out' }
    },
    do: [
      'Dark near-black backgrounds',
      'Neon pink/cyan/yellow glow effects',
      'Glitch text animations',
      'Grid backgrounds with scanlines',
      'High contrast: bright on dark',
      'Monospace fonts for data',
      'Glitch: respect reduced motion'
    ],
    dont: [
      'Don\'t use light backgrounds',
      'Don\'t use pastel colors',
      'Don\'t skip the glow effects',
      'Don\'t use serif fonts'
    ],
    a11yNotes: [
      'Glow on accents only — body text high contrast',
      'Focus: 3px solid cyan with offset',
      'Glitch/animations: respect reduced motion',
      'Scanlines: low opacity, behind content only'
    ]
  },

  'futuristic-hud': {
    name: 'Futuristic / Sci-Fi HUD',
    description: 'Thin lines, data overlays, holographic look',
    category: 'dark-futuristic',
    tokens: {
      border: { width: '1px', color: 'rgba(0,255,255,0.5)' },
      shadow: {
        default: '0 0 10px rgba(0,255,255,0.2)',
        hover: '0 0 20px rgba(0,255,255,0.4)',
        hologram: '0 0 30px rgba(0,255,255,0.3)'
      },
      radius: { sm: '2px', md: '4px', lg: '8px', sharp: '0px' },
      color: {
        bg: '#000000',
        surface: 'rgba(0,20,30,0.8)',
        primary: '#00FFFF',
        secondary: '#FF00FF',
        accent: '#FFFF00',
        ink: '#E0FFFF',
        muted: '#008080',
        border: 'rgba(0,255,255,0.3)',
        focus: '#FFFF00',
        error: '#FF0044',
        success: '#00FF88',
        white: '#FFFFFF',
        hologram: 'rgba(0,255,255,0.15)',
        scanline: 'rgba(0,0,0,0.05)',
        warning: '#FFAA00'
      },
      font: {
        heading: '"Orbitron", "Rajdhani", sans-serif',
        body: '"JetBrains Mono", "Share Tech Mono", monospace',
        mono: '"JetBrains Mono", "Share Tech Mono", monospace',
        weight: { light: 300, normal: 400, bold: 700 }
      },
      motion: { duration: '100ms', easing: 'linear' }
    },
    do: [
      'Thin lines (1px) for all borders',
      'Cyan/magenta holographic palette',
      'Transparent panels with grid lines',
      'Data-dense layouts',
      'Monospace for all text',
      'Scanline overlay',
      'Corner brackets instead of radius'
    ],
    dont: [
      'Don\'t use thick borders',
      'Don\'t use filled buttons',
      'Don\'t use rounded corners',
      'Don\'t use warm colors'
    ],
    a11yNotes: [
      'Thin lines: ensure 3:1 contrast',
      'Focus: 2px solid yellow with offset',
      'Transparency: solid fallback for text',
      'Scanlines: respect reduced motion'
    ]
  },

  'techno-glitch': {
    name: 'Techno / Glitch',
    description: 'Distorted, scanline, digital-artifact effects',
    category: 'dark-futuristic',
    tokens: {
      border: { width: '2px', color: '#FF00FF' },
      shadow: {
        default: '0 0 10px rgba(255,0,255,0.3)',
        hover: '0 0 20px rgba(0,255,255,0.4)',
        glitch: '3px 0 0 #00FFFF, -3px 0 0 #FF00FF'
      },
      radius: { sm: '0px', md: '4px', lg: '8px' },
      color: {
        bg: '#000000',
        surface: '#0A0A0A',
        primary: '#FF00FF',
        secondary: '#00FFFF',
        accent: '#FFFF00',
        ink: '#FFFFFF',
        muted: '#444444',
        border: '#FF00FF',
        focus: '#00FFFF',
        error: '#FF0000',
        success: '#00FF00',
        white: '#FFFFFF',
        noise: 'rgba(255,255,255,0.02)',
        scanline: 'rgba(0,0,0,0.1)',
        rgbShift: 'rgba(255,0,255,0.5)'
      },
      font: {
        heading: '"JetBrains Mono", "Share Tech Mono", monospace',
        body: '"JetBrains Mono", "Share Tech Mono", monospace',
        mono: '"JetBrains Mono", "Share Tech Mono", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '50ms', easing: 'steps(2)' }
    },
    do: [
      'RGB channel shift on hover',
      'Scanline overlays',
      'Digital noise texture',
      'Glitch text animations',
      'Corrupted data aesthetic',
      'Fast, jittery animations',
      'Monospace everywhere'
    ],
    dont: [
      'Don\'t use smooth animations',
      'Don\'t use organic shapes',
      'Don\'t use warm colors',
      'Don\'t skip the glitch effects'
    ],
    a11yNotes: [
      'CRITICAL: Animations must respect prefers-reduced-motion',
      'Provide non-glitch alternative',
      'Focus: 3px solid cyan with offset',
      'High contrast text required',
      'Noise: low opacity only'
    ]
  },

  'space-cosmic': {
    name: 'Space / Cosmic',
    description: 'Deep gradients, stars, glowing elements, vastness',
    category: 'dark-futuristic',
    tokens: {
      border: { width: '1px', color: 'rgba(255,255,255,0.1)' },
      shadow: {
        default: '0 0 40px rgba(100,100,255,0.2)',
        hover: '0 0 60px rgba(255,100,255,0.3)',
        glow: '0 0 80px rgba(100,100,255,0.4)'
      },
      radius: { sm: '8px', md: '16px', lg: '24px', xl: '48px' },
      color: {
        bg: 'linear-gradient(180deg, #050510 0%, #100520 50%, #051020 100%)',
        surface: 'rgba(20,20,40,0.6)',
        primary: '#6688FF',
        secondary: '#FF66AA',
        accent: '#FFAA00',
        ink: '#FFFFFF',
        muted: '#666688',
        border: 'rgba(255,255,255,0.1)',
        focus: '#FF66AA',
        error: '#FF4466',
        success: '#44FF88',
        white: '#FFFFFF',
        star: '#FFFFFF',
        nebula1: 'rgba(102,136,255,0.3)',
        nebula2: 'rgba(255,102,170,0.3)',
        nebula3: 'rgba(255,170,0,0.3)'
      },
      font: {
        heading: '"Orbitron", "Exo 2", sans-serif',
        body: '"Inter", "Exo 2", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { light: 300, normal: 400, bold: 600 }
      },
      motion: { duration: '600ms', easing: 'ease-in-out' }
    },
    do: [
      'Deep space gradients (dark blue/purple/black)',
      'Star field backgrounds',
      'Nebula glow effects',
      'Slow, majestic animations',
      'Glowing accent elements',
      'Vast whitespace'
    ],
    dont: [
      'Don\'t use bright/light backgrounds',
      'Don\'t use saturated primary colors',
      'Don\'t use fast animations',
      'Don\'t clutter the void'
    ],
    a11yNotes: [
      'Dark background — light text required',
      'Focus: 3px solid accent gold with offset',
      'Slow animations: respect reduced motion',
      'Star fields: low opacity, behind content'
    ]
  },

  // ===== ORGANIC AND PLAYFUL STYLES =====
  'organic-blob': {
    name: 'Organic / Blob Shapes',
    description: 'Fluid, asymmetric curves, morphing shapes',
    category: 'organic-playful',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: { default: '0 8px 32px rgba(0,0,0,0.1)', hover: '0 12px 40px rgba(0,0,0,0.15)' },
      radius: {
        sm: '24px 20px 28px 22px / 20px 24px 22px 28px',
        md: '32px 28px 36px 30px / 28px 32px 30px 36px',
        lg: '48px 40px 52px 44px / 40px 48px 44px 52px',
        blob: '60% 40% 30% 70% / 60% 30% 70% 40%',
        morph1: '55% 45% 35% 65% / 55% 35% 65% 45%',
        morph2: '65% 35% 25% 75% / 65% 25% 75% 35%'
      },
      color: {
        bg: '#FEF7F0',
        surface: '#FFFFFF',
        primary: '#FF8C42',
        secondary: '#6BCB77',
        accent: '#4ECDC4',
        ink: '#2D2D2D',
        muted: '#95A5A6',
        border: 'transparent',
        focus: '#FF8C42',
        error: '#E74C3C',
        success: '#2ECC71',
        white: '#FFFFFF',
        blob1: '#FFE66D',
        blob2: '#95E1D3',
        blob3: '#F38BA8',
        blob4: '#A8E6CF'
      },
      font: {
        heading: '"Nunito", "Quicksand", sans-serif',
        body: '"Nunito", "Quicksand", sans-serif',
        mono: '"Fira Code", monospace',
        weight: { normal: 500, medium: 600, bold: 800 }
      },
      motion: { duration: '500ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    },
    do: [
      'Asymmetric, organic border-radius values',
      'Morphing/animated blob shapes',
      'Warm, friendly color palette',
      'Soft shadows for depth',
      'Generous, rounded everything',
      'Fluid, springy animations'
    ],
    dont: [
      'Don\'t use symmetric radius',
      'Don\'t use sharp corners',
      'Don\'t use cold colors',
      'Don\'t use stiff animations'
    ],
    a11yNotes: [
      'Irregular shapes: ensure 44px touch targets',
      'Focus: 3px solid with offset',
      'Morphing animations: respect reduced motion',
      'Blob shapes don\'t clip content'
    ]
  },

  'hand-drawn': {
    name: 'Hand-Drawn / Sketch',
    description: 'Doodles, rough lines, paper textures, imperfect',
    category: 'organic-playful',
    tokens: {
      border: { width: '2px', color: '#2D2D2D' },
      shadow: { default: '2px 2px 0 #95A5A6', hover: '3px 3px 0 #7F8C8D' },
      radius: { sm: '4px 8px 4px 8px', md: '8px 16px 8px 16px', lg: '12px 24px 12px 24px', sketch: '10% 90% 90% 10% / 10% 10% 90% 90%' },
      color: {
        bg: '#FDFBF7',
        surface: '#FEFEFE',
        primary: '#2D2D2D',
        secondary: '#8B4513',
        accent: '#E74C3C',
        ink: '#2D2D2D',
        muted: '#95A5A6',
        border: '#2D2D2D',
        focus: '#E74C3C',
        error: '#E74C3C',
        success: '#2ECC71',
        white: '#FFFFFF',
        paper: '#FDFBF7',
        pencil: '#4A4A4A',
        highlighter: '#FFFF00'
      },
      font: {
        heading: '"Caveat", "Patrick Hand", cursive',
        body: '"Architects Daughter", "Indie Flower", cursive',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '200ms', easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
      texture: { paper: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'paper\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.05\' numOctaves=\'3\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23paper)\' opacity=\'0.1\'/%3E%3C/svg%3E")' }
    },
    do: [
      'Hand-drawn fonts (cursive/sketch)',
      'Imperfect, wobbly lines',
      'Paper texture background',
      'Doodle icons and illustrations',
      'Pencil/pen color palette',
      'Asymmetric, organic layout'
    ],
    dont: [
      'Don\'t use perfect geometric shapes',
      'Don\'t use clean digital fonts',
      'Don\'t use pure white backgrounds',
      'Don\'t use precise alignment'
    ],
    a11yNotes: [
      'Handwritten fonts: minimum 18px for readability',
      'Focus: 3px solid accent with offset',
      'Paper texture: max 10% opacity behind text',
      'Sketch fonts: provide sans-serif fallback'
    ]
  },

  'illustrated': {
    name: 'Illustrated / Storybook',
    description: 'Custom illustrations as the main visual identity',
    category: 'organic-playful',
    tokens: {
      border: { width: '2px', color: '#E8D5B7' },
      shadow: { default: '0 4px 16px rgba(0,0,0,0.08)', hover: '0 8px 24px rgba(0,0,0,0.12)' },
      radius: { sm: '8px', md: '16px', lg: '24px', xl: '32px' },
      color: {
        bg: '#FDFBF7',
        surface: '#FFFFFF',
        primary: '#8B4513',
        secondary: '#556B2F',
        accent: '#CD853F',
        ink: '#3D2B1F',
        muted: '#A09078',
        border: '#E8D5B7',
        focus: '#8B4513',
        error: '#B22222',
        success: '#556B2F',
        white: '#FFFFFF',
        illustration: '#F5E6D3',
        character: '#D4A574',
        nature: '#556B2F'
      },
      font: {
        heading: '"Merriweather", "Georgia", serif',
        body: '"Nunito", "Quicksand", sans-serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, medium: 500, bold: 700 }
      },
      motion: { duration: '400ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    },
    do: [
      'Custom illustrations as hero elements',
      'Warm, storybook color palette',
      'Characters and scenes integrated',
      'Generous whitespace for illustrations',
      'Hand-crafted feel',
      'Narrative visual hierarchy'
    ],
    dont: [
      'Don\'t use stock photos',
      'Don\'t use generic icons',
      'Don\'t crowd illustrations',
      'Don\'t use cold corporate colors'
    ],
    a11yNotes: [
      'Illustrations: alt text describing content',
      'Focus: 3px solid with offset',
      'Text on illustrated backgrounds: solid overlay',
      'Decorative illustrations: aria-hidden'
    ]
  },

  'paper-cutout': {
    name: 'Paper / Cutout (Paper Craft)',
    description: 'Layered paper shadows and textures, physical depth',
    category: 'organic-playful',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: {
        default: '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06)',
        hover: '0 4px 8px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.08)',
        layer1: '0 2px 4px rgba(0,0,0,0.1)',
        layer2: '0 4px 8px rgba(0,0,0,0.08)',
        layer3: '0 8px 16px rgba(0,0,0,0.06)',
        layer4: '0 16px 24px rgba(0,0,0,0.05)'
      },
      radius: { sm: '4px', md: '8px', lg: '12px', xl: '16px' },
      color: {
        bg: '#F0EDE5',
        surface: '#FFFFFF',
        layer1: '#F5F0E8',
        layer2: '#E8E0D0',
        layer3: '#D4C8B0',
        layer4: '#C0B098',
        primary: '#8B4513',
        secondary: '#556B2F',
        accent: '#CD853F',
        ink: '#3D2B1F',
        muted: '#A09078',
        border: 'transparent',
        focus: '#8B4513',
        error: '#B22222',
        success: '#556B2F',
        white: '#FFFFFF',
        shadow: 'rgba(0,0,0,0.15)',
        paperEdge: '#D4C8B0'
      },
      font: {
        heading: '"Nunito", "Quicksand", sans-serif',
        body: '"Nunito", "Quicksand", sans-serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 700 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    },
    do: [
      'Multiple layered paper shadows',
      'Subtle color shifts per layer',
      'Paper texture on surfaces',
      'Cut-out edges with slight shadows',
      'Warm, natural paper tones',
      'Physical depth through layers'
    ],
    dont: [
      'Don\'t use flat shadows',
      'Don\'t use pure white layers',
      'Don\'t use digital/perfect edges',
      'Don\'t skip layer shadows'
    ],
    a11yNotes: [
      'Layered shadows: test contrast on each layer',
      'Focus: 3px solid with offset',
      'Paper texture: max 8% opacity behind text',
      'Layer depth: ensure touch targets not obscured'
    ]
  },

  'kawaii': {
    name: 'Playful / Kawaii',
    description: 'Cute characters, pastel colors, rounded shapes',
    category: 'organic-playful',
    tokens: {
      border: { width: '2px', color: '#FFB3D9' },
      shadow: { default: '0 4px 12px rgba(255,179,217,0.3)', hover: '0 6px 16px rgba(255,179,217,0.4)' },
      radius: { sm: '16px', md: '24px', lg: '32px', xl: '48px', pill: '9999px' },
      color: {
        bg: '#FFF0F5',
        surface: '#FFFFFF',
        primary: '#FF69B4',
        secondary: '#87CEEB',
        accent: '#FFD700',
        ink: '#4A4A4A',
        muted: '#FFB3D9',
        border: '#FFB3D9',
        focus: '#FF69B4',
        error: '#FF4466',
        success: '#88DD88',
        white: '#FFFFFF',
        pastel1: '#FFB3D9',
        pastel2: '#B3D9FF',
        pastel3: '#D9FFB3',
        pastel4: '#FFF3B3',
        pastel5: '#E6B3FF',
        pastel6: '#FFD9B3',
        character: '#FF69B4'
      },
      font: {
        heading: '"Nunito", "Quicksand", "Fredoka One", sans-serif',
        body: '"Nunito", "Quicksand", sans-serif',
        mono: '"Fira Code", monospace',
        weight: { normal: 500, medium: 600, bold: 800 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    },
    do: [
      'Pastel color palette',
      'Very round shapes (pill buttons, round cards)',
      'Cute character illustrations',
      'Bouncy, springy animations',
      'Heart/star/sparkle decorations',
      'High saturation but light values'
    ],
    dont: [
      'Don\'t use dark/muted colors',
      'Don\'t use sharp corners',
      'Don\'t use serious/formal tone',
      'Don\'t skip the bounce animation'
    ],
    a11yNotes: [
      'Pastels on white: test contrast (may need darker pastels)',
      'Focus: 3px solid pink with offset',
      'Animations: respect reduced motion',
      'Cute ≠ inaccessible'
    ]
  },

  'isometric': {
    name: '3D / Isometric',
    description: 'Isometric illustrations and 3D objects, dimensional depth',
    category: 'organic-playful',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: {
        default: '4px 4px 8px rgba(0,0,0,0.15), 8px 8px 16px rgba(0,0,0,0.1), 12px 12px 24px rgba(0,0,0,0.05)',
        hover: '6px 6px 12px rgba(0,0,0,0.2), 12px 12px 24px rgba(0,0,0,0.15), 18px 18px 36px rgba(0,0,0,0.1)',
        iso: '10px 10px 20px rgba(0,0,0,0.2), 20px 20px 40px rgba(0,0,0,0.15)'
      },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: '#F0F4F8',
        surface: '#FFFFFF',
        top: '#FFFFFF',
        side: '#E0E8F0',
        darkSide: '#C0D0E0',
        primary: '#4A90E2',
        secondary: '#7ED321',
        accent: '#F5A623',
        ink: '#2D3E50',
        muted: '#8A9BA8',
        border: '#D0D8E0',
        focus: '#4A90E2',
        error: '#D0021B',
        success: '#7ED321',
        white: '#FFFFFF',
        ground: '#E0E8F0',
        grid: 'rgba(74,144,226,0.1)'
      },
      font: {
        heading: '"Inter", "SF Pro Display", sans-serif',
        body: '"Inter", "SF Pro Text", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '300ms', easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
    },
    do: [
      'Three-tone shading (top, side, dark side)',
      'Isometric grid (30° angles)',
      '3D objects with consistent lighting',
      'Layered depth with shadows',
      'Technical/clean aesthetic',
      'Perspective-free projection'
    ],
    dont: [
      'Don\'t use perspective (vanishing points)',
      'Don\'t use single-tone shading',
      'Don\'t use inconsistent light angles',
      'Don\'t mix 2D and 3D elements'
    ],
    a11yNotes: [
      '3D shading: ensure text contrast on all faces',
      'Focus: 3px solid with offset',
      'Isometric grids: decorative only',
      'Depth perception: not required for function'
    ]
  },

  'biophilic': {
    name: 'Nature / Biophilic',
    description: 'Earthy palettes, leaf and wood textures, organic forms',
    category: 'organic-playful',
    tokens: {
      border: { width: '1px', color: '#8F9B7A' },
      shadow: { default: '0 4px 16px rgba(0,0,0,0.08)', hover: '0 8px 24px rgba(0,0,0,0.12)' },
      radius: { sm: '8px', md: '16px', lg: '24px', organic: '30% 70% 70% 30% / 30% 30% 70% 70%' },
      color: {
        bg: '#F1F4ED',
        surface: '#FAFCF8',
        primary: '#4A6B3A',
        secondary: '#8F9B7A',
        accent: '#C9A84C',
        ink: '#2D3A1A',
        muted: '#6B7A5A',
        border: '#C4D0B0',
        focus: '#4A6B3A',
        error: '#B22222',
        success: '#4A6B3A',
        white: '#FFFFFF',
        leaf: '#6B8E5A',
        wood: '#8B7355',
        bark: '#5D4E37',
        moss: '#8F9B7A',
        soil: '#4A3A2A',
        sky: '#A8C8E8'
      },
      font: {
        heading: '"IBM Plex Sans", "Inter", sans-serif',
        body: '"IBM Plex Sans", "Inter", sans-serif',
        mono: '"IBM Plex Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '400ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
    },
    do: [
      'Earthy green/brown color palette',
      'Leaf, wood, stone textures',
      'Organic, flowing shapes',
      'Natural light patterns',
      'Living system metaphors',
      'Calm, restorative aesthetic'
    ],
    dont: [
      'Don\'t use synthetic/neon colors',
      'Don\'t use geometric rigidity',
      'Don\'t use harsh contrasts',
      'Don\'t skip natural textures'
    ],
    a11yNotes: [
      'Earth tones: generally colorblind safe',
      'Focus: 3px solid forest green with offset',
      'Textures: max 10% opacity behind text',
      'Green palette: test deuteranopia safety'
    ]
  },

  'pastel-soft': {
    name: 'Pastel / Soft',
    description: 'Gentle, low-saturation colors, calm and approachable',
    category: 'organic-playful',
    tokens: {
      border: { width: '1px', color: '#E8E8F0' },
      shadow: { default: '0 2px 8px rgba(0,0,0,0.04)', hover: '0 4px 16px rgba(0,0,0,0.06)' },
      radius: { sm: '8px', md: '16px', lg: '24px', xl: '32px', pill: '9999px' },
      color: {
        bg: '#FAFAFC',
        surface: '#FFFFFF',
        primary: '#A8C0E8',
        secondary: '#E8C0A8',
        accent: '#C0E8A8',
        ink: '#4A4A5A',
        muted: '#A8A8B8',
        border: '#E8E8F0',
        focus: '#A8C0E8',
        error: '#E8A8A8',
        success: '#A8E8A8',
        white: '#FFFFFF',
        pastel1: '#E8D0E8',
        pastel2: '#D0E8E8',
        pastel3: '#E8E8D0',
        pastel4: '#F0E0D0',
        pastel5: '#E0F0D0',
        pastel6: '#E8D0F0'
      },
      font: {
        heading: '"Nunito", "Quicksand", sans-serif',
        body: '"Nunito", "Quicksand", sans-serif',
        mono: '"Fira Code", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '300ms', easing: 'ease-out' }
    },
    do: [
      'Low saturation, high lightness colors',
      'Very round, soft shapes',
      'Gentle, calm aesthetic',
      'Minimal contrast between elements',
      'Approachable, non-threatening',
      'Breathing room everywhere'
    ],
    dont: [
      'Don\'t use saturated colors',
      'Don\'t use sharp corners',
      'Don\'t use heavy shadows',
      'Don\'t use high contrast'
    ],
    a11yNotes: [
      'CRITICAL: Pastels often fail 4.5:1 on white',
      'Use darker pastels or colored backgrounds',
      'Focus: 3px solid with offset',
      'Test every color combination'
    ]
  },

  // ===== CULTURAL AND THEMATIC STYLES =====
  'wabi-sabi': {
    name: 'Japanese Minimal / Wabi-Sabi',
    description: 'Imperfection, calm, natural materials, asymmetry',
    category: 'cultural-thematic',
    tokens: {
      border: { width: '1px', color: '#C8B8A8' },
      shadow: { default: '0 2px 8px rgba(0,0,0,0.04)', hover: '0 4px 16px rgba(0,0,0,0.06)' },
      radius: { sm: '4px', md: '8px', lg: '12px', irregular: 'clip-path: polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)' },
      color: {
        bg: '#FAF8F5',
        surface: '#FDFBF8',
        primary: '#6B5B4A',
        secondary: '#9A8A7A',
        accent: '#C8A878',
        ink: '#3D3D3D',
        muted: '#A89888',
        border: '#D8C8B8',
        focus: '#6B5B4A',
        error: '#B22222',
        success: '#556B2F',
        white: '#FFFFFF',
        tatami: '#E8D8C8',
        bamboo: '#9A8A7A',
        stone: '#A8A8A0',
        ink: '#1A1A1A'
      },
      font: {
        heading: '"Noto Serif JP", "Noto Sans JP", sans-serif',
        body: '"Noto Sans JP", "Inter", sans-serif',
        mono: '"Noto Sans Mono JP", monospace',
        weight: { light: 300, normal: 400, medium: 500 }
      },
      motion: { duration: '400ms', easing: 'ease-in-out' }
    },
    do: [
      'Embrace imperfection (asymmetry, irregularity)',
      'Natural materials: wood, paper, stone, bamboo',
      'Muted, earthy color palette',
      'Generous negative space (ma)',
      'Subtle, understated elegance',
      'Aging gracefully (patina, wear)'
    ],
    dont: [
      'Don\'t use perfect symmetry',
      'Don\'t use bright/artificial colors',
      'Don\'t use glossy finishes',
      'Don\'t fill all space',
      'Don\'t use decorative excess'
    ],
    a11yNotes: [
      'Muted palette: test contrast thoroughly',
      'Focus: 3px solid with offset',
      'Irregular shapes: ensure touch targets',
      'Minimalism aids cognitive accessibility'
    ]
  },

  'neo-tokyo': {
    name: 'Neo-Tokyo / Anime',
    description: 'Vivid color, manga-influenced layouts, dynamic energy',
    category: 'cultural-thematic',
    tokens: {
      border: { width: '2px', color: '#FF0080' },
      shadow: {
        default: '0 0 20px rgba(255,0,128,0.4)',
        hover: '0 0 30px rgba(0,255,255,0.5)',
        speed: '8px 0 0 #00FFFF, -8px 0 0 #FF0080'
      },
      radius: { sm: '4px', md: '8px', lg: '12px', sharp: '0px' },
      color: {
        bg: '#0A0A1A',
        surface: '#12122A',
        primary: '#FF0080',
        secondary: '#00FFFF',
        accent: '#FFFF00',
        ink: '#FFFFFF',
        muted: '#8844AA',
        border: '#FF0080',
        focus: '#00FFFF',
        error: '#FF0044',
        success: '#00FF88',
        white: '#FFFFFF',
        speed: '#FF0080',
        neon: '#00FFFF',
        warning: '#FFAA00',
        manga: '#FF0080'
      },
      font: {
        heading: '"Noto Sans JP", "Orbitron", sans-serif',
        body: '"Noto Sans JP", "Inter", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, bold: 700, black: 900 }
      },
      motion: { duration: '150ms', easing: 'ease-out' }
    },
    do: [
      'High saturation: magenta, cyan, yellow',
      'Dark backgrounds with neon accents',
      'Speed lines and motion effects',
      'Manga-style panels and layouts',
      'Dynamic, energetic compositions',
      'Japanese text as design element'
    ],
    dont: [
      'Don\'t use muted colors',
      'Don\'t use static layouts',
      'Don\'t skip the energy/dynamism',
      'Don\'t use serif fonts'
    ],
    a11yNotes: [
      'Dark bg + neon = test contrast',
      'Focus: 3px solid cyan with offset',
      'Speed lines: respect reduced motion',
      'Japanese text: provide translation'
    ]
  },

  'gothic': {
    name: 'Gothic / Dark Fantasy',
    description: 'Ornate serif type, dark moody palettes, dramatic',
    category: 'cultural-thematic',
    tokens: {
      border: { width: '2px', color: '#8B0000' },
      shadow: { default: '0 4px 20px rgba(0,0,0,0.5)', hover: '0 8px 30px rgba(139,0,0,0.3)' },
      radius: { sm: '4px', md: '8px', lg: '16px', arch: '50% 50% 0 0' },
      color: {
        bg: '#0D0D0D',
        surface: '#1A0A0A',
        primary: '#8B0000',
        secondary: '#4A0A0A',
        accent: '#D4AF37',
        ink: '#F5F0E8',
        muted: '#8B4A4A',
        border: '#4A0A0A',
        focus: '#D4AF37',
        error: '#FF0000',
        success: '#2E8B57',
        white: '#F5F0E8',
        blood: '#8B0000',
        gold: '#D4AF37',
        stone: '#2A2A2A',
        velvet: '#1A0A0A'
      },
      font: {
        heading: '"Cinzel", "Trajan Pro", "Old English Text MT", serif',
        body: '"Crimson Text", "Garamond", serif',
        mono: '"Courier New", monospace',
        weight: { normal: 400, bold: 600 }
      },
      motion: { duration: '500ms', easing: 'ease-in-out' }
    },
    do: [
      'Dark, moody palette (black, deep red, gold)',
      'Ornate serif typography (Blackletter, Trajan)',
      'Architectural arches and frames',
      'Gold/red accents on black',
      'Dramatic lighting and shadows',
      'Ornamental borders and flourishes'
    ],
    dont: [
      'Don\'t use bright/happy colors',
      'Don\'t use sans-serif for headings',
      'Don\'t use flat/minimalist layouts',
      'Don\'t skip the ornamentation'
    ],
    a11yNotes: [
      'Dark mode default — light text required',
      'Focus: 3px solid gold with offset',
      'Ornate fonts: minimum 20px for readability',
      'Gold on black: test contrast'
    ]
  },

  'luxury': {
    name: 'Luxury / Premium',
    description: 'Black and gold, serif type, generous spacing, refined',
    category: 'cultural-thematic',
    tokens: {
      border: { width: '1px', color: '#D4AF37' },
      shadow: { default: '0 4px 20px rgba(0,0,0,0.3)', hover: '0 8px 30px rgba(212,175,55,0.2)' },
      radius: { sm: '4px', md: '8px', lg: '12px' },
      color: {
        bg: '#0A0A0A',
        surface: '#121212',
        primary: '#D4AF37',
        secondary: '#FFFFFF',
        accent: '#FFFFFF',
        ink: '#F5F0E8',
        muted: '#888888',
        border: '#333333',
        focus: '#D4AF37',
        error: '#C0392B',
        success: '#27AE60',
        white: '#FFFFFF',
        gold: '#D4AF37',
        goldLight: '#F4E4A8',
        goldDark: '#B8962E',
        black: '#000000',
        charcoal: '#1A1A1A'
      },
      font: {
        heading: '"Didot", "Bodoni", "Playfair Display", serif',
        body: '"Cormorant Garamond", "Georgia", serif',
        mono: '"Courier New", monospace',
        weight: { light: 300, normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '500ms', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
    },
    do: [
      'Black background, gold accents',
      'Elegant serif typography (Didot/Bodoni)',
      'Generous whitespace and spacing',
      'Refined, restrained elegance',
      'High-quality imagery',
      'Subtle gold details only'
    ],
    dont: [
      'Don\'t use bright colors',
      'Don\'t crowd the layout',
      'Don\'t use multiple accent colors',
      'Don\'t use playful/rounded elements'
    ],
    a11yNotes: [
      'Gold on black: test contrast (may need lighter gold)',
      'Focus: 3px solid gold with 3px offset',
      'Serif fonts: minimum 18px',
      'Dark mode default — ensure light text contrast'
    ]
  },

  'industrial': {
    name: 'Industrial / Blueprint',
    description: 'Technical lines, grid paper, schematics, utilitarian',
    category: 'cultural-thematic',
    tokens: {
      border: { width: '1px', color: '#4A90E2' },
      shadow: { default: 'none', hover: '0 0 10px rgba(74,144,226,0.3)' },
      radius: { sm: '0px', md: '2px', lg: '4px' },
      color: {
        bg: '#F0F4FA',
        surface: '#FFFFFF',
        primary: '#4A90E2',
        secondary: '#6B7A8A',
        accent: '#FF6B35',
        ink: '#2D3E50',
        muted: '#8A9BA8',
        border: '#D0D8E0',
        focus: '#4A90E2',
        error: '#D0021B',
        success: '#7ED321',
        white: '#FFFFFF',
        grid: 'rgba(74,144,226,0.1)',
        blueprint: 'rgba(74,144,226,0.05)',
        dimension: '#FF6B35',
        note: '#8A9BA8',
        line: '#4A90E2'
      },
      font: {
        heading: '"JetBrains Mono", "Fira Code", monospace',
        body: '"JetBrains Mono", "Fira Code", monospace',
        mono: '"JetBrains Mono", "Fira Code", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: { duration: '100ms', easing: 'linear' }
    },
    do: [
      'Blueprint grid background',
      'Technical line weights',
      'Dimension lines and annotations',
      'Monospace typography throughout',
      'Minimal color: blue lines on white',
      'Schematic/diagram aesthetic'
    ],
    dont: [
      'Don\'t use decorative elements',
      'Don\'t use organic shapes',
      'Don\'t use fill colors',
      'Don\'t skip the grid'
    ],
    a11yNotes: [
      'High contrast blue on white',
      'Focus: 2px solid blue with offset',
      'Grid lines: low opacity, decorative only',
      'Monospace: ensures character clarity'
    ]
  },

  // ===== INTERACTION-LED STYLES =====
  'motion-first': {
    name: 'Motion-First / Kinetic',
    description: 'Animation drives the design, choreographed interactions',
    category: 'interaction-led',
    tokens: {
      border: { width: '1px', color: 'rgba(0,0,0,0.1)' },
      shadow: { default: '0 4px 16px rgba(0,0,0,0.1)', hover: '0 8px 24px rgba(0,0,0,0.15)' },
      radius: { sm: '8px', md: '12px', lg: '16px' },
      color: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        primary: '#6366F1',
        secondary: '#EC4899',
        accent: '#F59E0B',
        ink: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
        focus: '#6366F1',
        error: '#EF4444',
        success: '#22C55E',
        white: '#FFFFFF'
      },
      font: {
        heading: '"Inter", "SF Pro Display", sans-serif',
        body: '"Inter", "SF Pro Text", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: {
        duration: '300ms',
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        stagger: '50ms',
        pageTransition: '400ms',
        microInteraction: '150ms'
      }
    },
    do: [
      'Animation as primary design tool',
      'Choreographed entrance/exit sequences',
      'Staggered reveals',
      'Spring physics for natural feel',
      'Meaningful transitions between states',
      'Micro-interactions on every action'
    ],
    dont: [
      'Don\'t animate without purpose',
      'Don\'t use linear easing',
      'Don\'t skip reduced motion support',
      'Don\'t block interaction during animation'
    ],
    a11yNotes: [
      'CRITICAL: prefers-reduced-motion disables ALL non-essential animation',
      'Focus: immediate, no animation',
      'Provide instant-complete alternative',
      'Test with vestibular disorders'
    ]
  },

  'parallax': {
    name: 'Parallax / Scroll Storytelling',
    description: 'Layered depth on scroll, narrative scroll experiences',
    category: 'interaction-led',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: { default: '0 8px 32px rgba(0,0,0,0.12)', hover: '0 12px 40px rgba(0,0,0,0.16)' },
      radius: { sm: '8px', md: '16px', lg: '24px' },
      color: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        primary: '#1E3A5F',
        secondary: '#4A5568',
        accent: '#ECC94B',
        ink: '#1A202C',
        muted: '#718096',
        border: '#E2E8F0',
        focus: '#3182CE',
        error: '#E53E3E',
        success: '#38A169',
        white: '#FFFFFF',
        layer1: '#FFFFFF',
        layer2: '#F7FAFC',
        layer3: '#EDF2F7',
        layer4: '#E2E8F0'
      },
      font: {
        heading: '"Playfair Display", "Georgia", serif',
        body: '"Inter", "Source Serif Pro", serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: {
        duration: '600ms',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        parallaxSpeed: { slow: '0.3', medium: '0.5', fast: '0.8' }
      }
    },
    do: [
      'Layered parallax on scroll',
      'Foreground moves faster than background',
      'Narrative scroll sections',
      'Smooth, performant transforms',
      'Scroll-triggered animations',
      'Depth through layering'
    ],
    dont: [
      'Don\'t parallax everything',
      'Don\'t break scroll performance',
      'Don\'t skip reduced motion',
      'Don\'t disable native scroll'
    ],
    a11yNotes: [
      'CRITICAL: prefers-reduced-motion disables parallax',
      'Focus: not affected by scroll position',
      'Provide non-parallax alternative',
      'Ensure content readable without scroll'
    ]
  },

  'spatial-ar': {
    name: 'Spatial / AR-VR UI',
    description: 'Floating panels with depth, visionOS style, spatial computing',
    category: 'interaction-led',
    tokens: {
      border: { width: '1px', color: 'rgba(255,255,255,0.15)' },
      shadow: {
        default: '0 8px 32px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)',
        hover: '0 16px 48px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)',
        depth1: '0 4px 16px rgba(0,0,0,0.15)',
        depth2: '0 8px 32px rgba(0,0,0,0.2)',
        depth3: '0 16px 48px rgba(0,0,0,0.25)',
        glass: '0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)'
      },
      radius: { sm: '12px', md: '18px', lg: '24px', xl: '32px' },
      color: {
        bg: 'radial-gradient(ellipse at center, #1A1A2E 0%, #0A0A1A 100%)',
        surface: 'rgba(255,255,255,0.08)',
        surfaceStrong: 'rgba(255,255,255,0.12)',
        surfaceGlass: 'rgba(255,255,255,0.15)',
        primary: '#00D4FF',
        secondary: '#FF6B9D',
        accent: '#FFD700',
        ink: '#FFFFFF',
        muted: 'rgba(255,255,255,0.6)',
        border: 'rgba(255,255,255,0.15)',
        focus: '#00D4FF',
        error: '#FF6B6B',
        success: '#4ADE80',
        white: '#FFFFFF',
        glass: 'rgba(255,255,255,0.1)',
        portal: 'rgba(0,212,255,0.2)'
      },
      font: {
        heading: '"SF Pro Rounded", "Inter", sans-serif',
        body: '"SF Pro Rounded", "Inter", sans-serif',
        mono: '"SF Mono", "JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: {
        duration: '300ms',
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    },
    do: [
      'Glass panels with depth layers',
      'Floating UI in 3D space',
      'Variable blur by depth',
      'Subtle parallax on head/hand movement',
      'Eye-tracking aware focus',
      'Spatial audio cues'
    ],
    dont: [
      'Don\'t use flat 2D panels',
      'Don\'t skip depth layering',
      'Don\'t use heavy borders',
      'Don\'t ignore comfort (vergence-accommodation)'
    ],
    a11yNotes: [
      'Glass panels: solid fallback for text',
      'Focus: visible at all depths',
      'Depth: not sole information carrier',
      'Motion: respect reduced motion'
    ]
  },

  'voice-ui': {
    name: 'Voice / Conversational UI',
    description: 'Chat-style, minimal visuals, audio-first interaction',
    category: 'interaction-led',
    tokens: {
      border: { width: '0px', color: 'transparent' },
      shadow: { default: '0 2px 8px rgba(0,0,0,0.06)', hover: '0 4px 16px rgba(0,0,0,0.1)' },
      radius: { sm: '12px', md: '18px', lg: '24px', pill: '9999px' },
      color: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        user: '#6366F1',
        assistant: '#F3F4F6',
        primary: '#6366F1',
        secondary: '#EC4899',
        accent: '#F59E0B',
        ink: '#1F2937',
        muted: '#6B7280',
        border: '#E5E7EB',
        focus: '#6366F1',
        error: '#EF4444',
        success: '#22C55E',
        white: '#FFFFFF',
        listening: '#10B981',
        thinking: '#F59E0B',
        speaking: '#6366F1',
        error: '#EF4444'
      },
      font: {
        heading: '"Inter", "SF Pro Display", sans-serif',
        body: '"Inter", "SF Pro Text", sans-serif',
        mono: '"JetBrains Mono", monospace',
        weight: { normal: 400, medium: 500, bold: 600 }
      },
      motion: {
        duration: '200ms',
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        wave: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    },
    do: [
      'Chat bubbles as primary UI',
      'Minimal visual chrome',
      'Visual feedback for voice states (listening, thinking, speaking)',
      'Waveform/orb animations',
      'Transcript as secondary',
      'Hands-free first'
    ],
    dont: [
      'Don\'t use complex visual layouts',
      'Don\'t require visual attention',
      'Don\'t skip voice state indicators',
      'Don\'t use small touch targets'
    ],
    a11yNotes: [
      'Screen reader: native chat pattern',
      'Focus: logical tab order',
      'Voice states: announced via aria-live',
      'Visual + audio redundancy'
    ]
  }
};

function generateStyleFiles(styleName, def) {
  const styleDir = path.join(STYLES_DIR, styleName);
  
  // Generate tokens.json
  const tokens = { name: styleName, ...def.tokens, a11yNotes: def.a11yNotes };
  fs.writeFileSync(
    path.join(styleDir, 'tokens.json'),
    JSON.stringify(tokens, null, 2)
  );

  // Generate css-variables.css
  const cssVars = flattenTokens(def.tokens);
  let css = ':root {\n';
  for (const [key, value] of Object.entries(cssVars)) {
    css += `  --ds-${key}: ${value};\n`;
  }
  css += '}';
  fs.writeFileSync(path.join(styleDir, 'css-variables.css'), css);

  // Generate tailwind.preset.js
  const twConfig = generateTailwindConfig(def.tokens, styleName);
  fs.writeFileSync(path.join(styleDir, 'tailwind.preset.js'), twConfig);

  // Generate STYLE.md
  const styleMd = generateStyleMd(styleName, def);
  fs.writeFileSync(path.join(styleDir, 'STYLE.md'), styleMd);
}

function flattenTokens(tokens, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(tokens)) {
    const newKey = prefix ? `${prefix}-${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date)) {
      Object.assign(result, flattenTokens(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

function generateTailwindConfig(tokens, styleName) {
  const colors = {};
  if (tokens.color) {
    for (const [key, value] of Object.entries(tokens.color)) {
      colors[key] = value;
    }
  }

  const borderWidth = tokens.border?.width ? { ds: tokens.border.width } : {};
  const boxShadow = {};
  if (tokens.shadow) {
    for (const [key, value] of Object.entries(tokens.shadow)) {
      boxShadow[`ds-${key}`] = value;
    }
  }
  const borderRadius = {};
  if (tokens.radius) {
    for (const [key, value] of Object.entries(tokens.radius)) {
      borderRadius[`ds-${key}`] = value;
    }
  }

  const fontFamily = {};
  if (tokens.font) {
    if (tokens.font.heading) fontFamily.heading = [tokens.font.heading];
    if (tokens.font.body) fontFamily.body = [tokens.font.body];
    if (tokens.font.mono) fontFamily.mono = [tokens.font.mono];
  }

  const fontWeight = {};
  if (tokens.font?.weight) {
    for (const [key, value] of Object.entries(tokens.font.weight)) {
      fontWeight[`ds-${key}`] = value;
    }
  }

  const transitionDuration = tokens.motion?.duration ? { ds: tokens.motion.duration } : {};
  const transitionTimingFunction = tokens.motion?.easing ? { ds: tokens.motion.easing } : {};

  return `module.exports = {
  theme: {
    extend: {
      colors: { ds: ${JSON.stringify(colors, null, 6).replace(/\n/g, '\n      ')} },
      borderWidth: ${JSON.stringify(borderWidth, null, 6).replace(/\n/g, '\n      ')},
      boxShadow: ${JSON.stringify(boxShadow, null, 6).replace(/\n/g, '\n      ')},
      borderRadius: ${JSON.stringify(borderRadius, null, 6).replace(/\n/g, '\n      ')},
      fontFamily: ${JSON.stringify(fontFamily, null, 6).replace(/\n/g, '\n      ')},
      fontWeight: ${JSON.stringify(fontWeight, null, 6).replace(/\n/g, '\n      ')},
      transitionDuration: ${JSON.stringify(transitionDuration, null, 6).replace(/\n/g, '\n      ')},
      transitionTimingFunction: ${JSON.stringify(transitionTimingFunction, null, 6).replace(/\n/g, '\n      ')}
    }
  }
}`;
}

function generateComponentPatterns(tokens) {
  const weight = tokens.font?.weight?.bold ?? tokens.font?.weight?.normal ?? 400;
  return `### Button
\`\`\`html
<button class="ds-btn ds-btn-primary">Primary Action</button>
<button class="ds-btn ds-btn-secondary">Secondary Action</button>
\`\`\`
\`\`\`css
.ds-btn {
  font-family: var(--ds-font-heading);
  font-weight: var(--ds-font-weight-bold, ${weight});
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  background: var(--ds-color-primary);
  color: var(--ds-color-ink);
  box-shadow: var(--ds-shadow-default);
  padding: 0.75rem 1.5rem;
  min-height: 44px;
  cursor: pointer;
  transition: background var(--ds-motion-duration) var(--ds-motion-easing), box-shadow var(--ds-motion-duration) var(--ds-motion-easing);
}
.ds-btn:hover { background: var(--ds-color-secondary, var(--ds-color-primary)); box-shadow: var(--ds-shadow-hover, var(--ds-shadow-default)); }
.ds-btn:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
.ds-btn:active { box-shadow: var(--ds-shadow-default); }
.ds-btn:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
.ds-btn-secondary { background: var(--ds-color-secondary, var(--ds-color-primary)); color: var(--ds-color-ink); }
.ds-btn-secondary:hover { background: var(--ds-color-primary); }
\`\`\`

### Card
\`\`\`html
<div class="ds-card"><h3>Card Title</h3><p>Content goes here</p></div>
\`\`\`
\`\`\`css
.ds-card {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  box-shadow: var(--ds-shadow-default);
  color: var(--ds-color-ink);
  font-family: var(--ds-font-body);
  padding: 1.5rem;
}
\`\`\`

### Input
\`\`\`html
<label for="ds-field">Field label</label>
<input id="ds-field" class="ds-input" type="text" />
\`\`\`
\`\`\`css
.ds-input {
  background: var(--ds-color-surface);
  border: var(--ds-border-width) solid var(--ds-border-color);
  border-radius: var(--ds-radius-md);
  color: var(--ds-color-ink);
  font-family: var(--ds-font-body);
  font-size: 1rem;
  min-height: 44px;
  padding: 0.75rem 1rem;
  width: 100%;
}
.ds-input:focus-visible { outline: 2px solid var(--ds-color-focus); outline-offset: 2px; }
.ds-input[aria-invalid="true"] { border-color: var(--ds-color-error); }
\`\`\``;
}

function generateStyleMd(styleName, def) {
  const tokens = def.tokens;
  const tokenJson = JSON.stringify(tokens, null, 2);
  
  return `# ${def.name} Style Preset

## Signature Traits
${def.description}

## Do
${def.do.map(d => `- ${d}`).join('\n')}

## Don't
${def.dont.map(d => `- ${d}`).join('\n')}

## Accessibility Watch-outs
${def.a11yNotes.map(n => `- **${n.split(':')[0]}**: ${n.split(':').slice(1).join(':').trim()}`).join('\n')}

## Token Reference (tokens.json)
\`\`\`json
${tokenJson}
\`\`\`

## CSS Variables (css-variables.css)
\`\`\`css
${flattenTokensToCss(tokens)}
\`\`\`

## Tailwind Preset (tailwind.preset.js)
\`\`\`js
${generateTailwindConfig(tokens, styleName)}
\`\`\`

## Example Component Patterns

Copy these verbatim. They are the exact button/card/input output for this style.

${generateComponentPatterns(tokens)}
`;
}

function flattenTokensToCss(tokens) {
  const flat = flattenTokens(tokens);
  let css = ':root {\n';
  for (const [key, value] of Object.entries(flat)) {
    css += `  --ds-${key}: ${value};\n`;
  }
  css += '}';
  return css;
}

// Main
function main() {
  console.log('Generating style presets...');
  let count = 0;
  for (const [styleName, def] of Object.entries(styleDefinitions)) {
    try {
      generateStyleFiles(styleName, def);
      count++;
      console.log(`  ✅ ${styleName}`);
    } catch (err) {
      console.error(`  ❌ ${styleName}: ${err.message}`);
    }
  }
  console.log(`\nGenerated ${count} style presets.`);
}

main();