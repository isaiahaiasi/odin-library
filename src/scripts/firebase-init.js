import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

import addHandlerToAddBookButton from "./library";

firebase.initializeApp(firebaseConfig);

// * AUTH ---------------------------------------
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
const userIdElement = document.querySelector("#user-id");

auth.onAuthStateChanged((user) => {
  if (user) {
    signedInSection.classList.add("hidden");
    signedOutSection.classList.remove("hidden");
    userNameElement.textContent = user.displayName;
    userIdElement.textContent = user.uid;
  } else {
    signedOutSection.classList.add("hidden");
    signedInSection.classList.remove("hidden");
    userNameElement.textContent = "no signed in user";
    userIdElement.textContent = "N/A";
  }
});

// * FIRESTORE ---------------------------------------

const db = firebase.firestore();

// need a way to listen for when the "add book" button is created,
// and then handle that here

// TODO: fetch books from database
// function getUsersBooks((user, libraryRef) => {

// });

auth.onAuthStateChanged((user) => {
  if (!user) {
    console.log("no user!");
    return;
  }

  const libraryRef = db.collection("library");
  // TODO: write this function...
  addHandlerToAddBookButton((bookData) => {
    const { serverTimestamp } = firebase.firestore.FieldValue;

    libraryRef.add({
      uid: user.uid,
      addedTimestamp: serverTimestamp(),
      ...bookData,
    });
  });
});
