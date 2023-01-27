import { extendTheme } from '@chakra-ui/react';
import '@fontsource/inter/400.css';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  colors: {
    primary: '#E5F4ED',
    secondary: '#00B168',
  },
});

export default theme;
