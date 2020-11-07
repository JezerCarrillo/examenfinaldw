
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
    var firestore = firebase.firestore();

    const enviar = document.querySelector("#btnEnviar");

    let nombre = document.querySelector("#nombre");
    let correo = document.querySelector("#correo");
    let mensaje = document.querySelector("#mensaje");

    const db = firestore.collection("examen");

    enviar.addEventListener('submit', (e) =>{
        e.preventDefault();
        let userNameInput = nombre.value;
        let userEmailnput = correo.value;
        let userMessageInput = mensaje.value;

        db.doc()
        .set({
            nombre: userNameInput,
            correo: userEmailnput,
            mensaje: userMessageInput
        })
        .then(function() {
            console.log("Datos Guardados");
        })
        .catch(function(error) {
            console.log(error);
        });
    });

    