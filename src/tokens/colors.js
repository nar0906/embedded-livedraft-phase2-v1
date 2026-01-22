/**
 * CoCounsel 3.0 Design Tokens - Colors
 * 
 * Three-tier token structure:
 * 1. Core tokens - Raw color values
 * 2. System tokens - Semantic purpose
 * 3. Component tokens - Component-specific
 */

// ============================================
// TIER 1: CORE COLOR TOKENS
// ============================================

export const coreColors = {
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  graphite: '#212223',
  pageBackground: '#FCFCFC',
  
  // Gray scale
  gray: {
    100: '#F7F7F7',
    150: '#F3F2EE',
    200: '#F2F2F2',
    300: '#EDEDED',
    400: '#E5E5E5',
    500: '#D2D2D2',
    600: '#8A8A8A',
    700: '#666666',
    800: '#404040',
    900: '#181D27',
  },
  
  // Green-gray
  greenGray: {
    100: '#F0F2F1',
    200: '#E4EBE7',
  },
  
  // Racing Green (Primary brand color)
  racingGreen: {
    100: '#F5F7F6',
    200: '#EDF2F0',
    300: '#CCD9D2',
    400: '#A1B2A9',
    500: '#6E8178',
    600: '#50665B',
    700: '#1D4B34',
    800: '#123021',
  },
  
  // Orange (Secondary brand color)
  orange: {
    100: '#F8EADD',
    200: '#EFB399',
    300: '#E68C66',
    400: '#DE6633',
    500: '#D64000',
    600: '#AB3300',
    700: '#802600',
    800: '#561A00',
  },
  
  // Sky Blue (Tertiary brand color)
  sky: {
    100: '#EDF6FF',
    200: '#E3F1FD',
    300: '#A6D2FF',
    400: '#5AA3ED',
    500: '#0874E3',
    600: '#0062C4',
    700: '#054688',
    800: '#032F5B',
  },
  
  // Teal
  teal: {
    100: '#F0F7F5',
    200: '#E3F3EE',
    300: '#CFE5E0',
    400: '#ADD9CF',
    500: '#91C9BD',
    600: '#4DB299',
    700: '#307A68',
    800: '#24594C',
  },
  
  // Lime
  lime: {
    100: '#F1FDE8',
    200: '#E1F4CD',
    300: '#BCE0A2',
    400: '#8FCB64',
    500: '#7DB257',
    600: '#6B994B',
    700: '#59803E',
    800: '#396619',
  },
  
  // Gold
  gold: {
    100: '#FFF8E5',
    200: '#FCF0DA',
    300: '#FDE8C2',
    400: '#F2D08F',
    500: '#E9B045',
    600: '#CF962A',
    700: '#A6761C',
    800: '#5D461C',
  },
  
  // Amber
  amber: {
    100: '#FFF7F0',
    200: '#F8EADD',
    300: '#F2DDC9',
    400: '#F0BF95',
    500: '#F0A05B',
    600: '#D4792A',
    700: '#553011',
    800: '#AA4F00',
  },
  
  // Green
  green: {
    100: '#EAFFE5',
    200: '#C9FFBF',
    300: '#87CC7A',
    400: '#387C2B',
    500: '#214A1A',
  },
  
  // Red
  red: {
    100: '#FFEDED',
    200: '#FFBFBF',
    300: '#FF8080',
    400: '#DC0A0A',
    500: '#A10707',
  },
  
  // Purple
  purple: {
    100: '#F4E5FF',
    200: '#E3BFFF',
    300: '#9647D1',
    400: '#621F95',
    500: '#351A6E',
  },
  
  // Data Visualization - Teal
  dataVizTeal: {
    100: '#E3F3EE',
    200: '#94D1C2',
    300: '#71C1AD',
    400: '#4DB299',
    500: '#3E8E7A',
    600: '#2E6B5C',
    700: '#1F473D',
  },
};

// ============================================
// TIER 2: SYSTEM TOKENS
// ============================================

export const systemColors = {
  // Background colors
  background: {
    default: coreColors.pageBackground,
    hidden: '#FCFCFC00',
    white: coreColors.white,
    subtle: coreColors.gray[100],
    strong: coreColors.gray[300],
    stronger: coreColors.gray[500],
    strongest: coreColors.gray[800],
    inverse: coreColors.graphite,
  },
  
  // Border colors
  border: {
    subtle: coreColors.gray[400],
    strong: coreColors.gray[500],
    stronger: coreColors.gray[600],
    hidden: '#FCFCFC00',
  },
  
  // Text colors
  text: {
    pageHeader: coreColors.racingGreen[700],
    heavy: coreColors.graphite,
    strong: coreColors.gray[800],
    subtle: coreColors.gray[700],
    white: coreColors.white,
    knockout: coreColors.pageBackground,
  },
  
  // Interactive states
  interactive: {
    primary: {
      border: {
        default: coreColors.racingGreen[700],
        hover: coreColors.racingGreen[800],
        active: coreColors.racingGreen[600],
      },
      background: {
        default: coreColors.racingGreen[700],
        hover: coreColors.racingGreen[800],
        active: coreColors.racingGreen[600],
      },
      on: {
        default: coreColors.pageBackground,
        hover: coreColors.gray[100],
        active: coreColors.white,
      },
    },
    secondary: {
      border: {
        default: coreColors.gray[600],
        hover: coreColors.gray[600],
        active: coreColors.racingGreen[600],
      },
      background: {
        default: coreColors.pageBackground,
        hover: coreColors.racingGreen[200],
        active: coreColors.racingGreen[600],
      },
      on: {
        default: coreColors.graphite,
        hover: coreColors.racingGreen[700],
        active: coreColors.white,
      },
    },
    tertiary: {
      border: {
        default: '#FCFCFC00',
        hover: coreColors.gray[600],
        active: coreColors.gray[600],
      },
      background: {
        default: '#FCFCFC00',
        hover: coreColors.racingGreen[200],
        active: '#FCFCFC00',
      },
      on: {
        default: coreColors.graphite,
        hover: coreColors.racingGreen[700],
        active: coreColors.graphite,
      },
    },
    focus: coreColors.dataVizTeal[600],
    overlay: 'rgba(0, 0, 0, 0.3)',
    disabled: {
      border: { default: coreColors.gray[200] },
      background: {
        subtle: coreColors.gray[200],
        strong: coreColors.gray[600],
      },
      on: {
        subtle: coreColors.gray[600],
        strong: coreColors.gray[200],
      },
    },
  },
  
  // Anchor/Link colors
  anchor: {
    default: coreColors.sky[600],
    hover: coreColors.sky[700],
    active: coreColors.sky[800],
    visited: coreColors.purple[300],
  },
  
  // Status colors
  status: {
    success: {
      strong: coreColors.green[400],
      subtle: coreColors.green[100],
    },
    error: {
      strong: coreColors.red[400],
      subtle: coreColors.red[100],
    },
    warning: {
      strong: coreColors.orange[600],
      subtle: coreColors.gold[100],
    },
    information: {
      strong: coreColors.sky[600],
      subtle: coreColors.sky[100],
    },
    neutral: {
      strong: coreColors.gray[800],
      subtle: coreColors.gray[300],
      stronger: coreColors.racingGreen[700],
      strongSubtle: coreColors.greenGray[200],
    },
  },
};

// ============================================
// TIER 3: COMPONENT TOKENS
// ============================================

export const componentColors = {
  buttonInline: {
    labelText: {
      default: systemColors.anchor.default,
      hover: systemColors.anchor.hover,
      active: systemColors.anchor.active,
      visited: systemColors.anchor.visited,
    },
  },
  card: {
    background: {
      default: '#FCFCFC00',
      hover: coreColors.racingGreen[100],
      active: '#FCFCFC00',
    },
    border: {
      default: coreColors.gray[400],
      hover: coreColors.gray[400],
      active: coreColors.racingGreen[700],
    },
    on: {
      default: coreColors.graphite,
      hover: coreColors.racingGreen[700],
      active: coreColors.graphite,
    },
  },
  sidenav: {
    background: {
      default: '#FCFCFC00',
      hover: coreColors.gray[500],
    },
    border: {
      default: '#FCFCFC00',
      hover: coreColors.gray[600],
    },
    on: {
      default: coreColors.graphite,
      hover: coreColors.graphite,
    },
  },
};

export default {
  core: coreColors,
  system: systemColors,
  component: componentColors,
};
