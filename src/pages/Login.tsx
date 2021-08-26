
function Login() {

  return (
    <div className="flex-grow flex flex-col mx-auto container max-w-md px-4 mb-20">
        {/* Heading */}
        <div className="mb-4 mt-8 text-3xl text-gray-800 dark:text-white font-semibold">
            로그인
        </div>
        {/* loginCard */}
        <div className="flex flex-col bg-white dark:bg-gray-700 mb-3 rounded shadow-lg">
          <div className="flex flex-col justify-center mx-8 mt-8 mb-8 text-sm">
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
              className="h-8 mb-6 px-2 border-b rounded bg-gray-100 dark:bg-gray-600 border border-transparent text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            / >
            <div>
              <button className="w-1/2 h-8 mr-4 px-3 border border-gray-400 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
              로그인
              </button>
              <button className="w-1/4 h-8 px-3 border border-gray-400 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 bg-opacity-20 text-gray-900 dark:text-gray-200">
              회원가입
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
