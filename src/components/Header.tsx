function Header() {
  return (
        <div className="flex-none flex items-center justify-between h-16 ">
          {/* logo */}
          <img className="h-7 ml-4" src="mainLogo.png"/>
          {/* userImg */}
          <img className="h-7 mr-4 shadow-lg rounded-xl" src="user.png"/>
        </div>
  );
}

export default Header; 
