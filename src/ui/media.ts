export enum Breakpoint {
  SM = 767,
  MD = 1439,
}

export const Media = {
  SM: `@media screen and (max-width: ${Breakpoint.SM}px)`,
  MD: `@media screen and (max-width: ${Breakpoint.MD}px)`,
};
