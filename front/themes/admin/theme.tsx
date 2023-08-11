import { defaultTheme } from 'react-admin';

export const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      contrastText: '#ffffff',
      main: '#4682A9',
      light: '#F6F4EB'
    },
    secondary: {
      ...defaultTheme.palette?.secondary,
      main: '#749BC2',
    },
    danger: {
      main: '#da4b4b',
    }
  },
  components: {
    ...defaultTheme.components,
    RaLogin: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(to bottom, #749BC2BF, #749BC2BF)`,
        }
      }
    }
  }
};
