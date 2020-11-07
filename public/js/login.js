
    var firebaseConfig = {
        apiKey: "AIzaSyDWd3wDkL1YSH52Ohj69LWcJIzvmRnVl6M",
        authDomain: "pagina-ing-sis.firebaseapp.com",
        databaseURL: "https://pagina-ing-sis.firebaseio.com",
        projectId: "pagina-ing-sis",
        storageBucket: "pagina-ing-sis.appspot.com",
        messagingSenderId: "511930055683",
        appId: "1:511930055683:web:4a78e83a2766651a692236",
        measurementId: "G-JCF4917WRM"
    };

      firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth();

      const singup = document.querySelector('#signup-form');

      singup.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.querySelector('#login-email').value;
        const password = document.querySelector('#login-password').value;

        console.log(email ,password)

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                signUpForm.reset();
                console.log('Logeado')
            })

    });

    // Login with Google
const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.reset();
  $("#signinModal").modal("hide");

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("google sign in");
  })
  .catch(err => {
    console.log(err);
  })
});

// Login with Facebook
const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', e => {
  e.preventDefault();
  signInForm.reset();
  $("#signinModal").modal("hide");

  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider).then((result) => {
    console.log(result);
    console.log("facebook sign in");
  })
  .catch(err => {
    console.log(err);
  })

})