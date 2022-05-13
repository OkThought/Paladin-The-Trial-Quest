import {buttonClasses, createTheme, tabClasses} from '@mui/material'

const brand = '#F56736'
const black = '#211A15'
const white = '#ffffff'

let theme = createTheme({
  palette: {
    common: {
      black,
      white,
    },
    primary: {
      main: black,
      light: '#302720',
    },
    secondary: {
      main: brand,
    },
    background: {
      paper: black,
      default: black,
    },
    text: {
      primary: white,
      secondary: brand,
    },
    mode: 'dark',
  },
  shadows: Array.from({length: 25}).map((_, i) =>
    i ? `0px ${i * 3}px ${i * 6}px rgba(0, 0, 0, 0.15);` : 'none',
  ) as any,
  spacing: (n: number) => `${n * 8}px`,
  shape: {
    borderRadius: 10,
  },
})

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
        position: 'static',
        elevation: 0,
        sx: {
          color: black,
          padding: 0,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        // color: 'primary',
      },
      styleOverrides: {
        root: {
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
          },
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      // styleOverrides: {
      //   root: ({ownerState, theme}) => ({
      //     ...(ownerState.variant === 'contained' &&
      //       ownerState.color === 'primary' && {
      //         // backgroundColor: '#202020',
      //         // color: '#fff',
      //         color: theme.palette.secondary.main,
      //         backgroundColor: '#F567364D',
      //       }),
      //   }),
      // },
      styleOverrieds: {
        root: {
          [`&.${buttonClasses.containedSecondary}`]: {
            // color: theme.palette.secondary.main,
            color: brand,
            backgroundColor: '#F567364D',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: theme.palette.getContrastText(theme.palette.background.paper),
        },
      },
    },
    MuiTab: {
      defaultProps: {
        variant: 'contained',
        wrapped: true,
      },
      styleOverrides: {
        root: {
          paddingX: '36px',
          paddingY: '8px',
          minHeight: 'unset',
          borderRadius: theme.shape.borderRadius,
          color: black,
          [`&.${tabClasses.selected}`]: {
            color: white,
            background: black,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          display: 'inline-flex',
          padding: 4,
          borderWidth: '4px',
          borderStyle: 'solid',
          borderRadius: theme.shape.borderRadius,
          borderColor: black,
        },
        scroller: {
          width: 'auto',
          flexGrow: 0,
        },
        indicator: {
          display: 'none',
        },
      },
    },
  },
})

export const mainTheme = theme
