//EN PRIMER LUGAR INSTALAR LAS SIGUIENTES DEPENDENCIAS:
//Algunas son del github:
//https://github.com/prescottprue/react-redux-firebase
//sudo npm install--save firebase react - redux@5 react - redux - firebase@2 redux redux - firestore

import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase/app';
import 'firebase/firestore';


//Necesário para poder hacer login en firebase
import 'firebase/auth';
//Reducers personalizados
//import buscarUsuarioReducer from './reducers/buscarSuscriptorReducer';
//Configuracion firebase


var firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: "web-sanis.firebaseapp.com",
    databaseURL: "https://web-sanis.firebaseio.com",
    projectId: "web-sanis",
    storageBucket: "web-sanis.appspot.com",
    messagingSenderId: "432959032751",
    appId: "1:432959032751:web:d44352e348bc8d66ed735a",
    measurementId: "G-VMSP6LZCB4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

//Crear el enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
    //suscriptor: buscarUsuarioReducer
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase)//,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;