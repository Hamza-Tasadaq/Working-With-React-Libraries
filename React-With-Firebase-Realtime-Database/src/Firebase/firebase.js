import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBJK_5jj7R_9BauPkqT9GKatOvHDhzdQ_8",
    authDomain: "react-todo-5a685.firebaseapp.com",
    databaseURL: "https://react-todo-5a685-default-rtdb.firebaseio.com",
    projectId: "react-todo-5a685",
    storageBucket: "react-todo-5a685.appspot.com",
    messagingSenderId: "546985592051",
    appId: "1:546985592051:web:590d6ac50e19ee77c1a386"
};
// Initialize Firebase
export const fireBase = firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database()

export { dataBase }