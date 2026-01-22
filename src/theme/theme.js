/**
 * CoCounsel 3.0 MUI Theme Configuration
 *
 * This theme integrates the CoCounsel design tokens with Material-UI
 */

import { createTheme } from '@mui/material/styles';
import { coreColors, systemColors } from '../tokens/colors';
import typography from '../tokens/typography';
import spacing from '../tokens/spacing';
import borders from '../tokens/borders';
import shadows from '../tokens/shadows';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: coreColors.racingGreen[700],
      dark: coreColors.racingGreen[800],
      light: coreColors.racingGreen[200],
      contrastText: coreColors.white,
    },
    secondary: {
      main: coreColors.orange[500],
      dark: coreColors.orange[600],
      light: coreColors.orange[100],
      contrastText: coreColors.white,
    },
    info: {
      main: coreColors.sky[600],
      dark: coreColors.sky[700],
      light: coreColors.sky[100],
      contrastText: coreColors.white,
    },
    success: {
      main: coreColors.green[400],
      dark: coreColors.green[500],
      light: coreColors.green[100],
      contrastText: coreColors.white,
    },
    warning: {
      main: coreColors.orange[600],
      dark: coreColors.orange[700],
      light: coreColors.orange[100],
      contrastText: coreColors.white,
    },
    error: {
      main: coreColors.red[400],
      dark: coreColors.red[500],
      light: coreColors.red[100],
      contrastText: coreColors.white,
    },
    background: {
      default: systemColors.background.default,
      paper: systemColors.background.white,
    },
    text: {
      primary: systemColors.text.heavy,
      secondary: systemColors.text.strong,
      disabled: systemColors.text.subtle,
    },
    divider: systemColors.border.subtle,
  },

  typography: {
    fontFamily: typography.fontFamily.primary,
    fontSize: 16,
    h1: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.tight,
    },
    h2: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.tight,
    },
    h3: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.tight,
    },
    h4: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.tight,
    },
    h5: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.tight,
    },
    h6: {
      fontFamily: typography.fontFamily.heading,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.tight,
    },
    body1: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.regular,
      lineHeight: typography.lineHeight.relaxed,
    },
    body2: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.regular,
      lineHeight: typography.lineHeight.normal,
    },
    button: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.md,
      fontWeight: typography.fontWeight.semibold,
      lineHeight: typography.lineHeight.relaxed,
      textTransform: 'none',
    },
    caption: {
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.regular,
      lineHeight: typography.lineHeight.normal,
    },
  },

  spacing: (factor) => spacing[factor] || spacing[1] * factor,

  shape: {
    borderRadius: borders.radius.xs,
  },

  shadows: [
    shadows.none,
    shadows.level1,
    shadows.level2,
    shadows.level3,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
    shadows.level4,
  ],

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: borders.radius.xs,
          padding: `${spacing[2]}px ${spacing[4]}px`,
          fontSize: typography.fontSize.md,
          fontWeight: typography.fontWeight.semibold,
          textTransform: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:focus-visible': {
            boxShadow: shadows.focus,
            outline: 'none',
          },
        },
        sizeLarge: {
          padding: `${spacing[3]}px ${spacing[6]}px`,
          fontSize: typography.fontSize.lg,
        },
        sizeSmall: {
          padding: `${spacing[1]}px ${spacing[3]}px`,
          fontSize: typography.fontSize.sm,
          height: 32,
        },
        contained: {
          boxShadow: shadows.none,
          '&:hover': {
            boxShadow: shadows.none,
          },
        },
        containedPrimary: {
          backgroundColor: systemColors.interactive.primary.background.default,
          color: systemColors.interactive.primary.on.default,
          '&:hover': {
            backgroundColor: systemColors.interactive.primary.background.hover,
          },
          '&:active': {
            backgroundColor: systemColors.interactive.primary.background.active,
          },
          '&:disabled': {
            backgroundColor: systemColors.interactive.disabled.background.subtle,
            color: systemColors.interactive.disabled.on.subtle,
          },
        },
        outlined: {
          borderColor: systemColors.interactive.secondary.border.default,
          color: systemColors.text.heavy,
          backgroundColor: systemColors.interactive.secondary.background.default,
          '&:hover': {
            backgroundColor: systemColors.interactive.secondary.background.hover,
            borderColor: systemColors.interactive.secondary.border.hover,
          },
          '&:disabled': {
            borderColor: systemColors.interactive.disabled.border.default,
            color: systemColors.interactive.disabled.on.subtle,
          },
        },
        text: {
          color: systemColors.text.heavy,
          '&:hover': {
            backgroundColor: systemColors.interactive.tertiary.background.hover,
          },
          '&:disabled': {
            color: systemColors.interactive.disabled.on.subtle,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: borders.radius.xs,
            '& fieldset': {
              borderColor: systemColors.border.subtle,
            },
            '&:hover fieldset': {
              borderColor: systemColors.border.strong,
            },
            '&.Mui-focused fieldset': {
              borderWidth: borders.width.thin,
              borderColor: systemColors.interactive.focus,
            },
            '&.Mui-focused': {
              boxShadow: shadows.focus,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borders.radius.sm,
          border: `${borders.width.thin}px solid ${systemColors.border.subtle}`,
          boxShadow: shadows.level1,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: borders.radius.sm,
        },
        elevation0: {
          boxShadow: shadows.none,
        },
        elevation1: {
          boxShadow: shadows.level1,
        },
        elevation2: {
          boxShadow: shadows.level2,
        },
        elevation3: {
          boxShadow: shadows.level3,
        },
        elevation4: {
          boxShadow: shadows.level4,
        },
      },
    },
  },
});

export default theme;
