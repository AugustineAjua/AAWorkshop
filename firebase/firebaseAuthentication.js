        import firebase from 'firebase/compat/app'; // For Firebase version 9+
        import 'firebase/compat/auth'; // For Firebase version 9+
        import firebaseApp from '../firebase/firebaseConfiguration.js'; // Adjust the path as needed
        import { GoogleAuthProvider } from 'firebase/compat/auth'; // Import GoogleAuthProvider from the compat version
        import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier} from 'firebase/auth';
       


        export const googleSignin = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    localStorage.setItem('loginMessage', 'Successfully logged in: ' + result.user.displayName);
                    window.location.href = "project3.html"; // Redirect to project3.html
                })
                .catch((error) => console.error('There was an error with signing into Google: ', error));
        }
        
        
        export const facebookSignin = () => {
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then((result) => {
                localStorage.setItem('loginMessage', 'Successfully logged in: ' + result.user.displayName);
                window.location.href = "project3.html"; // Redirect to project3.html
            })
            .catch((error) => console.error('There was an error with signing into Facebook: ', error));
    }
            
            export const twitterSignin = () => {
                const provider = new firebase.auth.TwitterAuthProvider();
                firebase.auth().signInWithPopup(provider)
                    .then((result) => {
                        localStorage.setItem('loginMessage', 'Successfully logged in: ' + result.user.displayName);
                        window.location.href = "project3.html"; // Redirect to project3.html
                    })
                    .catch((error) => console.error('There was an error with signing into Twitter: ', error));
            }
           

        // export const signOut = () => {
        //     firebase.auth().signOut().then(() => {
        //     localStorage.setItem('signOutMessage', 'User successfully signed out');
        //     // Redirect to login page
        //     window.location.href = 'projectlogin.html';
        //   }).catch((error) => {
        //     console.error('Sign Out Error', error);
        //   });
        // }

        function signOut() {
            // Perform sign-out operation
            // For example, with Firebase authentication
            firebase.auth().signOut().then(() => {
                // Sign-out successful, wait for a brief moment, then redirect to login page
                setTimeout(() => {
                    window.location.href = 'projectlogin.html';
                    console.log('Successfully logged out');
                }, 100); // Wait for 100 milliseconds (adjust as needed)
            }).catch((error) => {
                // An error occurred while signing out
                console.error('Sign Out Error', error);
            });
        }
        


      

export const emailSignup = (event, email, password) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('User successfully created an account with email and password.');
            window.location.href = "projectlogin.html"; // Redirect to the login page
        })
        .catch((error) => console.error('There was an error while creating an account: ', error));
};





      
        



        // export const signOut = async () => {
        //     try {
        //       await firebase.auth().signOut();
        //       localStorage.setItem('signOutMessage', 'User successfully signed out');
        //       console.log('Successfully signed out'); // Add this line for console message
        //       // Redirect to login page
        //       window.location.href = 'projectlogin.html';
        //     } catch (error) {
        //       console.error('Sign Out Error', error);
        //     }
        //   };
          
          
        
        
        export const emailSignin = (event, email, password) => {
            event.preventDefault(); // Prevent the default form submission behavior
        
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User successfully signed in with email and password.');
                    window.location.href = "project3.html";
                })
                .catch((error) => console.error('There was an error while signing in with email and password: ', error));
        }


     

        export const phoneSignup = (phoneNumber) => {
            const auth = getAuth(firebaseApp);
            const recaptchaVerifier = new RecaptchaVerifier( auth,'recaptcha-container', {}, );
            recaptchaVerifier.render().then(() => {
                signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
                    .then((confirmationResult) => {
                        // SMS sent. Prompt user to enter the code
                        const verificationCode = prompt('Enter the verification code:');
                        return confirmationResult.confirm(verificationCode);
                    })
                    .then((result) => {
                      
                       
                        window.location.href = "project3.html";

                    })
                    .catch((error) => {
                        console.error('Error during phone signup:', error);
                    });
            });
        };
        

