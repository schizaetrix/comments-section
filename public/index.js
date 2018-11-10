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


//--------------------------------------------------------------

// TODO:    Write function(s) that takes user input from 
//          the comment form (id='comment-form') and writes
//          it to the appropriate child nodes in my DB
// TODO:    Modify the below code so that each object group
//          (ie. username, email and comment child nodes)
//          becomes a list item that gets added to the
//          comment div (id='comment-area')

//--------------------------------------------------------------

// NOTE:    This section prints the data from the 'users' 
//          object in my Firebase DB to the 'comment-area' 
//          div in index.html
const commentArea = document.getElementById('comment-area')
const dbRefComment = firebase.database().ref().child('users')
dbRefComment.on('value', snap => {
    commentArea.innerText = JSON.stringify(snap.val(), null, 3)
})  
// TODO:        Modify the above code to parse through the
//              stringified snap value (instead of setting
//              the innerText of commentArea)

// TODO:        Write a function that takes the object
//              returned by the parse and creates a template
//              literal div that formats the comment.
//              Something like...?
//              ` <div>
//                  <div>${users.username}</div>
//                  <div>${users.email}</div>
//                  <div>${users.comment}</div>
//              </div> ` 

// TODO:        Modify the below list code so that the above
//              template literal is added as the innerHTML
//              of each li tag that is appended to the ul


// NOTE:    This section is an example of how to append 'li'
//          child tags to the 'list' ul tag in index.html
const ulList = document.getElementById('list')
const dbRefList = dbRefComment.child('list')
dbRefList.on('child_added', snap => {
    const li = document.createElement('li')
    li.innerText = snap.val()
    li.id = snap.key
    ulList.appendChild(li)
})
// NOTE:    This section allows you to change list items
dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key)
    liChanged.innerText = snap.val()
})
// NOTE:    This section allows you to remove list items
dbRefList.on('child_removed', snap => {
    const liRemoved = document.getElementById(snap.key)
    liRemoved.remove()
})