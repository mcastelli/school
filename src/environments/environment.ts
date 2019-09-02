// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapsKey: 'AIzaSyAE-70gYGN_ypxam5bOwQbq4MYVXMX2z8Y',
  //Firebase configuration
  firebaseConfig: {

    apiKey: 'AIzaSyBXRCGCHOakcd6KXx99FswMGw0g9yH4BQs',
    authDomain: 'school-3e51f.firebaseapp.com',
    databaseURL: 'https://school-3e51f.firebaseio.com',
    projectId: 'school-3e51f',
    storageBucket: 'school-3e51f.appspot.com',
    messagingSenderId: '439108460621',
    appId: '1:439108460621:web:ef6f4a53e9a04368',
 },

  //urls de servicios
  urlFirebaseLogin: 'https://identitytoolkit.googleapis.com/v1',
  
  //parametro para login con firebase
  returnSecureToken: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
