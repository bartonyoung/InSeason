const colors = {
  // Build.com theme colors
  primary: '#00A499',
  primaryLight: '#CCEEEC',
  primaryDark: '#018F85',
  secondary: '#63666A',
  accent: '#D45D00',
  grey: '#D0D3D4',
  greyLight: '#EBEDEF',
  greyDark: '#B1B2B4',
  grey20: '#333333',
  white: 'white',
  underlayGrey: 'rgba(0, 0, 0, 0.5)',
  error: '#A94442',
  translucentWhite: 'rgba(255,255,255,0.8)',
  none: 'transparent',
  // other colors
  headerBarBackground: '#f0f0f0',
  facebookBlue: '#2C4388',
};

const measurements = {
  borderRadiusSmall: 2,
  borderRadius: 3,
  borderRadiusBootstrap: 4,
  gridSpace1: 8,
  gridSpace2: 16,
  gridSpace3: 24,
  gridSpace4: 32,
};

const fontSize = {
  xsmall: 10,
  small: 13,
  regular: 16,
  large: 19,
  larger: 22,
  xlarge: 28,
};

const iconSize = {
  xsmall: 10,
  small: 13,
  regular: 16,
  large: 19,
  larger: 22,
  xlarge: 28,
  headerSmall: 28,
  headerLarge: 36,
};

const imageSize = [100, 120, 220, 320];

const inputHeight = 48;

const lineHeight = {
  xsmall: '14px',
  small: '21px',
  regular: '21px',
  large: '28px',
  xlarge: '28px',
};

const border = {
  standard: `1px solid ${colors.grey}`,
  error: `1px solid ${colors.error}`,
  solid: '1px solid',
};

const fontFamily = '"Proxima Nova", Helvetica, Arial, sans-serif';

exports.border = border;
exports.colors = colors;
exports.fontFamily = fontFamily;
exports.fontSize = fontSize;
exports.iconSize = iconSize;
exports.imageSize = imageSize;
exports.inputHeight = inputHeight;
exports.lineHeight = lineHeight;
exports.measurements = measurements;

