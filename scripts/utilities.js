import firebase from "firebase/app";
import 'firebase/auth';

export const assignClick = (elementId, func) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', func);
    }
    
}


