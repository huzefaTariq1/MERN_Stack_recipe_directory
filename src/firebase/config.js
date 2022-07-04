import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwDrjQsh-WDiXg3HyhfKlptPV1gcviWks",
    authDomain: "cooking-recipe-directory.firebaseapp.com",
    projectId: "cooking-recipe-directory",
    storageBucket: "cooking-recipe-directory.appspot.com",
    messagingSenderId: "896277862713",
    appId: "1:896277862713:web:8a9d342f6c77f9a59070e8"
  };


  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
    const projectFirestore=firebase.firestore()

    export {projectFirestore}