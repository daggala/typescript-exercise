export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

/////////////////////// AS PURE + EDITOR SUGGESTIONS

// const breakpoints = {
//   sm: 20,
//   md: 30,
//   lg: 45,
//   xl: 60
// };

// export const mediaQueries = {
//   sm: style => media(breakpoints.sm)(style),
//   md: style => media(breakpoints.md)(style),
//   lg: style => media(breakpoints.lg)(style),
//   xl: style => media(breakpoints.xl)(style)
// };

// const media = size => {
//   return style => `@media (min-width: ${size}em){ ${style}}`;
// };

///////////////////// THe one i used in the beginning for my blog

// export const oldAlgorithm = Object.keys(breakpoints).reduce((acc, key) => {
//   acc[key] = style => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
//   return acc;
// }, {});

///////////////////// The one in the comment on Corin'as blog

// export const corina = Object.keys(breakpoints).reduce((acc, cur) => {
//   acc[cur] = `(min-width: ${breakpoints[cur]}em)`;
//   return acc;
// }, {});

// export const mediaQuery = (key: Number) => {
//   return (style: TemplateStringsArray) =>
//     `@media (min-width: ${key}em) { ${style} }`;
// };

// export const breakpoints = {

// }

// export const size = {
//   mobileS: "520px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px"
// };

//  mobileM: (style: TemplateStringsArray) => media(size.mobileM)(style),
//look if it's possible to take mobileM and and put it for size.MobileM

// export const mediaQueries2 = (key: String) => {
//   return (style : String) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
// };

// export const mediaQueries = (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
//   (acc, key) => {
//     acc[key] = (style: String) =>
//       `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
//     return acc;
//   },
//   {} as { [index: string]: Function }
// );
