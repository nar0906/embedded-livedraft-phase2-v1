# Component Documentation

## Core Components

### CoCounselSidebar

Left navigation sidebar with logo, navigation buttons, and user profile.

```tsx
import CoCounselSidebar from '@/components/core/CoCounselSidebar';

<CoCounselSidebar 
  activeItem="library"  // 'chat' | 'history' | 'projects' | 'library'
  onNavigate={(item) => console.log(item)}
/>
```

**Props:**
- `activeItem`: Currently active navigation item
- `onNavigate`: Callback when navigation item is clicked

---

### HomeView

Home screen with greeting and chat input.

```tsx
import HomeView from '@/components/core/HomeView';

<HomeView 
  userName="Jane"
  onNavigate={(item) => console.log(item)}
/>
```

**Props:**
- `userName`: Name to display in greeting (default: "Jane")
- `onNavigate`: Callback for navigation actions (e.g., clicking Library icon)

---

### LibraryView

Library screen with tabs for Prompts, Model documents, Policies, and Playbooks.

```tsx
import LibraryView from '@/components/core/LibraryView';

<LibraryView 
  defaultTab="prompts"  // 'prompts' | 'models' | 'policies' | 'playbooks'
  onImportPlaybook={() => console.log('Import')}
  onBack={() => console.log('Back')}
/>
```

**Props:**
- `defaultTab`: Initial active tab
- `onImportPlaybook`: Callback for "Upload playbook" action
- `onBack`: Callback for back navigation

---

## Icon Components

### SharpIcon

Renders Font Awesome 6 Sharp icons using unicode. Matches Figma designs.

```tsx
import SharpIcon from '@/components/icons/SharpIcon';

// Light variant (default)
<SharpIcon name="paperclip" size={16} color="#666666" />

// Solid variant
<SharpIcon name="star" size={16} color="#1D4B34" solid />

// With custom styles
<SharpIcon 
  name="circle-check" 
  size={20} 
  color="green"
  style={{ marginRight: 8 }}
/>
```

**Props:**
- `name`: Icon name (see list below)
- `size`: Icon size in pixels (default: 16)
- `color`: Icon color
- `solid`: Use solid/filled variant (default: false = light)
- `className`: Additional CSS class
- `style`: Inline styles

**Available Icons:**
- Navigation: `arrow-left`, `arrow-right`, `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`
- Actions: `plus`, `minus`, `xmark`, `check`, `upload`, `pen-to-square`, `trash`
- Files: `file`, `file-lines`, `folder`, `folder-plus`, `book`, `book-sparkles`
- UI: `magnifying-glass`, `sliders`, `sort`, `filter`, `gear`, `circle-info`, `circle-check`
- Communication: `message`, `comment`, `envelope`
- User: `user`, `circle-user`, `users`

---

### Icon

React Font Awesome component for standard icons.

```tsx
import { Icon, faHouse, faUser, faGear } from '@/components/icons';

<Icon icon={faHouse} />
<Icon icon={faUser} size="lg" color="#1D4B34" />
<Icon icon={faGear} className="animate-spin" />
```

**Props:**
- `icon`: Font Awesome icon definition (imported from the same file)
- `size`: FA size scale ('xs', 'sm', 'lg', '2x', etc.)
- `color`: Icon color
- `className`: Additional CSS class
- `style`: Inline styles

**Common Icons Exported:**
- Navigation: `faHouse`, `faArrowLeft`, `faArrowRight`, `faChevronDown`, `faChevronUp`
- Actions: `faPlus`, `faMinus`, `faXmark`, `faCheck`, `faEdit`, `faTrash`
- Files: `faFile`, `faFolder`, `faBook`
- User: `faUser`, `faUsers`, `faCircleUser`
- Status: `faCircleCheck`, `faCircleXmark`, `faSpinner`

---

### CSSIcon

CSS-based Font Awesome icons using class names.

```tsx
import { CSSIcon } from '@/components/icons';

<CSSIcon name="house" style="solid" />
<CSSIcon name="star" style="regular" size={20} color="gold" />
<CSSIcon name="github" style="brands" />
```

**Props:**
- `name`: Icon name without 'fa-' prefix
- `style`: 'solid' | 'regular' | 'light' | 'sharp-solid' | 'sharp-light' | 'brands'
- `size`: Size in pixels or CSS value
- `color`: Icon color
- `className`: Additional CSS class

---

## UI Library Components

Located in `ui-library/components/`. These are JSX components from the UI refresh library.

### Available Components:
- `Button` - Standard button
- `IconButton` - Icon-only button
- `ButtonGroup` - Grouped buttons
- `ChatInput` - Chat message input
- `SendButton` - Send message button
- `StopButton` - Stop generation button
- `Tab` / `Tabs` - Tab navigation
- `SideNav` / `SideNavButton` - Side navigation
- `ToggleSwitch` - Toggle switch
- `BadgeStatus` - Status badges
- `Anchor` / `AnchorCTA` - Link components
- `ActionCard` - Action card
- `BrandHeader` - Header with branding
- `TopNavigation` - Top navigation bar

### Usage:
```tsx
import Button from '@/ui-library/components/Button';
import { ChatInput } from '@/ui-library/components/ChatInput';
```

Note: These are JSX files, not TypeScript. They use the design tokens from `ui-library/` which mirror `src/tokens/`.
