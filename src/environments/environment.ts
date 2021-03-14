// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const getCurrentLang = () :string => {
  if (
    !localStorage.getItem('current_lang') ||
    (localStorage.getItem('current_lang') === 'en')
  )
    return 'https://explore-egypt-db.herokuapp.com';
  else if ((localStorage.getItem('current_lang') === 'ar'))
    return 'http://localhost:4000';
  else 
    return 'https://explore-egypt-db.herokuapp.com';
}
  

export const environment = {
  production: false,
  API_URL: getCurrentLang()
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
