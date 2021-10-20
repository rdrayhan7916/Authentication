import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
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
                setUser(result.user)
                sessionStorage.setItem("email", result.user.email);
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                sessionStorage.removeItem("email");

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
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });

    }, [])
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