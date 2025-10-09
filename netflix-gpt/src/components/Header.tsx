import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";

interface RootState {
  user: {
    isLoggedIn: boolean;
    isAuthLoading: boolean;
    // add other user properties if needed
  };
}

const Header = () => {
  const navigate = useNavigate();
  const photoURL = useSelector((store: RootState) => store.user.photoUrl);

  const loggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const isAuthLoading = useSelector((store: RootState) => store.user.isAuthLoading);
  console.log(loggedIn);


const signOutHandler= () => {
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        // An error happened.
        console.log(error);
        
      });
  }
  
  if (isAuthLoading) {
    return <div className="text-white bg-black p-4">Loading...</div>;
  }

  return (
    <div className={ loggedIn ? "bg-black text-white mx-8 sm:mx-20 md:mx-32 flex justify-between p-2": "flex justify-between items-center"}>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  alt="logo" className="size-14 z-10"/>
        <div className="flex gap-4">
          {loggedIn && <img src={photoURL} className="size-8 sm:size-5 md:size-8 lg:size-10 my-2 rounded-full"/>}
          <button className="bg-white text-black rounded-lg px-2 py-0 h-6 sm:h-7 md:h-8 lg:h-8 text-sm leading-none border-none outline-none appearance-none mt-3 sm-mt-3 md:mt-2 lg:mt-2" onClick={signOutHandler}>SignOut</button>
        </div>
    </div>
  )
}

export default Header;