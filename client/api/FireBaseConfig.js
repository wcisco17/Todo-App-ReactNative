import * as firebase from 'firebase';


export const firebaseConfig = {
    apiKey: "AIzaSyAbXc8dujyZeXAEHzhlUeqKQtQG7L_Q3zc",
    authDomain: "auth-fire-911ab.firebaseapp.com",
    databaseURL: "https://auth-fire-911ab.firebaseio.com",
    projectId: "auth-fire-911ab",
    storageBucket: "auth-fire-911ab.appspot.com",
    messagingSenderId: "454722577928"
};

firebase.initializeApp(firebaseConfig);


export const months = [
    {
      id: 1,
      month: 'Jan',
    },
    {
      id: 2,
      month: 'Feb',
    },
    {
      id: 3,
      month: 'Mar',
    },
    {
      id: 4,
      month: 'April',
    },
    {
      id: 5,
      month: 'May',
    },
    {
      id: 6,
      month: 'June',
    },
    {
      id: 7,
      month: 'July',
    },
    {
      id: 8,
      month: 'Aug',
    },
    {
      id: 9,
      month: 'Sept',
    },
    {
      id: 10,
      month: 'Oct',
    },
    {
      id: 11,
      month: 'Nov',
    },
    {
      id: 12,
      month: 'Dec',
    },
]
