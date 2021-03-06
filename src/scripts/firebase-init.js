import firebase from "firebase/app";
import firebaseConfig from "./firebase-config";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

firebase.initializeApp(firebaseConfig);

export function authHandler() {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.onAuthStateChanged = auth.onAuthStateChanged.bind(auth);

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

  return auth.onAuthStateChanged;
}

export function firestoreHandler(onAuthStateChanged) {
  const db = firebase.firestore();
  let databaseUpdateListeners = [];
  let libraryRef;

  onAuthStateChanged(updateLibraryRef);

  async function updateLibraryRef(user) {
    if (!user) {
      console.log("no user!");
    }

    await db.collection("users").doc(user.uid).set({}, { merge: true });

    libraryRef = db.collection(`users/${user.uid}/books`);

    const librarySnapshot = await libraryRef.get();
    console.log("Document data:", librarySnapshot.docs);

    // so render functions know when to actually be called
    handleDatabaseUpdate();
  }

  function handleDatabaseUpdate() {
    // This feels... dirty :/
    const activeListeners = databaseUpdateListeners.filter(
      (listener) => !!listener
    );

    activeListeners.forEach((listener) => {
      listener();
    });

    databaseUpdateListeners = activeListeners;
  }

  function onDatabaseUpdate(callback) {
    databaseUpdateListeners.push(callback);
  }

  // all of these functions are asynchronous, because I want to make sure
  // I don't try to re-render before the data is updated
  async function addBook(bookData) {
    const { serverTimestamp } = firebase.firestore.FieldValue;

    await libraryRef.add({
      addedTimestamp: serverTimestamp(),
      lastChangedTimestamp: serverTimestamp(),
      ...bookData,
    });

    handleDatabaseUpdate();
  }

  async function setBook(bookData) {
    const { serverTimestamp } = firebase.firestore.FieldValue;
    await libraryRef.doc(bookData.id).set(
      {
        lastChangedTimestamp: serverTimestamp(),
        isRead: bookData.isRead,
      },
      {
        // b/c at the very least I want to keep addedTimestamp
        merge: true,
      }
    );

    onDatabaseUpdate();
  }

  async function removeBook(bookId) {
    if (!libraryRef) {
      console.log("no library reference");
      return;
    }

    const selectedBookRef = await libraryRef.doc(bookId);
    selectedBookRef
      .delete()
      .then(() => {
        console.log(`${bookId} successfully deleted!`);
      })
      .catch(() => {
        console.log(`Error deleting ${bookId}!`);
      });

    handleDatabaseUpdate();
  }

  async function getBooks() {
    if (!libraryRef) {
      return null;
    }

    const librarySnapshot = await libraryRef.get();
    return librarySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  return {
    addBook,
    setBook,
    removeBook,
    getBooks,
    onDatabaseUpdate,
  };
}
