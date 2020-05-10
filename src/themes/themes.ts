import { Theme, ThemeTypes } from './types';
import palettes from './palettes';

const GruvboxDarkPalette = palettes.GruvboxDark;
export const GruvboxDark: Theme = {
  'bg-color': GruvboxDarkPalette.black,
  'text-color': GruvboxDarkPalette.white
};

const GruvboxLightPalette = palettes.GruvboxLight;
export const GruvboxLight: Theme = {
  'bg-color': GruvboxLightPalette.white,
  'text-color': GruvboxLightPalette.black
};

const themeTypes: ThemeTypes = {
  GruvboxLight, GruvboxDark
};

export default themeTypes;
