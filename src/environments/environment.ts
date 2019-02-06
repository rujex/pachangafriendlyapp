// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig:
        {
            apiKey: 'AIzaSyAUPTCIafERG9SL5-AEMfjpoYJyHNpk2os',
            authDomain: 'pachangafriendly.firebaseapp.com',
            databaseURL: 'https://pachangafriendly.firebaseio.com',
            projectId: 'pachangafriendly',
            storageBucket: 'pachangafriendly.appspot.com"',
            messagingSenderId: '977727970357',
            eventosColeccion: 'eventos'
        },
    defaultSkin: 'light',
    currentLanguages: ['es', 'en'], // idiomas disponibles de la aplicación
    defaultLanguage: 'es', // idioma por defecto

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
