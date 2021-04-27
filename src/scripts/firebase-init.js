import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const signedInSection = document.querySelector("#when-signed-out");
const signedOutSection = document.querySelector("#when-signed-in");
const signInBtn = document.querySelector("#sign-in-btn");
const signOutBtn = document.querySelector("#sign-out-btn");

signInBtn.addEventListener("click", () => {
  auth.signInWithPopup(provider);
});

signOutBtn.addEventListener("click", () => {
  auth.signOut();
});

const userNameElement = document.querySelector("#user-name");

auth.onAuthStateChanged((user) => {
  if (user) {
    signedInSection.hidden = false;
    signedOutSection.hidden = true;
    userNameElement.textContent = user.displayName;
  } else {
    signedInSection.hidden = false;
    signedOutSection.hidden = true;
    userNameElement.textContent = "no signed in user";
  }
});
