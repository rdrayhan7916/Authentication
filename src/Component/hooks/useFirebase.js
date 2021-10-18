import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import initializetion from "../../Firebase/Firebase.init";


initializetion()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail("")
                setPassword("")
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        registerNewUser,
        email,
        password,
        error,
        setPassword,
        setEmail
    }
}
export default useFirebase