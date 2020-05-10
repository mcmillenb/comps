import { Theme, ThemeTypes } from './types';
import palettes from './palettes';

const GruvboxDarkPalette = palettes.GruvboxDark;
export const GruvboxDark: Theme = {
  'bg-color': GruvboxDarkPalette.black,
  'text-color': GruvboxDarkPalette.white,
  'good-color': GruvboxDarkPalette.cyan,
  'warn-color': GruvboxDarkPalette.yellow,
  'bad-color': GruvboxDarkPalette.red,
  'link-color': GruvboxDarkPalette.blue,
  'accent-color': GruvboxDarkPalette.magenta,
  'highlight-color': GruvboxDarkPalette.brightWhite
};

const GruvboxLightPalette = palettes.GruvboxLight;
export const GruvboxLight: Theme = {
  'bg-color': GruvboxLightPalette.white,
  'text-color': GruvboxLightPalette.black,
  'good-color': GruvboxLightPalette.cyan,
  'warn-color': GruvboxLightPalette.yellow,
  'bad-color': GruvboxLightPalette.red,
  'link-color': GruvboxLightPalette.blue,
  'accent-color': GruvboxLightPalette.magenta,
  'highlight-color': GruvboxLightPalette.brightWhite
};

const themeTypes: ThemeTypes = {
  GruvboxLight, GruvboxDark
};

export default themeTypes;
