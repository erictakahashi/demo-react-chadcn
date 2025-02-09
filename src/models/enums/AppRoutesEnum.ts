/**
 * The sub routes names.
 */
export enum MainSubRoutesEnum {
  /** The dashboard route. */
  DASHBOARD = 'dashboard',
}

/**
 * The full routes path.
 */
export enum AppRoutesEnum {
  /** The root route. */
  ROOT = '/',
  /** The dashboard route. */
  DASHBOARD = `/${MainSubRoutesEnum.DASHBOARD}`,
}
