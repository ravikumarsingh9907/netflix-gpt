import Header from "./Header";
import heroBanner from "../Utils/hero-img.jpg";
import { useRef, useState, useEffect } from "react";
import { validateFormData } from "../Utils/Validate";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const auth = getAuth();

    const handleFormRender = () => {
        setIsSignup(!isSignup);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
          if (user) {
            dispatch(addUser({email: user.email, uid: user.uid}));
            navigate("/browse")
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
      }, []);

    const handleFormSubmit = () => {
        const message = validateFormData({email: email.current.value, password: password.current.value});

        if(message == null) {
            if(isSignup) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(addUser({email: user.email, uid: user.uid}));
                  })
                  .catch((error) => {
                    setErrorMessage(error.message);
                  });
            } else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if(user) dispatch(addUser({email: user.email, uid: user.uid}));
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                });
            }
        } else {
            setErrorMessage(message);
        }
    }

    return (
        <div className="h-screen" style={{ backgroundImage: `url(${heroBanner})` }}>
            <Header />
            <div className="bg-[rgba(0,0,0,0.7)] absolute px-10 py-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="mb-5">
                    <h2 className="font-bold text-white text-3xl">{isSignup ? "Sign up" : "Sign In"}</h2>
                </div>
                <form className="flex flex-col text-white" onClick={(e)=> { e.preventDefault()}}>
                    {isSignup && <input ref={name} className="mb-5 px-5 py-4 rounded-sm bg-gray-800 outline-none" type="text" placeholder="Full Name" />}
                    <input ref={email} className="mb-5 px-5 py-4 rounded-sm bg-gray-800 outline-none" type="text" placeholder="Email or phone number" />
                    <input ref={password} className="mb-5 px-5 py-4 rounded-sm bg-gray-800 outline-none" type="password" placeholder="Password" />
                    <p className="text-red-500 text-bold mb-5">{errorMessage}</p>
                    {isSignup ? <button type="submit" className="bg-[rgb(229,9,20)] px-5 py-2 rounded-sm text-white text-bold" onClick={handleFormSubmit}>Sign Up</button> : 
                    <button type="submit" className="bg-[rgb(229,9,20)] px-5 py-2 rounded-sm text-white text-bold" onClick={handleFormSubmit}>Sign In</button> }
                </form>
                <div className="text-white mt-5 ml-2 text-lg">
                    { !isSignup ? <p className="text-gray-300">New to Netflix? <button onClick={handleFormRender} className="text-white hover:underline">Sign up now.</button></p> :
                    <p className="text-gray-300">Already have an account? <button onClick={handleFormRender} className="text-white hover:underline">Sign in.</button></p> }
                </div>
            </div>
        </div> 
    )
}

export default Login;