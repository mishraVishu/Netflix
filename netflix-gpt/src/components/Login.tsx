import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
        <div className="bg-black rounded-lg text-white px-20 py-2 m-5 bg-opacity-75 w-60 sm:w-3/12 md:w-3/12  lg:w-3/12 ">
            <h1 className="font-bold text-3xl py-7">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <form autoComplete="off">
                { !isSignInForm &&
               <div>
                 <input type="text" placeholder="Full Name" autoComplete="off" className="border-gray-500 border bg-black bg-opacity-75 rounded-lg p-2 sm:px-5 sm:py-2 md:px-5  md:py-2 lg:px-5 lg:py-4 m-2 w-full bg-opacity-75" />
               </div>}
               <div>
                 <input type="email" placeholder="Email" autoComplete="off" className="border-gray-500 border bg-black bg-opacity-75 rounded-lg p-2 sm:px-5 sm:py-2 md:px-5  md:py-2 lg:px-5 lg:py-4 m-2 w-full bg-opacity-75" />
               </div>
               <div>
                 <input type="password" placeholder="Password" autoComplete="new-password" className="border-gray-500 border bg-black bg-opacity-75 rounded-lg p-2 sm:px-5 sm:py-2 md:px-5  md:py-2 lg:px-5 lg:py-4 m-2 w-full bg-opacity-75" />
               </div>
                <div>
                  <button className="rounded-lg bg-red-800 text-white p-2 mx-2 my-5 w-full">{ isSignInForm ? "Sign In" : "Sign Up" }</button>
                </div>
                {isSignInForm ? <p className="text-gray-400 my-5">New to Netflix? <span className="font-bold text-white cursor-pointer" onClick={toggleForm}>Sign up now.</span></p> : <p className="text-gray-400 my-5">Already Registered ? <span className="font-bold text-white cursor-pointer" onClick={toggleForm}>Sign in now.</span></p>}
            </form>
        </div>
  )
}

export default Login;