# Design Tokens Reference

## Colors

### Core Colors

#### Racing Green (Primary Brand)
| Token | Hex | Usage |
|-------|-----|-------|
| `racingGreen[100]` | #F5F7F6 | Subtle backgrounds |
| `racingGreen[200]` | #EDF2F0 | Hover states |
| `racingGreen[300]` | #CCD9D2 | Light accents |
| `racingGreen[400]` | #A1B2A9 | Disabled states |
| `racingGreen[500]` | #6E8178 | Secondary text |
| `racingGreen[600]` | #50665B | Active states |
| `racingGreen[700]` | #1D4B34 | **Primary brand color** |
| `racingGreen[800]` | #123021 | Dark/pressed states |

#### Orange (Secondary Brand)
| Token | Hex | Usage |
|-------|-----|-------|
| `orange[100]` | #F8EADD | Warning backgrounds |
| `orange[500]` | #D64000 | **Secondary brand color** |
| `orange[600]` | #AB3300 | Warning text |
| `orange[700]` | #802600 | Dark warning |

#### Gray Scale
| Token | Hex | Usage |
|-------|-----|-------|
| `gray[100]` | #F7F7F7 | Subtle backgrounds |
| `gray[200]` | #F2F2F2 | Light backgrounds |
| `gray[300]` | #EDEDED | Dividers |
| `gray[400]` | #E5E5E5 | Borders (subtle) |
| `gray[500]` | #D2D2D2 | Borders (strong) |
| `gray[600]` | #8A8A8A | Disabled text |
| `gray[700]` | #666666 | Subtle text |
| `gray[800]` | #404040 | Strong text |

#### Sky Blue
| Token | Hex | Usage |
|-------|-----|-------|
| `sky[100]` | #EDF6FF | Info backgrounds |
| `sky[600]` | #0062C4 | Links, info |
| `sky[700]` | #054688 | Link hover |

#### Status Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `green[400]` | #387C2B | Success |
| `red[400]` | #DC0A0A | Error |

### System Colors

```typescript
// Background
systemColors.background.default  // #FCFCFC - Page background
systemColors.background.white    // #FFFFFF - Cards, panels
systemColors.background.subtle   // #F7F7F7 - Subtle fills

// Text
systemColors.text.heavy   // #212223 - Primary text
systemColors.text.strong  // #404040 - Secondary text
systemColors.text.subtle  // #666666 - Tertiary text

// Borders
systemColors.border.subtle   // #E5E5E5
systemColors.border.strong   // #D2D2D2
systemColors.border.stronger // #8A8A8A

// Interactive - Primary (Green buttons)
systemColors.interactive.primary.background.default  // #1D4B34
systemColors.interactive.primary.background.hover    // #123021
systemColors.interactive.primary.on.default          // #FCFCFC

// Interactive - Secondary (Outlined buttons)
systemColors.interactive.secondary.background.default  // #FCFCFC
systemColors.interactive.secondary.background.hover    // #EDF2F0
systemColors.interactive.secondary.border.default      // #8A8A8A

// Interactive - Tertiary (Ghost buttons)
systemColors.interactive.tertiary.background.default  // transparent
systemColors.interactive.tertiary.background.hover    // #EDF2F0

// Focus
systemColors.interactive.focus  // #2E6B5C (Teal)
```

---

## Typography

### Font Families
| Token | Value | Usage |
|-------|-------|-------|
| `fontFamily.primary` | "Source Sans 3" | Body text, buttons |
| `fontFamily.heading` | "Clario" | Headings, titles |
| `fontFamily.icons` | "Font Awesome 6 Sharp" | Icons |

### Font Sizes (4px grid)
| Token | Size | Usage |
|-------|------|-------|
| `fontSize.xs` | 12px | Captions, labels |
| `fontSize.sm` | 14px | Small text, metadata |
| `fontSize.md` | 16px | Body text (default) |
| `fontSize.lg` | 20px | Large body, small headings |
| `fontSize.xl` | 24px | Subheadings |
| `fontSize['2xl']` | 28px | Section titles |
| `fontSize['3xl']` | 32px | Page titles |
| `fontSize['4xl']` | 40px | Hero headings |

### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `fontWeight.light` | 300 | Light text |
| `fontWeight.regular` | 400 | Body text |
| `fontWeight.medium` | 500 | Emphasized text |
| `fontWeight.semibold` | 600 | Buttons, headings |
| `fontWeight.bold` | 700 | Strong emphasis |

### Line Heights
| Token | Value |
|-------|-------|
| `lineHeight.tight` | 1.2 |
| `lineHeight.snug` | 1.35 |
| `lineHeight.normal` | 1.43 |
| `lineHeight.relaxed` | 1.5 |

---

## Spacing

Based on 4px grid system.

| Token | Value | Usage |
|-------|-------|-------|
| `spacing[0.5]` | 2px | Micro spacing |
| `spacing[1]` | 4px | Tight spacing |
| `spacing[2]` | 8px | Default gap |
| `spacing[3]` | 12px | Medium gap |
| `spacing[4]` | 16px | Section padding |
| `spacing[5]` | 20px | Large gap |
| `spacing[6]` | 24px | Section margin |
| `spacing[8]` | 32px | Large margin |
| `spacing[10]` | 40px | Extra large |
| `spacing[12]` | 48px | Maximum |

---

## Borders

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `borders.radius.none` | 0 | No rounding |
| `borders.radius.xs` | 4px | Buttons, inputs |
| `borders.radius.sm` | 8px | Cards |
| `borders.radius.md` | 12px | Modals |
| `borders.radius.lg` | 16px | Large containers |
| `borders.radius.full` | 9999px | Pills, circles |

### Border Width
| Token | Value |
|-------|-------|
| `borders.width.thin` | 1px |
| `borders.width.medium` | 2px |
| `borders.width.thick` | 4px |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadows.none` | none | No shadow |
| `shadows.level1` | 0px 1px 3px rgba(0,0,0,0.08) | Subtle elevation |
| `shadows.level2` | 0px 2px 6px rgba(0,0,0,0.12) | Cards |
| `shadows.level3` | 0px 4px 12px rgba(0,0,0,0.16) | Dropdowns |
| `shadows.level4` | 0px 8px 24px rgba(0,0,0,0.2) | Modals |
| `shadows.focus` | 0 0 0 2px #2E6B5C | Focus ring |

---

## Layout

### Sidebar
| Token | Value |
|-------|-------|
| `layout.sidebar.collapsed` | 56px |
| `layout.sidebar.expanded` | 280px |

### Content Widths
| Token | Value |
|-------|-------|
| `layout.content.narrow` | 640px |
| `layout.content.medium` | 768px |
| `layout.content.wide` | 1024px |
| `layout.content.full` | 1280px |

### Z-Index
| Token | Value |
|-------|-------|
| `layout.zIndex.dropdown` | 100 |
| `layout.zIndex.sticky` | 200 |
| `layout.zIndex.modal` | 400 |
| `layout.zIndex.tooltip` | 600 |
