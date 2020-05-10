export interface Color {
  hex: string;
  name: string;
}

export interface Palette {
  black: Color;
  brightBlack: Color;
  blue: Color;
  brightBlue: Color;
  cyan: Color;
  brightCyan: Color;
  green: Color;
  brightGreen: Color;
  magenta: Color;
  brightMagenta: Color;
  red: Color;
  brightRed: Color;
  white: Color;
  brightWhite: Color;
  yellow: Color;
  brightYellow: Color;
  [key: string]: Color;
}

export interface PaletteTypes {
  [key: string]: Palette;
}

export interface Theme {
  'bg-color': Color;
  [key: string]: Color;
}

export interface ThemeTypes {
  [key: string]: Theme;
}
