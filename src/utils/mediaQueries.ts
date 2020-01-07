const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60
};

export const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = style => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
  return acc;
}, {});
