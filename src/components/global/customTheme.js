import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#FFEFE5',
    100: '#FFD1B8',
    200: '#FFB48A',
    300: '#FF975C',
    400: '#FF792E',
    500: '#FF5C00',
    600: '#CC4A00',
    700: '#993700',
    800: '#662500',
    900: '#331200',
  },
};

const fonts = {
  body: 'Inter, sans-serif',
};

const global = {
  body: {
    color: '#474747',
    overflowX: 'hidden',
  },
  header: {
    fontFamily: 'Roboto, sans-serif',
  },
  form: {
    fontFamily: 'Roboto, sans-serif',
  },
  a: {
    textDecoration: 'none !important',
    transition: 'all .5s',
  },
  button: {
    borderRadius: '4px',
  },
  label: {
    color: '#676767',
    fontWeight: 'normal !important',
    fontSize: '14px !important',
    lineHeight: '16px',
    letterSpacing: '0.02em',
  },
  img: {
    maxWidth: '150%',
  },
};

const customTheme = extendTheme({ colors, fonts, styles: { global } });

export default customTheme;
