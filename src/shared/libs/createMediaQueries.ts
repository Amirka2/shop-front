export type Keys<T extends Record<string, unknown>> = keyof T;

export interface MediaQueriesMethods<T extends Record<string, number>> {
  gt: Record<Keys<T>, string>;
}

export const createMediaQueries = <T extends Record<string, number>>(
  breakpoints: T,
): MediaQueriesMethods<T> => ({
    gt: Object.keys(breakpoints).reduce((acc, key) => ({
      ...acc,
      [key]: `@media screen and (min-width: ${breakpoints[key]}px)`,
    }), {} as Record<Keys<T>, string>),
  });
