import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

export default function firebaseHandler(library) {
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

  auth.onAuthStateChanged(handleDatabaseStuff);

  async function handleDatabaseStuff(user) {
    if (!user) {
      console.log("no user!");
      return;
    }

    await db.collection("users").doc(user.uid).set({}, { merge: true });

    const libraryRef = db.collection(`users/${user.uid}/books`);

    // TODO: function to render database out
    // TODO: replace callbacks w firebase db listener...
    const librarySnapshot = await libraryRef.get();

    console.log("Document data:", librarySnapshot.docs);

    library.onAddBook((bookData) => {
      addBookToDatabase(bookData, libraryRef);
    });

    library.onDeleteBook((bookId) => {
      removeBookFromDatabase(bookId, libraryRef);
    });
  }

  function addBookToDatabase(bookData, libraryRef) {
    const { serverTimestamp } = firebase.firestore.FieldValue;

    libraryRef.add({
      addedTimestamp: serverTimestamp(),
      ...bookData,
    });
  }

  function removeBookFromDatabase(bookId, libraryRef) {
    libraryRef
      .doc(bookId)
      .then(() => {
        console.log(`Book ${bookId} removed from database!`);
      })
      .catch(() => {
        console.log("Error removing book from database!");
      });
  }
}
