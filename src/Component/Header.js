const Header = () => {
  return (
    <nav className="px-40 py-4 bg-gradient-to-b from-black flex items-center justify-between">
      <div>
        <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="neflix logo" />
      </div>
      <div className="flex items-center">
        <img className="w-10 h-10 mr-2" alt="profile-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
        <button className="text-white py-2 px-4 font-medium text-lg">Sign Out</button>
      </div>
    </nav>
  )
}

export default Header