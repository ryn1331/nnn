
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyDUzOZUtba0JrojS__HDXZa3bCc8XGvvtU",
    authDomain: "authentification-sms-otp.firebaseapp.com",
    projectId: "authentification-sms-otp",
    storageBucket: "authentification-sms-otp.appspot.com",
    messagingSenderId: "321838750954",
    appId: "1:321838750954:web:2e64235900c905005f8b93",
    measurementId: "G-2W8CQTLQK7"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement
        
        const phoneNumber = $("#phoneNumber").val(); // Récupère le numéro de téléphone de l'utilisateur
        const appVerifier = new RecaptchaVerifier('recaptcha-container');
        
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // Le code de vérification a été envoyé avec succès
                const verificationCode = prompt('Entrez le code de vérification que vous avez reçu par SMS :');
                return confirmationResult.confirm(verificationCode);
            })
            .then((result) => {
                // L'utilisateur est authentifié avec succès
                console.log("Authentification réussie :", result.user);
            })
            .catch((error) => {
                // Une erreur s'est produite lors de l'envoi du code ou de la vérification
                console.error("Erreur d'authentification :", error);
            });
    });
});
