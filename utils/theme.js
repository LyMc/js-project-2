import { extendTheme } from '@chakra-ui/react';

const colors = {};
const components = {
  Container: {
    baseStyle: {
      maxW: 'container.xl',
    },
  },
};
const config = {
  initialColorMode: 'dark',
};

const theme = extendTheme({ colors, components, config });

export default theme;
