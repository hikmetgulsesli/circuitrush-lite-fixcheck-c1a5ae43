---
name: CircuitRush Lite FixCheck
colors:
  surface: '#0d1518'
  surface-dim: '#0d1518'
  surface-bright: '#323a3e'
  surface-container-lowest: '#070f12'
  surface-container-low: '#151d20'
  surface-container: '#192124'
  surface-container-high: '#232b2e'
  surface-container-highest: '#2e3639'
  on-surface: '#dbe4e8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dbe4e8'
  inverse-on-surface: '#2a3235'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffffff'
  on-secondary: '#2f3300'
  secondary-container: '#deed00'
  on-secondary-container: '#626900'
  tertiary: '#fff3f3'
  on-tertiary: '#67001d'
  tertiary-container: '#ffcdd0'
  on-tertiary-container: '#be003d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#deed00'
  secondary-fixed-dim: '#c3d000'
  on-secondary-fixed: '#1b1d00'
  on-secondary-fixed-variant: '#454a00'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b8'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#91002d'
  background: '#0d1518'
  on-background: '#dbe4e8'
  surface-variant: '#2e3639'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1200px
---

## Brand & Style
The design system embodies a **Cyber-Industrial** aesthetic, blending high-speed arcade energy with technical precision. It is designed for a target audience that values performance, agility, and the "hacker" ethos of manual system optimization. 

The visual style is a fusion of **Modern Minimalism** and **Neon-Retro**. It utilizes a dark, low-reflectivity base to ensure maximum visual "signal" clarity, while using vibrant neon accents to highlight interactive nodes. The UI should evoke the feeling of a high-performance Heads-Up Display (HUD) found in advanced aerospace or circuit-routing hardware.

## Colors
This design system utilizes a high-contrast palette optimized for OLED displays and low-light environments.

- **Primary (Electric Cyan):** Used for the "Signal" (player), primary actions, and active circuit paths. It carries a subtle outer glow to simulate light emission.
- **Secondary (Neon Yellow):** Used for "Nodes" (collectibles), critical alerts, and secondary interactive elements. 
- **Tertiary (Hazard Red):** Reserved for system errors, "De-sync" warnings, and destructive actions.
- **Background (Deep Slate):** A charcoal base (#0F171A) provides the "void" that allows neon elements to pop without causing eye strain.

## Typography
The typography strategy prioritizes a "terminal" feel while maintaining modern readability. 

- **Space Grotesk** is used for headlines and HUD metrics to provide a futuristic, geometric structure.
- **Geist** handles the standard interface text for its clean, technical neutrality.
- **JetBrains Mono** is utilized for labels, system readouts, and toggle states to reinforce the industrial, monospaced aesthetic. Use uppercase for labels to simulate hardware engraving.

## Layout & Spacing
The layout follows a strict **4px grid** to ensure geometric alignment reminiscent of integrated circuit traces. 

- **HUD Layout:** Critical data points are pinned to the corners of the viewport with a "safe zone" of 24px.
- **Grid System:** A 12-column fluid grid is used for menus, but game elements should snap to a fixed coordinate system.
- **Margins:** Use 16px for mobile breakpoints and 32px for desktop. Vertical rhythm is maintained through 8px and 16px increments to keep components tightly packed and efficient.

## Elevation & Depth
Elevation is not conveyed through shadows, but through **Luminance and Outlines**.

- **Level 0 (Base):** Deep Slate background.
- **Level 1 (Panels):** Slightly lighter charcoal with a 1px solid border (#1A2429).
- **Level 2 (Interactive):** Elements feature a 1px border using the Primary or Secondary color.
- **Active State:** Components utilize a "Bloom" effect—a soft, 4px-8px outer glow in the element's accent color to suggest power flow.
- **Overlays:** Use a 40% blur on background panels with a 10% white tint to simulate glass-covered displays.

## Shapes
This design system uses a **Sharp (0px)** roundedness philosophy. All corners are 90-degree angles to reflect the rigidity of hardware components. 

For certain callouts, a "chamfered" corner (45-degree clip) may be used to enhance the industrial aesthetic, specifically on the top-right and bottom-left of primary containers.

## Components

- **High-Contrast Buttons:** Rectangular with no border-radius. Primary buttons use a solid Electric Cyan fill with black text. Secondary buttons are ghost-style with Cyan borders and glowing text on hover.
- **Digital HUD Displays:** Data readouts should be housed in semi-transparent panels with a 1px border. Use monospaced fonts for fluctuating numbers to prevent layout shift.
- **Tactile Toggle Switches:** Designed to look like physical hardware sliders. The "On" state should trigger a color shift to Neon Yellow with a small "power indicator" dot.
- **Nodes & Collectibles:** Circular or diamond-shaped geometric primitives with a persistent pulse animation and a localized glow.
- **Input Fields:** Styled as "Command Line" entries. Use a blinking underscore `_` as the cursor.
- **Status Chips:** Small, rectangular labels with uppercase monospaced text. Use a solid background for "Active" and an outline for "Standby."