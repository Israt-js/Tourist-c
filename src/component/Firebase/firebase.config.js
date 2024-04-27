import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYV1A_PvMxaKACKp2m0gmxFfZlm-SiFHA",
  authDomain: "tourismmanagement-10.firebaseapp.com",
  projectId: "tourismmanagement-10",
  storageBucket: "tourismmanagement-10.appspot.com",
  messagingSenderId: "872827248236",
  appId: "1:872827248236:web:1c093c7559efe4e21d4249"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const provider = new FacebookAuthProvider();
export default auth;