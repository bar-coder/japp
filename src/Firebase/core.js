import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
        this.auth.useDeviceLanguage()

        this.googleProvider = new app.auth.GoogleAuthProvider()
        this.googleProvider.addScope(`https://www.googleapis.com/auth/userinfo.profile`)

        this.signInWithGoogle.bind(this)
    }

    signInWithGoogle() {
        return this.auth.signInWithPopup(this.googleProvider)
    }
}
   
export default Firebase
