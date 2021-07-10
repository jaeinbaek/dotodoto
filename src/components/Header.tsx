function Header() {

  const handleChangeTheme = ():void => {

    // Tailwind dark/light mode switching
    if (document.documentElement.classList[0] == 'dark') {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else if (document.documentElement.classList[0] == 'light') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }

  }

  return (
        <div className="flex-none flex items-center justify-between h-16 ">
          {/* logo */}
          <img className="h-6 ml-4" src="mainLogo_dark.png"/>

          {/* theme changer (for dev) */}
          <button
            onClick={handleChangeTheme}
          >
            ChangeTheme
          </button>

          {/* userImg */}
          <img className="h-6 mr-4 shadow-lg rounded-xl" src="user.png"/>
        </div>
  );
}

export default Header; 
