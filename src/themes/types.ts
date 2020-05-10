import { PaletteOptions, ThemeOptions, ThemeTypeOptions } from './options';

export interface Color {
  hex: string;
  name: string;
}

export type PaletteOption = typeof PaletteOptions[number];

export type Palette = {
  [key in PaletteOption]: Color;
}

export type PaletteTypes = {
  [key: string]: Palette;
}

export type ThemeOption = typeof ThemeOptions[number];

export type Theme = {
  [key in ThemeOption]: Color;
}

export type ThemeTypeOption = typeof ThemeTypeOptions[number];

export type ThemeTypes = {
  [key in ThemeTypeOption]: Theme;
}
