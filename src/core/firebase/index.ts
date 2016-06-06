import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://dazzling-heat-8722.firebaseio.com'),
  firebaseAuthConfig({
    method: AuthMethods.Popup
  })
];
