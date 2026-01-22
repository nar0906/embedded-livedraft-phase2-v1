/**
 * CoCounsel 3.0 Design Tokens - Layout
 * 
 * Layout constants and breakpoints
 */

const layout = {
  // Sidebar widths
  sidebar: {
    collapsed: 56,
    expanded: 280,
  },
  
  // Content widths
  content: {
    narrow: 640,
    medium: 768,
    wide: 1024,
    full: 1280,
  },
  
  // Breakpoints
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  
  // Z-index scale
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
  },
};

export default layout;
