$(document).ready(() => {
    var config = {
        apiKey: "AIzaSyAn5NoP9LgIzSdhe8-H_zmBhAUOxWz7Huc",
        authDomain: "deuce-dash.firebaseapp.com",
        databaseURL: "https://deuce-dash.firebaseio.com",
        storageBucket: "deuce-dash.appspot.com",
        projectId: "deuce-dash"
    }

    firebase.initializeApp(config)
    var database = firebase.database()
    var db = firebase.firestore()
    var auth = firebase.auth()

    $("#btn-signup").on("click", (e) => {
        e.preventDefault()
        const email = $("#input-email").val().trim()
        const password = $("#input-password").val().trim()
        const username = $("#input-username").val().trim()

        auth.createUserWithEmailAndPassword(email, password)
            .catch(e => console.log(e.code))
            .then(cred => {
                console.log(cred.user.uid)
                const user = auth.currentUser
                user.updateProfile({
                    displayName: username
                })
                logIn()
            })
    })

    $("#btn-login").on("click", (e) => {
        e.preventDefault()
        let email = $("#input-email").val().trim()
        let password = $("#input-password").val().trim()

        auth.signInWithEmailAndPassword(email, password)
            .catch(e => console.log(e.code))
            .then(cred => {
                console.log(cred)
                logIn()
            })
    })

    const logIn = () => {
        console.log("FUCK")
        $.get("/map", () => window.location.href = window.location.origin + "/map")
    }

})