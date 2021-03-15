// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app_url: 'http://localhost:5000',
  // powerbi
  reportBaseURL: 'https://app.powerbi.com/reportEmbed',
  qnaBaseURL: 'https://app.powerbi.com/qnaEmbed',
  tileBaseURL: 'https://app.powerbi.com/embed',
  groupID: 'be8908da-da25-452e-b220-163f52476cdd',
  reportID: 'f6bfd646-b718-44dc-a378-b73e6b528204'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
