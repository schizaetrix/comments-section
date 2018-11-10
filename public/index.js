// Initialize Firebase
const config = {
    apiKey: "AIzaSyDD_EmUyHKXNCBPwb6HVjF74XI5GdhrcBE",
    authDomain: "comments-section-2cf36.firebaseapp.com",
    databaseURL: "https://comments-section-2cf36.firebaseio.com",
    projectId: "comments-section-2cf36",
    storageBucket: "comments-section-2cf36.appspot.com",
    messagingSenderId: "141762911662"
};
firebase.initializeApp(config);

// Define Realtime Database references & synchronization
const commentArea = document.getElementById('comment-area')
const dbRefComment = firebase.database().ref().child('users')
dbRefComment.on('value', snap => {
    commentArea.innerText = JSON.stringify(snap.val(), null, 3)
})

const ulList = document.getElementById('list')
const dbRefList = dbRefComment.child('list')
dbRefList.on('child_added', snap => {
    const li = document.createElement('li')
    li.innerText = snap.val()
    li.id = snap.key
    ulList.appendChild(li)
})
dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key)
    liChanged.innerText = snap.val()
})
dbRefList.on('child_removed', snap => {
    const liRemoved = document.getElementById(snap.key)
    liRemoved.remove()
})


// const username = document.getElementById('username-text')
// const email = document.getElementById('email-text')
// const comment = document.getElementById('comment-text')