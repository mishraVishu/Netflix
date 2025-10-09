import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser, setAuthLoading } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const AuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAuthLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (window.location.pathname !== "/browse") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      }
    });
  }, [dispatch, navigate]);

  return null;
};

export default AuthListener;
