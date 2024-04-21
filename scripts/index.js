import firebaseApp from '../firebase/firebaseConfiguration.js'; // Adjust the path as needed
import { assignClick, initializeSigninButtons } from './utilities.js';
import { facebookSignin, googleSignin, signOut,twitterSignin, emailSignin } from '../firebase/firebaseAuthentication';
import { emailSignup } from '../firebase/firebaseAuthentication'; // Import emailSignup function
import { phoneSignup } from '../firebase/firebaseAuthentication'; // Import phoneSignup function

const phoneSignupForm = document.getElementById('phone-signup-form');
if (phoneSignupForm) {
    phoneSignupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const phoneNumber = phoneSignupForm['phone-number'].value;
        phoneSignup(phoneNumber);
    });
}



assignClick('signin-google', googleSignin);
assignClick('signin-facebook',facebookSignin);
assignClick('appbar-signout-button', signOut);
assignClick('signin-twitter', twitterSignin);
assignClick('appbar-signout-button', signOut);

const emailSigninForm = document.getElementById('email-signin-form');
if (emailSigninForm) {
    emailSigninForm.addEventListener('submit', (event) => {
        const email = emailSigninForm['email'].value;
        const password = emailSigninForm['password'].value;
        emailSignin(event, email, password);
    });
}

const emailSignupForm = document.getElementById('email-signup-form');
if (emailSignupForm) {
    emailSignupForm.addEventListener('submit', (event) => {
        const email = emailSignupForm['new-email'].value;
        const password = emailSignupForm['new-password'].value;
        emailSignup(event, email, password);
    });
}