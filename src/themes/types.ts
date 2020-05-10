export interface Color {
  hex: string;
  name: string;
}

export type PaletteOption =
  'black' |
  'brightBlack' |
  'blue' |
  'brightBlue' |
  'cyan' |
  'brightCyan' |
  'green' |
  'brightGreen' |
  'magenta' |
  'brightMagenta' |
  'red' |
  'brightRed' |
  'white' |
  'brightWhite' |
  'yellow' |
  'brightYellow';

export type Palette = {
  [key in PaletteOption]: Color;
}

export interface PaletteTypes {
  [key: string]: Palette;
}

export type ThemeOption =
  'bg-color' |
  'text-color';

export type Theme = {
  [key in ThemeOption]: Color;
}

export interface ThemeTypes {
  [key: string]: Theme;
}
