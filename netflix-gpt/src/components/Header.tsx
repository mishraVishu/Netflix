import { useSelector , useDispatch} from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { toggleGPTSearch } from "../utils/GPTSlice";

interface RootState {
  user: {
    isLoggedIn: boolean;
    isAuthLoading: boolean;
    photoUrl?: string;
    // add other user properties if needed
  };
  gpt: {
    showGPTSearch: boolean;
  };
}

const Header = () => {
  const navigate = useNavigate();
  const photoURL = useSelector((store: RootState) => store.user.photoUrl);

  const loggedIn = useSelector((store: RootState) => store.user.isLoggedIn);
  const isAuthLoading = useSelector((store: RootState) => store.user.isAuthLoading);
  console.log(loggedIn);

  const showGPTSearch = useSelector((store:RootState) => store.gpt.showGPTSearch)

  const dispatch = useDispatch();

  const signOutHandler = () => {
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

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  }

  return (
    <div className={loggedIn ? "bg-black text-white mx-8 sm:mx-20 md:mx-32 flex justify-between p-2" : "flex justify-between items-center"}>
      <img src={LOGO} alt="logo" className={loggedIn ? "size-14 z-10" : "size-32 z-10"} />
      <div className="flex gap-4">
        {loggedIn && <img src={photoURL} className="size-8 sm:size-5 md:size-8 lg:size-10 my-2 rounded-full" />}
        <button className="text-white bg-purple-600 px-2 py-1 h-6 sm:h-7 md:h-8 lg:h-8 rounded-lg mt-3 sm:mt-3 md:mt-3 lg:mt-3" onClick={handleGPTSearch}>{!showGPTSearch ? 'GPT Seacrh' :'Go to HomePage'}</button>
        {loggedIn && <button className="bg-white text-black rounded-lg px-2 py-0 h-6 sm:h-7 md:h-8 lg:h-8 text-sm leading-none border-none outline-none appearance-none mt-3 sm:mt-3 md:mt-3 lg:mt-3" onClick={signOutHandler}>SignOut</button>}
      </div>
    </div>
  )
}

export default Header;