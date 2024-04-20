import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles/themes';

const ThemedWrapper = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

addDecorator(withThemes(ThemedWrapper));