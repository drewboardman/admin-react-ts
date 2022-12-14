import { createContext, useState, useMemo } from 'react';
import { createTheme, Theme, ThemeOptions, PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { PaletteMode } from '@mui/material';

export interface CustomPalette {
  primary: Color;
  grey: Color;
  greenAccent: Color;
  redAccent: Color;
  blueAccent: Color;
}

interface ColorMode {
  toggleColorMode: () => void;
}

interface Color {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// color design tokens
export function tokens(mode: PaletteMode): CustomPalette {
  console.log(`Creating tokens for ${mode} mode`);
  return mode === 'dark' ? darkPallete : lightPallete;
}

// mui theme settings
export function themeOptions(mode: PaletteMode): ThemeOptions {
  const darkTS: PaletteOptions = {
    primary: { main: darkPallete.primary[500] },
    secondary: { main: darkPallete.greenAccent[500] },
    background: { default: darkPallete.primary[100] }
  };

  const lightTS: PaletteOptions = {
    primary: { main: lightPallete.primary[100] },
    secondary: { main: lightPallete.greenAccent[500] },
    background: { default: '#fcfcfc' }
  };

  const colors = mode === 'dark' ? darkTS : lightTS
  const p = { ...colors, mode };
  return {
    palette: p,
    typography
  };
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export function useMode(): [Theme, ColorMode] {
  const [mode, setMode] = useState<PaletteMode>('light');

  // const colorMode: ColorMode = useMemo(
  //   () => ({
  //     toggleColorMode: () => setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light')),
  //   }),
  //   [],
  // );

  const colorMode: ColorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(prevMode => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          return newMode;
        }),
    }),
    [],
  );

  const to: ThemeOptions = themeOptions(mode);
  const theme: Theme = useMemo(() => createTheme(to), [mode]);

  return [theme, colorMode];
}

const lightPallete: CustomPalette = {
  grey: {
    100: '#141414',
    200: '#292929',
    300: '#3d3d3d',
    400: '#525252',
    500: '#666666',
    600: '#858585',
    700: '#a3a3a3',
    800: '#c2c2c2',
    900: '#e0e0e0',
  },
  primary: {
    100: '#040509',
    200: '#080b12',
    300: '#0c101b',
    400: '#f2f0f0',
    500: '#141b2d',
    600: '#434957',
    700: '#727681',
    800: '#a1a4ab',
    900: '#d0d1d5',
  },
  greenAccent: {
    100: '#0f2922',
    200: '#1e5245',
    300: '#2e7c67',
    400: '#3da58a',
    500: '#4cceac',
    600: '#70d8bd',
    700: '#94e2cd',
    800: '#b7ebde',
    900: '#dbf5ee',
  },
  redAccent: {
    100: '#2c100f',
    200: '#58201e',
    300: '#832f2c',
    400: '#af3f3b',
    500: '#db4f4a',
    600: '#e2726e',
    700: '#e99592',
    800: '#f1b9b7',
    900: '#f8dcdb',
  },
  blueAccent: {
    100: '#151618',
    200: '#2a2d31',
    300: '#3e4349',
    400: '#535a62',
    500: '#68707a',
    600: '#868d95',
    700: '#a4a9af',
    800: '#c3c6ca',
    900: '#e1e2e4',
  },
};

const darkPallete: CustomPalette = {
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
  },
  primary: {
    100: '#d0d1d5',
    200: '#a1a4ab',
    300: '#727681',
    400: '#434957',
    500: '#141b2d',
    600: '#101624',
    700: '#0c101b',
    800: '#080b12',
    900: '#040509',
  },
  greenAccent: {
    100: '#dbf5ee',
    200: '#b7ebde',
    300: '#94e2cd',
    400: '#70d8bd',
    500: '#4cceac',
    600: '#3da58a',
    700: '#2e7c67',
    800: '#1e5245',
    900: '#0f2922',
  },
  redAccent: {
    100: '#f8dcdb',
    200: '#f1b9b7',
    300: '#e99592',
    400: '#e2726e',
    500: '#db4f4a',
    600: '#af3f3b',
    700: '#832f2c',
    800: '#58201e',
    900: '#2c100f',
  },
  blueAccent: {
    100: '#e1e2e4',
    200: '#c3c6ca',
    300: '#a4a9af',
    400: '#868d95',
    500: '#68707a',
    600: '#535a62',
    700: '#3e4349',
    800: '#2a2d31',
    900: '#151618',
  },
};

const typography: TypographyOptions = {
  fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
  fontSize: 12,
  h1: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 40,
  },
  h2: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 32,
  },
  h3: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 24,
  },
  h4: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 20,
  },
  h5: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 16,
  },
  h6: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
  },
};
