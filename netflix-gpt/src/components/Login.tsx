import { useRef, useState } from "react";
import { checkValidity } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { IoWarning } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { addUser } from "../utils/userSlice";
import { USER_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState<boolean>(true);
  const [errormsg, setErrormsg] = useState<string | null>(null); 

  const dispatch = useDispatch();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
      const validation = checkValidity(
        email?.current?.value || "",
        password?.current?.value || "",
        name?.current?.value || ""
      );
      setErrormsg(validation);

      if(validation) return ;

      if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email?.current?.value || "", password?.current?.value || "")
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {
              displayName: name?.current?.value, photoURL: USER_URL
            }).then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            }).catch((error) => {
              console.log(error);
            });
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrormsg(errorCode + errorMessage)
          });
      }else{
        signInWithEmailAndPassword(auth, email?.current?.value || "", password?.current?.value || "")
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrormsg(errorCode + errorMessage);
          });
      }
  }

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="bg-black rounded-lg text-white px-5 sm:px-10 md:px-10 lg:px-10 py-2 m-5 bg-opacity-75 w-72 sm:w-1/2 md:w-1/2  lg:w-3/12 ">
      <h1 className="font-bold text-3xl py-7">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        {errormsg && <div className="bg-yellow-500 px-5 py-8 w-full flex rounded-lg m-2 gap-4 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap items-center">
          <IoWarning className="text-black size-7 flex-shrink-0" />
          <p className="text-black">{errormsg}</p>
        </div>}

        {!isSignInForm &&
          <div>
            <input type="text" ref={name} placeholder="Full Name" autoComplete="off" className="border-gray-500 border bg-black bg-opacity-75 rounded-lg p-2 sm:px-5 sm:py-2 md:px-5  md:py-2 lg:px-5 lg:py-4 m-2 w-full bg-opacity-75" />
          </div>}
        <div>
          <input ref={email} type="email" placeholder="Email" autoComplete="off" className="border-gray-500 border bg-black bg-opacity-75 rounded-lg p-2 sm:px-5 sm:py-2 md:px-5  md:py-2 lg:px-5 lg:py-4 m-2 w-full bg-opacity-75 " />
        </div>
        <div>
          <input ref={password} type="password" placeholder="Password" autoComplete="new-password" className="border-gray-500 border bg-black bg-opacity-75 rounded-lg p-2 sm:px-5 sm:py-2 md:px-5  md:py-2 lg:px-5 lg:py-4 m-2 w-full bg-opacity-75 " />
        </div>
        <div>
          <button className="rounded-lg bg-red-800 text-white p-2 mx-2 my-5 w-full" onClick={handleSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        </div>
        {isSignInForm ? <p className="text-gray-400 my-5">New to Netflix? <span className="font-bold text-white cursor-pointer" onClick={toggleForm}>Sign up now.</span></p> : <p className="text-gray-400 my-5">Already Registered ? <span className="font-bold text-white cursor-pointer" onClick={toggleForm}>Sign in now.</span></p>}
      </form>
    </div>
  )
}

export default Login;