import { Palette, PaletteTypes } from './types';

export const GruvboxDark: Palette = {
  black: { name: 'Black', hex: '1d2021' },
  brightBlack: { name: 'Bright Black', hex: '665c54' },
  white: { name: 'White', hex: 'ebdbb2' },
  brightWhite: { name: 'Bright White', hex: 'FDF4C1' },
  blue: { name: 'Blue', hex: '458588' },
  brightBlue: { name: 'Bright Blue', hex: '83a598' },
  cyan: { name: 'Cyan', hex: '689d6a' },
  brightCyan: { name: 'Bright Cyan', hex: '8ec07c' },
  green: { name: 'Green', hex: '98971a' },
  brightGreen: { name: 'Bright Green', hex: 'b8bb26' },
  magenta: { name: 'Magenta', hex: 'b16286' },
  brightMagenta: { name: 'Bright Magenta', hex: 'd3869b' },
  red: { name: 'Red', hex: 'cc241d' },
  brightRed: { name: 'Bright Red', hex: 'fb4934' },
  yellow: { name: 'Yellow', hex: 'd79921' },
  brightYellow: { name: 'Bright Yellow', hex: 'fabd2f' },
  orange: { name: 'Orange', hex: 'd65d0e' },
  brightOrange: { name: 'Bright Orange', hex: 'fe8019' }
};

export const GruvboxLight: Palette = {
  black: { name: 'Black', hex: '282828' },
  brightBlack: { name: 'Bright Black', hex: '3c3836' },
  white: { name: 'White', hex: 'fbf1c7' },
  brightWhite: { name: 'Bright White', hex: 'f9f5d7' },
  blue: { name: 'Blue', hex: '076678' },
  brightBlue: { name: 'Bright Blue', hex: '458588' },
  cyan: { name: 'Cyan', hex: '427b58' },
  brightCyan: { name: 'Bright Cyan', hex: '689d6a' },
  green: { name: 'Green', hex: '79740e' },
  brightGreen: { name: 'Bright Green', hex: '98971a' },
  magenta: { name: 'Magenta', hex: '8f3f71' },
  brightMagenta: { name: 'Bright Magenta', hex: 'b16286' },
  red: { name: 'Red', hex: '9d0006' },
  brightRed: { name: 'Bright Red', hex: 'cc241d' },
  yellow: { name: 'Yellow', hex: 'b57614' },
  brightYellow: { name: 'Bright Yellow', hex: 'd79921' },
  orange: { name: 'Orange', hex: 'af3a03' },
  brightOrange: { name: 'Bright Orange', hex: 'd65d0e' }
};

const paletteTypes: PaletteTypes = {
  GruvboxLight, GruvboxDark
};

export default paletteTypes;
