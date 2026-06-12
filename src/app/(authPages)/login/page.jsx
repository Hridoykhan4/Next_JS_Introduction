const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center  px-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">লগইন করুন</h2>
                    <p className="text-sm text-gray-500 mt-1">আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন</p>
                </div>

                {/* Form */}
                <form className="space-y-4">

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                            ইমেইল
                        </label>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
                        />
                    </div>

                    {/* Remember & Forgot Password */}
                    <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                            <span>মনে রাখুন</span>
                        </label>
                        <a href="#" className="hover:underline text-blue-600">পাসওয়ার্ড ভুলে গেছেন?</a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors mt-2"
                    >
                        লগইন
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    নতুন অ্যাকাউন্ট? <a href="#" className="text-blue-600 hover:underline">রেজিস্টার করুন</a>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;