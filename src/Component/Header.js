import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, addUser } from "../Utils/userSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import { toggleSearchBar } from "../Utils/functionalitySlice";

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isCloseButton } = useSelector(state => state.functionality)

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
        dispatch(addUser({ email: user.email, uid: user.uid }));
        if (location.pathname === '/') {
          navigate('/browse');
        } else {
          navigate(location.pathname)
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleCloseButton = () => {
    dispatch(toggleSearchBar(false));
  }


  return (
    <nav className="px-8 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-black">
      <div className="flex items-center gap-6">
        <div>
          <Link to='/browse'><img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="neflix logo" /></Link>
        </div>
        <div>
          <ul className="flex text-white gap-6">
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>Language</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-white">
          <button onClick={handleCloseButton}><i className='bx bx-search text-3xl'></i></button>
        </div>
        <div className="flex items-center ml-4">
          <img className="w-10 h-10 mr-2" alt="profile-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
          <button className="text-white py-2 px-4 font-medium text-lg" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      {!isCloseButton && <SearchBar />}
    </nav>
  )
}

export default Header;