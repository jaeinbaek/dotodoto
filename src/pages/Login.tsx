
function Login() {

  return (
    <div className="flex-grow flex flex-col mx-auto container max-w-md px-4 mb-20">
        {/* Heading */}
        <div className="mb-4 mt-8 text-3xl text-gray-800 dark:text-white font-semibold">
            로그인
        </div>
        {/* loginCard */}
        <div className="flex flex-col bg-white dark:bg-gray-700 mb-3 rounded shadow-lg">
          <div className="flex flex-col justify-center mx-8 mt-8 mb-10 text-sm">
            {/* Banner */}
            <div className="mb-6 text-gray-500 text-xl dark:text-gray-200">
              만나서 반갑습니다!
            </div>
            <div className="mb-1 text-xs text-gray-500 dark:text-gray-200">
              아이디
            </div>
            <input
              type="text"
              className="h-8 mb-4 px-2 border-b rounded bg-gray-100 dark:bg-gray-600 border border-transparent text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            / >
            <div className="mb-1 text-xs text-gray-500 dark:text-gray-200">
              패스워드
            </div>
            <input
              type="password"
              className="h-8 mb-4 px-2 border-b rounded bg-gray-100 dark:bg-gray-600 border border-transparent text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            / >
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-200">
              <input
                className="mr-2"
                type="checkbox" 
                disabled
              />
              자동 로그인
            </div>
            <hr className=" my-6 w-2/3" />
            <div>
              <button className="w-1/2 h-8 mr-2 px-3 border border-none rounded-full bg-gradient-to-r from-theme-100 via-theme-200 via-theme-300 via-theme-400 to-theme-500 hover:bg-gray-100 dark:hover:bg-gray-500 bg-opacity-20 text-white dark:text-gray-200">
              로그인
              </button>
              <button className="w-1/4 h-8 mb-4 px-3 border border-gray-400 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
              회원가입
              </button>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-200">Forgot Password?</div>
          </div>
        </div>
    </div>
  );
}

export default Login;
