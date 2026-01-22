# CoCounsel Prototype Starter Kit

A reusable foundation for building CoCounsel web-platform and add-in prototypes with the CoCounsel 3.0 design system.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the prototype.

## What's Included

### Design System
- **Design Tokens**: Colors, typography, spacing, borders, shadows (`src/tokens/`)
- **MUI Theme**: Pre-configured Material-UI theme (`src/theme/theme.js`)
- **Global CSS**: Font-face declarations, CSS variables (`app/globals.css`)

### Fonts
- **Clario**: Heading font (all weights)
- **Source Sans 3**: Body font (variable + static)
- **Font Awesome 6 Sharp**: Pro icons (Light + Solid)
- **Font Awesome 7 Free**: Standard icons

### Components
- **Icon Components**: `Icon.tsx` (React FA), `SharpIcon.tsx` (Unicode FA6 Sharp)
- **Core Screens**: `HomeView`, `LibraryView`, `CoCounselSidebar`
- **UI Library**: Button, ChatInput, Tabs, SideNav, and more (`ui-library/`)

## Folder Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles & font-faces
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ThemeRegistry.tsx  # MUI theme provider
├── components/
│   ├── core/              # Reusable screen components
│   │   ├── HomeView.tsx
│   │   ├── LibraryView.tsx
│   │   └── CoCounselSidebar.tsx
│   └── icons/             # Icon components
│       ├── Icon.tsx
│       ├── SharpIcon.tsx
│       └── index.ts
├── public/fonts/          # Font files
│   ├── Clario/
│   ├── fontawesome/
│   └── SourceSans3/
├── src/
│   ├── theme/theme.js     # MUI theme config
│   └── tokens/            # Design tokens
│       ├── colors.js
│       ├── typography.js
│       ├── spacing.js
│       ├── borders.js
│       ├── shadows.js
│       └── layout.js
└── ui-library/components/ # UI refresh library
```

## Creating a New Prototype

1. **Copy this folder** to a new location
2. **Rename** in `package.json`
3. **Update** `app/page.tsx` with your prototype content
4. **Add new pages** in `app/` directory
5. **Create new components** in `components/`

## Using Design Tokens

```tsx
import { coreColors, systemColors } from '@/src/tokens/colors';
import typography from '@/src/tokens/typography';
import spacing from '@/src/tokens/spacing';

// Use in styled components
const MyComponent = styled(Box)({
  backgroundColor: systemColors.background.default,
  color: systemColors.text.heavy,
  padding: spacing[4],
  fontFamily: typography.fontFamily.primary,
});
```

## Using Icons

### SharpIcon (FA6 Sharp Pro - for Figma-matching icons)
```tsx
import SharpIcon from '@/components/icons/SharpIcon';

<SharpIcon name="paperclip" size={16} color="#666" />
<SharpIcon name="star" size={16} solid />
```

### Icon (React Font Awesome)
```tsx
import { Icon, faHouse } from '@/components/icons';

<Icon icon={faHouse} size="lg" color="#1D4B34" />
```

## Deploying to Vercel

1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy (no configuration needed)

## Key Dependencies

- Next.js 15
- React 19
- MUI 7
- Tailwind CSS 4
- Font Awesome 7

## AI Assistant Rules

This project includes Cursor/Cline rules in `.cursor/rules/cocounsel-prototype.mdc` that guide AI assistants on using the design system correctly.
