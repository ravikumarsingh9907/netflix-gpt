import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser);
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({email: user.email, uid: user.uid}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);


  return (
    <nav className="px-8 py-4 flex items-center justify-between z-50">
      <div>
        <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="neflix logo" />
      </div>
      <div className="flex items-center">
        <img className="w-10 h-10 mr-2" alt="profile-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
        <button className="text-white py-2 px-4 font-medium text-lg" onClick={handleSignOut}>Sign Out</button>
      </div>
    </nav>
  )
}

export default Header